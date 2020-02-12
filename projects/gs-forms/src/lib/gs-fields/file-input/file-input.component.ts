import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup } from '@angular/forms';

import { GFieldFile } from './../../gs-forms.widgets';
import { GsFormsService } from '../../gs-forms.service';

@Component({
  selector: 'gs-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.sass']
})
export class GsFileInputComponent {
  @Input() public field: GFieldFile;
  @Input() public formGroup: FormGroup;

  public name: string;
  public size: string;
  public img: any = '';

  public loading = false;

  constructor(
    private sanitizer: DomSanitizer,
    private formsServices: GsFormsService
  ) { }

  public onFileChange($event: any): void {

    this.loading = true;

    const file: any = $event.target.files;
    this.name = file[0].name;
    this.size = this.returnFileSize(file[0].size);

    if (this.validFileType(file[0])) {
      const image = URL.createObjectURL(file[0]);
      this.img = this.sanitizer.bypassSecurityTrustUrl(image);
    }

    this.onUploadFile(this.field.config.urlService, this.field.config.method, file);

  }

  public onUploadFile(url, method, file): void {
    this.formsServices.uploadFileServices(url, method, file).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  private returnFileSize(size: number): any {
    if (size < 1024) {
      return size + 'bytes';
    } else if (size >= 1024 && size < 1048576) {
      return (size / 1024).toFixed(1) + 'KB';
    } else if (size >= 1048576) {
      return (size / 1048576).toFixed(1) + 'MB';
    }
  }

  private validFileType(file) {
    return this.field.config.fileType.replace(/ /g, '').split(',').includes(`.${file.type.split('/')[1]}`);
  }

}
