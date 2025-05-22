import App from './App';
import { Component, ElementRef, inject } from '@angular/core';
import { NgReact } from './ng-react.service';

@Component({
  standalone: true,
  template: ``,
})
export class HelloComponent {
  private ngReact = inject(NgReact);
  private root = this.ngReact.createRoot(inject(ElementRef).nativeElement);

  ngOnInit() {
    this.ngReact.render(this.root, App);
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}
