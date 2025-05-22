import { inject, Injectable, Injector } from '@angular/core';
import { ComponentProps, createElement, ElementType } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { NgContext } from './useInjector';

@Injectable({ providedIn: 'root' })
export class NgReact {
  injector = inject(Injector);

  createRoot(host: HTMLElement) {
    return createRoot(host);
  }

  render<Comp extends ElementType>(
    root: Root,
    Comp: Comp,
    compProps?: ComponentProps<Comp>
  ) {
    root.render(
      createElement(
        NgContext,
        {
          injector: this.injector,
        },
        createElement(Comp, compProps)
      )
    );
  }
}
