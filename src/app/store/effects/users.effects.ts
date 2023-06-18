import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UsersEffect {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(() =>
        this.userService
          .getUsers()
          .pipe(
            map((users) => usersActions.loadUsersSuccess({ users })),
            catchError( err => of(usersActions.loadUsersError({ payload: err.message })))
          )
      )
    )
  );
}