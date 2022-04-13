import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
let ClickOutsideDirective = class ClickOutsideDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new EventEmitter();
    }
    onMouseEnter(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    }
};
ClickOutsideDirective.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Output('gsClickOutside')
], ClickOutsideDirective.prototype, "clickOutside", void 0);
tslib_1.__decorate([
    HostListener('document:click', ['$event.target'])
], ClickOutsideDirective.prototype, "onMouseEnter", null);
ClickOutsideDirective = tslib_1.__decorate([
    Directive({
        selector: '[gsClickOutside]'
    })
], ClickOutsideDirective);
export { ClickOutsideDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUsxRixJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUdoQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmhCLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFakMsQ0FBQztJQUcvQyxZQUFZLENBQUMsYUFBYTtRQUN4QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7Q0FDRixDQUFBOztZQVRpQyxVQUFVOztBQUZoQjtJQUF6QixNQUFNLENBQUMsZ0JBQWdCLENBQUM7MkRBQXNEO0FBSy9FO0lBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7eURBTWpEO0FBWFUscUJBQXFCO0lBSGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7S0FDN0IsQ0FBQztHQUNXLHFCQUFxQixDQVlqQztTQVpZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ3NDbGlja091dHNpZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBDbGlja091dHNpZGVEaXJlY3RpdmUge1xuICBAT3V0cHV0KCdnc0NsaWNrT3V0c2lkZScpIGNsaWNrT3V0c2lkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbk1vdXNlRW50ZXIodGFyZ2V0RWxlbWVudCkge1xuICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcbiAgICBpZiAoIWNsaWNrZWRJbnNpZGUpIHtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQobnVsbCk7XG4gICAgfVxuICB9XG59XG4iXX0=