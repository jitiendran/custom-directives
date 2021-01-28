import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[IfDirective]'
})
export class IfDirectiveDirective {
  @Input() set IfDirective (condition:boolean){
    if(condition){
      this.viewcontainer.createEmbeddedView(this.templateRef)
    }
    else{
      this.viewcontainer.clear()
    }
  } 

  constructor(private templateRef:TemplateRef<any>, private viewcontainer:ViewContainerRef) { }

}
