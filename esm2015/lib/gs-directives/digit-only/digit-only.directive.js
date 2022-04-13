import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// https://github.com/changhuixu/ngx-digit-only/blob/master/projects/uiowa/digit-only/src/lib/digit-only.directive.ts
let DigitOnlyDirective = class DigitOnlyDirective {
    constructor(el) {
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
    onKeyDown(e) {
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
    }
    onKeyUp(e) {
        if (!this.decimal) {
            return;
        }
        else {
            this.decimalCounter = this.el.nativeElement.value.split('.').length - 1;
        }
    }
    onPaste(event) {
        const pastedInput = event.clipboardData.getData('text/plain');
        let pasted = false;
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
    }
    onDrop(event) {
        const textData = event.dataTransfer.getData('text');
        this.inputElement.focus();
        let pasted = false;
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
    }
    isValidDecimal(str) {
        return str.split('.').length <= 2;
    }
};
DigitOnlyDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
export { DigitOnlyDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXQtb25seS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3MvbmctZm9ybXMvIiwic291cmNlcyI6WyJsaWIvZ3MtZGlyZWN0aXZlcy9kaWdpdC1vbmx5L2RpZ2l0LW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNFLHFIQUFxSDtBQUtySCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQW1CN0IsWUFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFsQnpCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLG1CQUFjLEdBQUc7WUFDdkIsV0FBVztZQUNYLFFBQVE7WUFDUixLQUFLO1lBQ0wsUUFBUTtZQUNSLE9BQU87WUFDUCxNQUFNO1lBQ04sS0FBSztZQUNMLFdBQVc7WUFDWCxZQUFZO1lBQ1osT0FBTztZQUNQLE1BQU07WUFDTixPQUFPO1NBQ1IsQ0FBQztRQUNPLFlBQU8sR0FBSyxLQUFLLENBQUM7UUFJekIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFHRCxTQUFTLENBQUMsQ0FBZ0I7UUFDeEIsSUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUkseURBQXlEO1lBQ3BHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxnQkFBZ0I7WUFDekQsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLGdCQUFnQjtZQUN6RCxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FB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QUNXLGtCQUFrQixDQWtIOUI7U0FsSFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFuZ2h1aXh1L25neC1kaWdpdC1vbmx5L2Jsb2IvbWFzdGVyL3Byb2plY3RzL3Vpb3dhL2RpZ2l0LW9ubHkvc3JjL2xpYi9kaWdpdC1vbmx5LmRpcmVjdGl2ZS50c1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ3NEaWdpdE9ubHldJ1xufSlcbmV4cG9ydCBjbGFzcyBEaWdpdE9ubHlEaXJlY3RpdmUge1xuICBwcml2YXRlIGRlY2ltYWxDb3VudGVyID0gMDtcbiAgcHJpdmF0ZSBuYXZpZ2F0aW9uS2V5cyA9IFtcbiAgICAnQmFja3NwYWNlJyxcbiAgICAnRGVsZXRlJyxcbiAgICAnVGFiJyxcbiAgICAnRXNjYXBlJyxcbiAgICAnRW50ZXInLFxuICAgICdIb21lJyxcbiAgICAnRW5kJyxcbiAgICAnQXJyb3dMZWZ0JyxcbiAgICAnQXJyb3dSaWdodCcsXG4gICAgJ0NsZWFyJyxcbiAgICAnQ29weScsXG4gICAgJ1Bhc3RlJ1xuICBdO1xuICBASW5wdXQoKSBkZWNpbWFsID8gPSBmYWxzZTtcbiAgaW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMubmF2aWdhdGlvbktleXMuaW5kZXhPZihlLmtleSkgPiAtMSB8fCAvLyBBbGxvdzogbmF2aWdhdGlvbiBrZXlzOiBiYWNrc3BhY2UsIGRlbGV0ZSwgYXJyb3dzIGV0Yy5cbiAgICAgIChlLmtleSA9PT0gJ2EnICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrQVxuICAgICAgKGUua2V5ID09PSAnYycgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtDXG4gICAgICAoZS5rZXkgPT09ICd2JyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK1ZcbiAgICAgIChlLmtleSA9PT0gJ3gnICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrWFxuICAgICAgKGUua2V5ID09PSAnYScgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ21kK0EgKE1hYylcbiAgICAgIChlLmtleSA9PT0gJ2MnICYmIGUubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IENtZCtDIChNYWMpXG4gICAgICAoZS5rZXkgPT09ICd2JyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDbWQrViAoTWFjKVxuICAgICAgKGUua2V5ID09PSAneCcgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ21kK1ggKE1hYylcbiAgICAgICh0aGlzLmRlY2ltYWwgJiYgZS5rZXkgPT09ICcuJyAmJiB0aGlzLmRlY2ltYWxDb3VudGVyIDwgMSkgLy8gQWxsb3c6IG9ubHkgb25lIGRlY2ltYWwgcG9pbnRcbiAgICApIHtcbiAgICAgIC8vIGxldCBpdCBoYXBwZW4sIGRvbid0IGRvIGFueXRoaW5nXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEVuc3VyZSB0aGF0IGl0IGlzIGEgbnVtYmVyIGFuZCBzdG9wIHRoZSBrZXlwcmVzc1xuICAgIGlmIChlLmtleSA9PT0gJyAnIHx8IGlzTmFOKE51bWJlcihlLmtleSkpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBvbktleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZGVjaW1hbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlY2ltYWxDb3VudGVyID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlLnNwbGl0KCcuJykubGVuZ3RoIC0gMTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXG4gIG9uUGFzdGUoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgcGFzdGVkSW5wdXQ6IHN0cmluZyA9IGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgIGxldCBwYXN0ZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZGVjaW1hbCkge1xuICAgICAgcGFzdGVkID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXG4gICAgICAgICdpbnNlcnRUZXh0JyxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHBhc3RlZElucHV0LnJlcGxhY2UoL1teMC05XS9nLCAnJylcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzVmFsaWREZWNpbWFsKHBhc3RlZElucHV0KSkge1xuICAgICAgcGFzdGVkID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXG4gICAgICAgICdpbnNlcnRUZXh0JyxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHBhc3RlZElucHV0LnJlcGxhY2UoL1teMC05Ll0vZywgJycpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAocGFzdGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwYXN0ZWRJbnB1dCk7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdwYXN0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBvbkRyb3AoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGNvbnN0IHRleHREYXRhID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpO1xuXG4gICAgbGV0IHBhc3RlZCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5kZWNpbWFsKSB7XG4gICAgICBwYXN0ZWQgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcbiAgICAgICAgJ2luc2VydFRleHQnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgdGV4dERhdGEucmVwbGFjZSgvW14wLTldL2csICcnKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNWYWxpZERlY2ltYWwodGV4dERhdGEpKSB7XG4gICAgICBwYXN0ZWQgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcbiAgICAgICAgJ2luc2VydFRleHQnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgdGV4dERhdGEucmVwbGFjZSgvW14wLTkuXS9nLCAnJylcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChwYXN0ZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHREYXRhKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3Bhc3RlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZERlY2ltYWwoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcuJykubGVuZ3RoIDw9IDI7XG4gIH1cbn1cbiJdfQ==