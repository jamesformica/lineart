import { CHANGE_BG_COLOUR, CHANGE_DOT_COLOUR, CHANGE_LINE_COLOUR } from './actions';

export const initialState = {
  bgColour: '#000000',
  dotColour: '#ffffff',
  lineColour: '#ffffff'
}

export const colours = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BG_COLOUR:
      return { ...state, bgColour: action.colour };
    case CHANGE_DOT_COLOUR:
      return { ...state, dotColour: action.colour };
    case CHANGE_LINE_COLOUR:
      return { ...state, lineColour: action.colour };
    default:
      return state;
  }
}