import { 
    Directive, 
    ElementRef, 
    HostBinding, 
    HostListener, 
    Input, 
    OnInit, 
    Renderer2 
} from "@angular/core";

@Directive({
    selector: '[even-directive]'
})
export class EvenDirective implements OnInit{
    @Input() defaultColor:string = '';
    @Input() highlightColor:string = '';
    @HostBinding('style.color') color:string = '';
    constructor(private even:ElementRef,private render:Renderer2){
    }
    ngOnInit(){
        this.color = this.defaultColor
        // this.render.setStyle(this.even.nativeElement,'color','aquamarine')
    }
    @HostListener('mouseenter') mouse(event:Event){
        this.color = this.highlightColor
        this.render.setStyle(this.even.nativeElement,'font-weight','500')
    } 
    @HostListener('mouseleave') mouse1(event:Event){
        this.color = this.defaultColor
        this.render.setStyle(this.even.nativeElement,'font-weight','normal')
    } 
}