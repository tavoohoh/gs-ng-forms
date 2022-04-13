import { ElementRef } from '@angular/core';
export declare class DigitOnlyDirective {
    el: ElementRef;
    private decimalCounter;
    private navigationKeys;
    decimal?: boolean;
    inputElement: HTMLInputElement;
    constructor(el: ElementRef);
    onKeyDown(e: KeyboardEvent): void;
    onKeyUp(e: KeyboardEvent): void;
    onPaste(event: ClipboardEvent): void;
    onDrop(event: DragEvent): void;
    isValidDecimal(str: string): boolean;
}
