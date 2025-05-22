import Select from 'react-select';
import type { ComponentProps } from 'react';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactComponentDirective } from './react-component.directive';

@Component({
  standalone: true,
  imports: [CommonModule, ReactComponentDirective],
  template: `
    <h1>reactComponent directive</h1>
    <button (click)="changeProps()">Change</button>
    <div [reactComponent]="Select" [props]="selectProps"></div>
  `,
})
export class TodosPageComponent {
  Select = Select;
  selectProps: ComponentProps<Select> = {
    onChange(v) {
      console.log(v);
    },
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
  };

  changeProps() {
    this.selectProps = {
      ...this.selectProps,
      options: [{ value: 'changed', label: 'Changed' }],
    };
  }
}
