import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { User } from 'src/app/model/user.model';

export interface UserState {
    id: string | null
    user: User | null,
    loaded: boolean,
    loading: boolean,
    error: any
};

const initialState: UserState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on( actions.loadUser, (state, { id }) => ({...state, loading: true, id })),
  on( actions.loadUserSuccess, (state, { user }) => ({...state, loading: false, loaded: true, user:  {...user}  })),
  on( actions.loadUserError, (state, { payload }) => ({...state, loading: false, loaded: false, error: [ ...payload ] })),
);