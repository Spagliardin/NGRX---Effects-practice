import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { User } from 'src/app/model/user.model';

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
};

const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export const usersReducer = createReducer(
  initialState,
  on( actions.loadUsers, (state) => ({...state, loading: true })),
  on( actions.loadUsersSuccess, (state, { users }) => ({...state, loading: false, loaded: true, users: [ ...users ] })),
  on( actions.loadUsersError, (state, { payload }) => ({...state, loading: false, loaded: false, error: [ ...payload ] })),
);