import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStringTemplateOutlet]',
  exportAs: 'appStringTemplateOutlet'
})
export class StringTemplateOutletDirective {
  private isTemplate: boolean;
  private inputTemplate: TemplateRef<void> | null = null;
  private inputViewRef: EmbeddedViewRef<void> | null = null;
  private defaultViewRef: EmbeddedViewRef<void> | null = null;

  constructor(private viewContainer: ViewContainerRef, private defaultTemplate: TemplateRef<void>) { }

  @Input()
  set appStringTemplateOutlet(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this.isTemplate = true;
      this.inputTemplate = value;
    } else {
      this.isTemplate = false;
    }
    this.updateView();
  }

  updateView(): void {
    // 清除
    if (this.viewContainer) {
      this.viewContainer.clear();
    }

    if (!this.isTemplate) {
      if (!this.defaultViewRef) {
        this.inputViewRef = null;
      }
      if (this.defaultTemplate) {
        this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate);
      }
    } else {
      if (!this.inputViewRef) {
        this.defaultViewRef = null;
      }

      if (this.inputTemplate) {
        this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate);
      }
    }
  }
}
