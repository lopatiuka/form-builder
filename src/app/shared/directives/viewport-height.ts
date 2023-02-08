import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';


@Directive({
    selector: '[cdViewportHeight]'
})
export class ViewportHeightDirective implements OnInit {

    screenWidth!: number;
    screenHeight!: number;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {

    }

    ngOnInit(): void {
        this.onWindowResize();
        this.renderer.setStyle(this.el.nativeElement, 'overflow-y', 'auto');
    }
    
    @HostListener('window:resize', ['$event'])
    onWindowResize(): void {
        this.renderer.setStyle(this.el.nativeElement, 'height', `${window.innerHeight}px`);
    }
}