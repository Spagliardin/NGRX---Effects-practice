import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as action from '../actions';
import { UserService } from 'src/app/services/user.service';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.loadUser),
      switchMap(({ id }) =>
        this.userService.getUserById(id).pipe(
          map((user) => action.loadUserSuccess({ user })),
          catchError((err) => of(action.loadUserError({ payload: err })))
        )
      )
    )
  );
}
