// PROJECT IMPORTS
import { LOGIN, LOGOUT } from './actions';
import { InitialLoginContextProps } from 'types/auth';

interface AccountReducerActionProps {
  type: string;
  payload?: InitialLoginContextProps;
}

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const accountReducer = (state = initialState, action: AccountReducerActionProps) => {
  switch (action.type) {
    case LOGIN: {
      const { user } = action.payload!;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default accountReducer;