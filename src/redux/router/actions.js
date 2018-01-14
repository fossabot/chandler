import * as types from './types';

export function navigate(routeName) {
  return {
    type: types.NAVIGATE,
    routeName: routeName,
  };
}

export function back() {
  return {
    type: types.BACK,
  };
}

export function setState(state) {
  return {
    type: types.SET_STATE,
    state,
  };
}

export function goToLaunchScreen() {
  return {
    type: types.GO_TO_LAUNCH_SCREEN,
  };
}
