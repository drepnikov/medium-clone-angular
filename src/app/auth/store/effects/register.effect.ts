import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/auth/store/actions/register.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((res) => {
            return registerSuccessAction({ currentUser: res });
          }),
          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
