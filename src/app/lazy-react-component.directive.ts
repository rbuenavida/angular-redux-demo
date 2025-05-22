import { Directive, ElementRef, Input } from '@angular/core';
import type { ComponentProps, ElementType } from 'react';
import type { Root } from 'react-dom/client';

@Directive({
  selector: '[lazyReactComponent]',
  standalone: true,
})
export class LazyReactComponentDirective<Comp extends ElementType> {
  @Input() lazyReactComponent: () => Promise<Comp>;
  @Input() props: ComponentProps<Comp>;

  private root: Root | null = null;

  constructor(private host: ElementRef) {}

  async ngOnChanges() {
    const [{ createElement }, { createRoot }, Comp] = await Promise.all([
      import('react'),
      import('react-dom/client'),
      this.lazyReactComponent(),
    ]);

    if (!this.root) {
      this.root = createRoot(this.host.nativeElement);
    }

    this.root.render(createElement(Comp, this.props));
  }

  ngOnDestroy() {
    this.root?.unmount();
  }
}
