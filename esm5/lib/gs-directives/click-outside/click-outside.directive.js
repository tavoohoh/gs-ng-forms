import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new EventEmitter();
    }
    ClickOutsideDirective.prototype.onMouseEnter = function (targetElement) {
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return ClickOutsideDirective;
}());
export { ClickOutsideDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUsxRjtJQUdFLCtCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmhCLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFakMsQ0FBQztJQUcvQyw0Q0FBWSxHQUFaLFVBQWEsYUFBYTtRQUN4QixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7O2dCQVIrQixVQUFVOztJQUZoQjtRQUF6QixNQUFNLENBQUMsZ0JBQWdCLENBQUM7K0RBQXNEO0lBSy9FO1FBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7NkRBTWpEO0lBWFUscUJBQXFCO1FBSGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7U0FDN0IsQ0FBQztPQUNXLHFCQUFxQixDQVlqQztJQUFELDRCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnc0NsaWNrT3V0c2lkZV0nXG59KVxuZXhwb3J0IGNsYXNzIENsaWNrT3V0c2lkZURpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoJ2dzQ2xpY2tPdXRzaWRlJykgY2xpY2tPdXRzaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXG4gIG9uTW91c2VFbnRlcih0YXJnZXRFbGVtZW50KSB7XG4gICAgY29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xuICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xuICAgICAgdGhpcy5jbGlja091dHNpZGUuZW1pdChudWxsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==