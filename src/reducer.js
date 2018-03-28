import actions from './actions';

const initialPopupState = {
  bgColourOpen: false,
  dotColourOpen: false,
  lineColourOpen: false,
  dotSizeOpen: false,
  gravityOpen: false,
}

export const initialState = {
  bgColour: '#000000',
  dotColour: '#e91e63',
  lineColour: '#2196f3',
  dotSize: 1.5,
  gravity: 0.008,
  ...initialPopupState
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_BG_COLOUR:
      return { ...state, bgColour: action.colour };
    case actions.CHANGE_DOT_COLOUR:
      return { ...state, dotColour: action.colour };
    case actions.CHANGE_LINE_COLOUR:
      return { ...state, lineColour: action.colour };
    case actions.CHANGE_DOT_SIZE:
      return { ...state, dotSize: action.size };
    case actions.CHANGE_GRAVITY:
      return { ...state, gravity: Number(action.gravity) };
    case actions.OPEN_BG_COLOUR:
      return { ...state, ...initialPopupState, bgColourOpen: !state.bgColourOpen };
    case actions.OPEN_DOT_COLOUR:
      return { ...state, ...initialPopupState, dotColourOpen: !state.dotColourOpen };
    case actions.OPEN_LINE_COLOUR:
      return { ...state, ...initialPopupState, lineColourOpen: !state.lineColourOpen };
    case actions.OPEN_DOT_SIZE:
      return { ...state, ...initialPopupState, dotSizeOpen: !state.dotSizeOpen };
    case actions.OPEN_GRAVITY:
      return { ...state, ...initialPopupState, gravityOpen: !state.gravityOpen };
    case actions.CLOSE_ALL:
      return { ...state, ...initialPopupState };
    default:
      return state;
  }
}