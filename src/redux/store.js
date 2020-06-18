import { createStore } from 'redux';

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  routes: [
    { name: 'Dashboard', href: 'dashboard' },
    { name: 'Register', href: 'register', guest: true },
    {
      name: 'Login',
      href: 'login',
      guest: true,
      mobileClassList:
        'my-8 w-full text-center font-semibold cta inline-block bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white font-normal',
      desktopClassList:
        'cta bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white font-normal',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      };
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'RESET':
      return {
        ...state,
        count: initialState.count,
      };
    default:
      return state;
  }
};

export const initializeStore = (preloadedState = initialState) => createStore(reducer, preloadedState);
