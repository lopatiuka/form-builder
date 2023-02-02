import {
    ChangeDetectorRef,
    Directive,
    EventEmitter,
    ElementRef,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    Optional,
    Output,
    SkipSelf,
    ViewContainerRef,
    ComponentFactoryResolver,
    Component,
    ComponentRef
} from '@angular/core';

class Point {
    constructor(public x: number, public y: number) {};
}

@Directive({
    selector: '[appCallout]',
    host: {
        '(mouseenter)': 'showCallout()',
        '(mouseleave)': 'hideCallout()'
    }
})
export class CalloutDirective implements OnDestroy {
    @Input() appCallout: String = '';
    
    private element!: HTMLElement;
    private calloutRef?: ComponentRef<CalloutComponent> | null;

    constructor(
        private elementRef: ElementRef,
        private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        @Optional() private changeDetector: ChangeDetectorRef,
        @Optional() private zone: NgZone,
    ) {

    }
    
    ngOnInit() {
        this.element = this.elementRef.nativeElement;
    }

    ngOnDestroy() {
        this.hideCallout();
    }

    showCallout() {
        this.calloutRef = this.createCallout(this.appCallout);
        let calloutEl = this.calloutRef.location.nativeElement;
        let targetPos = this.getTargetCalloutLocation();
        calloutEl.style.left = targetPos.x + 'px';
        calloutEl.style.top = targetPos.y + 'px';
    }
    
    hideCallout() {
        if (this.calloutRef) {
            this.calloutRef.destroy();
            this.calloutRef = null;    
        }
    }
    
    private createCallout(content: String): ComponentRef<CalloutComponent> {
        this.viewContainer.clear();

        let calloutComponentFactory = 
          this.componentFactoryResolver.resolveComponentFactory(CalloutComponent);
        let calloutComponentRef = this.viewContainer.createComponent(calloutComponentFactory);

        calloutComponentRef.instance.content = content;

        return calloutComponentRef;
    }
    
    private getTargetCalloutLocation(): Point {
        let box = this.element.getBoundingClientRect();
        return new Point(box.left + box.width / 2, box.top - 10);
    }
}

@Component({
    selector: 'app-callout',
    template: `
          {{content}}
    `,
    styles: [`
      :host {
          background: white;
          padding: 0.2em;
          border: solid 1px #444;
          position: absolute;
          font-size: 14px;
      }
    `]
  })
class CalloutComponent {
    public content: String = '';
}