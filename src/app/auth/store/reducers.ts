import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/auth/store/actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoggedIn: null,
  validationErrors: null,
  currentUser: null,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state) => {
    return { ...state, validationErrors: null, isSubmitting: true };
  }),
  on(registerSuccessAction, (state, action) => {
    return {
      ...state,
      isLoggedIn: true,
      isSubmitting: false,
      currentUser: action.currentUser,
    };
  }),
  on(registerFailureAction, (state, action) => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    };
  })
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
