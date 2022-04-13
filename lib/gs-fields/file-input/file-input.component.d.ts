import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GsGenericFieldComponent } from '../_generic-field/_generic-field.component';
import { GFieldFile } from '../../gs-forms.widgets';
export declare class GsFileInputComponent extends GsGenericFieldComponent implements OnInit, OnChanges {
    field: GFieldFile;
    private fieldChanged;
    size: number;
    selectedFile: File;
    loading: boolean;
    private returnFile;
    private supportedFilesTranslates;
    private supportedSizeFilesTranslates;
    supportedFilesText: string;
    supportedSizeFilesText: string;
    private errorTranslates;
    errorText: string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onFileChange($event: any): void;
    private processFile;
    returnFileSize(size: number): string;
    validFileSize(): boolean;
    private validFileType;
    resetField(): void;
}
