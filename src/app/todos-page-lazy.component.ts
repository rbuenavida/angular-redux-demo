import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import type { ComponentProps } from 'react';
import { LazyReactComponentDirective } from './lazy-react-component.directive';

@Component({
  standalone: true,
  imports: [CommonModule, LazyReactComponentDirective],
  template: `
    <h1>lazyReactComponent directive</h1>
    <button (click)="showSelect = true">Show React Component</button>
    <ng-container *ngIf="showSelect">
      <button (click)="changeProps()">Change</button>
      <div [lazyReactComponent]="Select" [props]="selectProps"></div>
    </ng-container>
  `,
})
export class TodosPageLazyComponent {
  showSelect = false;
  selectProps: ComponentProps<typeof import('react-select').default> = {
    onChange(v) {
      console.log(v);
    },
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
  };

  Select = () => import('react-select').then((m) => m.default);

  changeProps() {
    this.selectProps = {
      ...this.selectProps,
      options: [{ value: 'change', label: 'Change' }],
    };
  }
}
