import React from 'react';
import { Router } from '@angular/router';
import { useInjector } from './useInjector';

export default function NxWelcome({ title }) {
  const injector = useInjector();

  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => injector.get(Router).navigateByUrl('/')}>
        Home
      </button>
    </>
  );
}
