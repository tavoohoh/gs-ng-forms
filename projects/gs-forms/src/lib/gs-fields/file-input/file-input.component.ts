import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { RppGenericFieldComponent } from '../_generic-field/_generic-field.component';
import { GFieldFile } from './../../gs-forms.widgets';

@Component({
  selector: 'gs-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.sass']
})
export class GsFileInputComponent extends RppGenericFieldComponent implements OnInit, OnChanges {
  @Input() public field: GFieldFile;
  @Output() private fieldChanged = new EventEmitter<{ file: File; model: string; }>();

  public size: number;
  public selectedFile: File;
  public loading = false;
  private returnFile: boolean;

  private supportedFilesTranslates = {
    es: 'Archivos soportados',
    en: 'Supported files',
    pt: 'Arquivos suportados'
  };
  private supportedSizeFilesTranslates = {
    es: `Tamaño limite`,
    en: 'Size limit',
    pt: 'Limite de tamanhos'
  };
  public supportedFilesText: string;
  public supportedSizeFilesText: string;

  private errorTranslates = {
    es: 'Ocurrio un error al subir el archivo. Por favor intenta de nuevo.',
    en: 'There was an error uploading the file. Please try again.',
    pt: 'Ocorreu um erro ao fazer o upload do arquivo. Por favor tente novamente.'
  };
  public errorText: string;

  ngOnInit() {
    this.supportedFilesText = this.supportedFilesTranslates[this.formsService.getLang() || 'en'];
    this.supportedSizeFilesText = this.supportedSizeFilesTranslates[this.formsService.getLang() || 'en'];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field.currentValue) {
      if (this.field.config.value) {
        this.selectedFile = this.field.config.value;
        this.formGroup.controls[this.field.config.model].patchValue(this.field.config.value);
        this.formGroup.controls[this.field.config.model].updateValueAndValidity();
      }

      if (this.field.config.returnFile) {
        this.returnFile = true;
      } else {
        this.returnFile = false;
      }

      if (this.field.config.size) {

      }
    }
  }

  public onFileChange($event: any): void {
    this.loading = true;

    const reader = new FileReader();
    const file: File = $event.target.files[0];
    const fileName = file.name.split('.').reverse()[1];
    this.field.config.value = file;

    this.size = file.size;

    if (!this.validFileType(file) || !this.validFileSize()) {
      this.loading = false;
    }

    if (file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.selectedFile = file;
      };
    } else {
      this.selectedFile = file;
    }

    this.fieldChanged.emit({file, model: this.field.config.model});

    if (this.returnFile) {
      this.formGroup.controls[this.field.config.model].patchValue(file);
      this.formGroup.controls[this.field.config.model].updateValueAndValidity();
      this.loading = false;
    } else {
      this.processFile(file);
    }
  }

  private processFile(file: any): void {
    const reader = new FileReader();
    const url = this.field.config.api.url;
    const method = this.field.config.api.method;
    const paramName = this.field.config.api.fileParamName;
    this.errorText = null;

    reader.addEventListener('load', () => {
      this.formsService.uploadFileServices(url, method, file, paramName)
        .subscribe(
          response => {
            this.loading = false;
            this.formGroup.controls[this.field.config.model].patchValue(response);
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
          }, error => {
            this.loading = false;
            console.error('Unable to upload the image. Error:', error);
            this.errorText = this.errorTranslates[this.formsService.getLang() || 'en'];
            this.formGroup.controls[this.field.config.model].patchValue('unableToUploadFile');
            this.formGroup.controls[this.field.config.model].updateValueAndValidity();
            this.formGroup.controls[this.field.config.model].setErrors({ unableToUploadFile: true });
          });
    });

    reader.readAsDataURL(file);
  }

  public returnFileSize(size: number): string {
    if (size < 1024) {
      return size + 'bytes';
    } else if (size >= 1024 && size < 1048576) {
      return (size / 1024).toFixed(1) + 'KB';
    } else if (size >= 1048576) {
      return (size / 1048576).toFixed(1) + 'MB';
    }
  }

  public validFileSize(): boolean {
    return this.field.config.size < this.size;
  }

  private validFileType(file: File): boolean {
    return this.field.config.accept.replace(/ /g, '').split(',').includes(`.${file.type.split('/')[1]}`);
  }

  public resetField() {
    this.selectedFile = null;
  }

}
