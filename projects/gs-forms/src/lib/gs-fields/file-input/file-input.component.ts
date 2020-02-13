import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { GFieldFile } from './../../gs-forms.widgets';
import { GsFormsService } from '../../gs-forms.service';

@Component({
  selector: 'gs-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.sass']
})
export class GsFileInputComponent implements OnInit {
  @Input() public field: GFieldFile;
  @Input() public formGroup: FormGroup;

  public name: string;
  public size: string;
  public img: any = '';

  public loading = false;

  public selectedFile: {
    isImage: boolean;
    type: string;
    isValidType: boolean;
    name: string;
    path?: string | any;
  };

  private supportedFilesTranslates = {
    es: 'Archivos soportados',
    en: 'Supported files',
    pt: 'Arquivos suportados'
  };
  public supportedFilesText: string;

  private errorTranslates = {
    es: 'Ocurrio un error al subir el archivo. Por favor intenta de nuevo.',
    en: 'There was an error uploading the file. Please try again.',
    pt: 'Ocorreu um erro ao fazer o upload do arquivo. Por favor tente novamente.'
  };
  public errorText: string;

  constructor(
    private formsServices: GsFormsService,
    private gsFromsService: GsFormsService
  ) { }

  ngOnInit() {
    this.supportedFilesText = this.supportedFilesTranslates[this.gsFromsService.getLang() || 'en'];
  }

  public onFileChange($event: any): void {
    this.loading = true;

    const reader = new FileReader();
    const file: File = $event.target.files[0];
    const fileType = file.name.split('.').reverse()[0];
    const fileName = file.name.split('.').reverse()[1];
    let isValidType = true;

    if (!this.validFileType(file)) {
      isValidType = false;
    }

    if (file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.selectedFile = {
          isImage: true,
          path: reader.result,
          name: fileName,
          type: `.${fileType}`,
          isValidType
        };
      };
    } else {
      this.selectedFile = {
        isImage: false,
        name: fileName,
        type: `.${fileType}`,
        isValidType
      };
    }

    this.processFile(file);
  }

  private processFile(file: any): void {
    const reader = new FileReader();
    const url = this.field.config.api.url;
    const method = this.field.config.api.method;
    const paramName = this.field.config.api.fileParamName;

    reader.addEventListener('load', () => {
      this.formsServices.uploadFileServices(url, method, file, paramName)
        .subscribe(
          response => {
            this.formGroup.controls[this.field.config.model].patchValue(response);
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
          }, error => {
            console.error('Unable to upload the image. Error:', error);
            this.errorText = this.errorTranslates[this.gsFromsService.getLang() || 'en'];
          });
    });

    reader.readAsDataURL(file);
  }

  private returnFileSize(size: number): string {
    if (size < 1024) {
      return size + 'bytes';
    } else if (size >= 1024 && size < 1048576) {
      return (size / 1024).toFixed(1) + 'KB';
    } else if (size >= 1048576) {
      return (size / 1048576).toFixed(1) + 'MB';
    }
  }

  private validFileType(file: File): boolean {
    return this.field.config.accept.replace(/ /g, '').split(',').includes(`.${file.type.split('/')[1]}`);
  }

}
