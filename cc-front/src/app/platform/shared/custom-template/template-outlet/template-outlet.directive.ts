import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTemplateOutlet]',
  exportAs: 'appTemplateOutlet'
})
export class TemplateOutletDirective {
  private inputTemplate: TemplateRef<void> | null = null;
  // private inputViewRef: EmbeddedViewRef<void> | null = null;

  constructor(private viewContainer: ViewContainerRef) { }

  @Input()
  set appTemplateOutlet(value: TemplateRef<void>) {
    this.inputTemplate = value;
    this.updateView();
  }

  updateView(): void {
    // 清除
    if (this.viewContainer) {
      this.viewContainer.clear();
    }

    if (this.inputTemplate) {
      // this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate);
      this.viewContainer.createEmbeddedView(this.inputTemplate);
    }
  }

}
