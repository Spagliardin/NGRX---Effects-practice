import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export const loadUser = createAction(
  '[User] loading User',
  props<{id: string}>()
);

export const loadUserSuccess = createAction(
  '[User] load users success',
  props<{user: User}>()
);

export const loadUserError = createAction(
  '[User] load users error',
  props<{payload: any}>()
);
