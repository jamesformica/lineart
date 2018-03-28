import {
  CHANGE_BG_COLOUR, CHANGE_DOT_COLOUR, CHANGE_LINE_COLOUR, CHANGE_DOT_SIZE,
  OPEN_BG_COLOUR, OPEN_DOT_COLOUR, OPEN_LINE_COLOUR, OPEN_DOT_SIZE, CLOSE_ALL
} from './actions';

const initialPopupState = {
  bgColourOpen: false,
  dotColourOpen: false,
  lineColourOpen: false,
  dotSizeOpen: false,
}

export const initialState = {
  bgColour: '#000000',
  dotColour: '#ffffff',
  lineColour: '#ffffff',
  dotSize: 1.5,
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
    case CHANGE_DOT_SIZE:
      return { ...state, dotSize: action.size };
    case OPEN_BG_COLOUR:
      return { ...state, ...initialPopupState, bgColourOpen: !state.bgOpen };
    case OPEN_DOT_COLOUR:
      return { ...state, ...initialPopupState, dotColourOpen: !state.dotOpen };
    case OPEN_LINE_COLOUR:
      return { ...state, ...initialPopupState, lineColourOpen: !state.lineOpen };
    case OPEN_DOT_SIZE:
      return { ...state, ...initialPopupState, dotSizeOpen: !state.dotSizeOpen };
    case CLOSE_ALL:
      return { ...state, ...initialPopupState };
    default:
      return state;
  }
}