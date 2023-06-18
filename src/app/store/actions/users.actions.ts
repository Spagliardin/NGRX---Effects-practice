import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export const loadUsers = createAction(
  '[Users] loading Users',
);

export const loadUsersSuccess = createAction(
  '[Users] load users success',
  props<{users: User[]}>()
);

export const loadUsersError = createAction(
  '[Users] load users error',
  props<{payload: any}>()
);
