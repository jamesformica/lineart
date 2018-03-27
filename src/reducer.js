import {
  CHANGE_BG_COLOUR, CHANGE_DOT_COLOUR, CHANGE_LINE_COLOUR,
  OPEN_BG, OPEN_DOT, OPEN_LINE, CLOSE_ALL
} from './actions';

const initialPopupState = {
  bgOpen: false,
  dotOpen: false,
  lineOpen: false
}

export const initialState = {
  bgColour: '#000000',
  dotColour: '#ffffff',
  lineColour: '#ffffff',
  ...initialPopupState
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BG_COLOUR:
      return { ...state, bgColour: action.colour };
    case CHANGE_DOT_COLOUR:
      return { ...state, dotColour: action.colour };
    case CHANGE_LINE_COLOUR:
      return { ...state, lineColour: action.colour };
    case OPEN_BG:
      return { ...state, ...initialPopupState, bgOpen: !state.bgOpen };
    case OPEN_DOT:
      return { ...state, ...initialPopupState, dotOpen: !state.dotOpen };
    case OPEN_LINE:
      return { ...state, ...initialPopupState, lineOpen: !state.lineOpen };
    case CLOSE_ALL:
      return { ...state, ...initialPopupState };
    default:
      return state;
  }
}