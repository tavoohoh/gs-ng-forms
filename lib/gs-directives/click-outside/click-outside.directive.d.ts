import { ElementRef, EventEmitter } from '@angular/core';
export declare class ClickOutsideDirective {
    private elementRef;
    clickOutside: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    onMouseEnter(targetElement: any): void;
}
