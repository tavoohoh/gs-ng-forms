import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// https://github.com/changhuixu/ngx-digit-only/blob/master/projects/uiowa/digit-only/src/lib/digit-only.directive.ts
var DigitOnlyDirective = /** @class */ (function () {
    function DigitOnlyDirective(el) {
        this.el = el;
        this.decimalCounter = 0;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste'
        ];
        this.decimal = false;
        this.inputElement = el.nativeElement;
    }
    DigitOnlyDirective.prototype.onKeyDown = function (e) {
        if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) || // Allow: Cmd+X (Mac)
            (this.decimal && e.key === '.' && this.decimalCounter < 1) // Allow: only one decimal point
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if (e.key === ' ' || isNaN(Number(e.key))) {
            e.preventDefault();
        }
    };
    DigitOnlyDirective.prototype.onKeyUp = function (e) {
        if (!this.decimal) {
            return;
        }
        else {
            this.decimalCounter = this.el.nativeElement.value.split('.').length - 1;
        }
    };
    DigitOnlyDirective.prototype.onPaste = function (event) {
        var pastedInput = event.clipboardData.getData('text/plain');
        var pasted = false;
        if (!this.decimal) {
            pasted = document.execCommand('insertText', false, pastedInput.replace(/[^0-9]/g, ''));
        }
        else if (this.isValidDecimal(pastedInput)) {
            pasted = document.execCommand('insertText', false, pastedInput.replace(/[^0-9.]/g, ''));
        }
        if (pasted) {
            event.preventDefault();
        }
        else {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(pastedInput);
                document.execCommand('paste');
            }
        }
    };
    DigitOnlyDirective.prototype.onDrop = function (event) {
        var textData = event.dataTransfer.getData('text');
        this.inputElement.focus();
        var pasted = false;
        if (!this.decimal) {
            pasted = document.execCommand('insertText', false, textData.replace(/[^0-9]/g, ''));
        }
        else if (this.isValidDecimal(textData)) {
            pasted = document.execCommand('insertText', false, textData.replace(/[^0-9.]/g, ''));
        }
        if (pasted) {
            event.preventDefault();
        }
        else {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textData);
                document.execCommand('paste');
            }
        }
    };
    DigitOnlyDirective.prototype.isValidDecimal = function (str) {
        return str.split('.').length <= 2;
    };
    DigitOnlyDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], DigitOnlyDirective.prototype, "decimal", void 0);
    tslib_1.__decorate([
        HostListener('keydown', ['$event'])
    ], DigitOnlyDirective.prototype, "onKeyDown", null);
    tslib_1.__decorate([
        HostListener('keyup', ['$event'])
    ], DigitOnlyDirective.prototype, "onKeyUp", null);
    tslib_1.__decorate([
        HostListener('paste', ['$event'])
    ], DigitOnlyDirective.prototype, "onPaste", null);
    tslib_1.__decorate([
        HostListener('drop', ['$event'])
    ], DigitOnlyDirective.prototype, "onDrop", null);
    DigitOnlyDirective = tslib_1.__decorate([
        Directive({
            selector: '[gsDigitOnly]'
        })
    ], DigitOnlyDirective);
    return DigitOnlyDirective;
}());
export { DigitOnlyDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXQtb25seS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZGlyZWN0aXZlcy9kaWdpdC1vbmx5L2RpZ2l0LW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNFLHFIQUFxSDtBQUtySDtJQW1CRSw0QkFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFsQnpCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLG1CQUFjLEdBQUc7WUFDdkIsV0FBVztZQUNYLFFBQVE7WUFDUixLQUFLO1lBQ0wsUUFBUTtZQUNSLE9BQU87WUFDUCxNQUFNO1lBQ04sS0FBSztZQUNMLFdBQVc7WUFDWCxZQUFZO1lBQ1osT0FBTztZQUNQLE1BQU07WUFDTixPQUFPO1NBQ1IsQ0FBQztRQUNPLFlBQU8sR0FBSyxLQUFLLENBQUM7UUFJekIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFHRCxzQ0FBUyxHQUFULFVBQVUsQ0FBZ0I7UUFDeEIsSUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUkseURBQXlEO1lBQ3BHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxnQkFBZ0I7WUFDekQsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLGdCQUFnQjtZQUN6RCxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtB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QixDQWtIOUI7SUFBRCx5QkFBQztDQUFBLEFBbEhELElBa0hDO1NBbEhZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vY2hhbmdodWl4dS9uZ3gtZGlnaXQtb25seS9ibG9iL21hc3Rlci9wcm9qZWN0cy91aW93YS9kaWdpdC1vbmx5L3NyYy9saWIvZGlnaXQtb25seS5kaXJlY3RpdmUudHNcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dzRGlnaXRPbmx5XSdcbn0pXG5leHBvcnQgY2xhc3MgRGlnaXRPbmx5RGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBkZWNpbWFsQ291bnRlciA9IDA7XG4gIHByaXZhdGUgbmF2aWdhdGlvbktleXMgPSBbXG4gICAgJ0JhY2tzcGFjZScsXG4gICAgJ0RlbGV0ZScsXG4gICAgJ1RhYicsXG4gICAgJ0VzY2FwZScsXG4gICAgJ0VudGVyJyxcbiAgICAnSG9tZScsXG4gICAgJ0VuZCcsXG4gICAgJ0Fycm93TGVmdCcsXG4gICAgJ0Fycm93UmlnaHQnLFxuICAgICdDbGVhcicsXG4gICAgJ0NvcHknLFxuICAgICdQYXN0ZSdcbiAgXTtcbiAgQElucHV0KCkgZGVjaW1hbCA/ID0gZmFsc2U7XG4gIGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLm5hdmlnYXRpb25LZXlzLmluZGV4T2YoZS5rZXkpID4gLTEgfHwgLy8gQWxsb3c6IG5hdmlnYXRpb24ga2V5czogYmFja3NwYWNlLCBkZWxldGUsIGFycm93cyBldGMuXG4gICAgICAoZS5rZXkgPT09ICdhJyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK0FcbiAgICAgIChlLmtleSA9PT0gJ2MnICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrQ1xuICAgICAgKGUua2V5ID09PSAndicgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtWXG4gICAgICAoZS5rZXkgPT09ICd4JyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK1hcbiAgICAgIChlLmtleSA9PT0gJ2EnICYmIGUubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IENtZCtBIChNYWMpXG4gICAgICAoZS5rZXkgPT09ICdjJyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDbWQrQyAoTWFjKVxuICAgICAgKGUua2V5ID09PSAndicgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ21kK1YgKE1hYylcbiAgICAgIChlLmtleSA9PT0gJ3gnICYmIGUubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IENtZCtYIChNYWMpXG4gICAgICAodGhpcy5kZWNpbWFsICYmIGUua2V5ID09PSAnLicgJiYgdGhpcy5kZWNpbWFsQ291bnRlciA8IDEpIC8vIEFsbG93OiBvbmx5IG9uZSBkZWNpbWFsIHBvaW50XG4gICAgKSB7XG4gICAgICAvLyBsZXQgaXQgaGFwcGVuLCBkb24ndCBkbyBhbnl0aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBFbnN1cmUgdGhhdCBpdCBpcyBhIG51bWJlciBhbmQgc3RvcCB0aGUga2V5cHJlc3NcbiAgICBpZiAoZS5rZXkgPT09ICcgJyB8fCBpc05hTihOdW1iZXIoZS5rZXkpKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgb25LZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRlY2ltYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNpbWFsQ291bnRlciA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5zcGxpdCgnLicpLmxlbmd0aCAtIDE7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnLCBbJyRldmVudCddKVxuICBvblBhc3RlKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkge1xuICAgIGNvbnN0IHBhc3RlZElucHV0OiBzdHJpbmcgPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICBsZXQgcGFzdGVkID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmRlY2ltYWwpIHtcbiAgICAgIHBhc3RlZCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKFxuICAgICAgICAnaW5zZXJ0VGV4dCcsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBwYXN0ZWRJbnB1dC5yZXBsYWNlKC9bXjAtOV0vZywgJycpXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1ZhbGlkRGVjaW1hbChwYXN0ZWRJbnB1dCkpIHtcbiAgICAgIHBhc3RlZCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKFxuICAgICAgICAnaW5zZXJ0VGV4dCcsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBwYXN0ZWRJbnB1dC5yZXBsYWNlKC9bXjAtOS5dL2csICcnKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHBhc3RlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5hdmlnYXRvci5jbGlwYm9hcmQpIHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocGFzdGVkSW5wdXQpO1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgncGFzdGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgb25Ecm9wKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBjb25zdCB0ZXh0RGF0YSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcblxuICAgIGxldCBwYXN0ZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZGVjaW1hbCkge1xuICAgICAgcGFzdGVkID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXG4gICAgICAgICdpbnNlcnRUZXh0JyxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRleHREYXRhLnJlcGxhY2UoL1teMC05XS9nLCAnJylcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzVmFsaWREZWNpbWFsKHRleHREYXRhKSkge1xuICAgICAgcGFzdGVkID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXG4gICAgICAgICdpbnNlcnRUZXh0JyxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRleHREYXRhLnJlcGxhY2UoL1teMC05Ll0vZywgJycpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAocGFzdGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0RGF0YSk7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdwYXN0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWREZWNpbWFsKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnLicpLmxlbmd0aCA8PSAyO1xuICB9XG59XG4iXX0=