import { Routes } from '@angular/router';

export const routes: Routes= [
    {
      path: 'react-component',
      loadComponent: () =>
        import('./todos-page.component').then((m) => m.TodosPageComponent),
    },
    {
      path: 'react-component-lazy',
      loadComponent: () =>
        import('./todos-page-lazy.component').then(
          (m) => m.TodosPageLazyComponent
        ),
    },
    {
      path: '',
      redirectTo: '/react-component',
      pathMatch: 'full',
    },
  ];
