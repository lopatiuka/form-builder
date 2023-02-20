import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';


@Directive({
    selector: '[cdItemBorder]'
})
export class ItemBorderDirective implements AfterViewInit {
    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {

    }

    ngAfterViewInit(): void {
        this.renderer.setStyle(this.el.nativeElement, 'borderBottom', '1px solid gray');
        this.renderer.setStyle(this.el.nativeElement, 'marginBottom', '10px');
    }
}