import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  constructor(
    private actions$: Actions,
    // Add your services here
  ) {}

  // Define your effects here
}