export const CHANGE_BG_COLOUR = 'CHANGE_BG_COLOUR';
export const CHANGE_DOT_COLOUR = 'CHANGE_DOT_COLOUR';
export const CHANGE_LINE_COLOUR = 'CHANGE_LINE_COLOUR';
export const OPEN_BG = 'OPEN_BG';
export const OPEN_DOT = 'OPEN_DOT';
export const OPEN_LINE = 'OPEN_LINE';
export const CLOSE_ALL = 'CLOSE_ALL';

export const changeBgColour = colour => ({
  type: CHANGE_BG_COLOUR,
  colour
});

export const changeDotColour = colour => ({
  type: CHANGE_DOT_COLOUR,
  colour
});

export const changeLineColour = colour => ({
  type: CHANGE_LINE_COLOUR,
  colour
});

export const openBg = { type: OPEN_BG };
export const openDot = { type: OPEN_DOT };
export const openLine = { type: OPEN_LINE };
export const closeAll = { type: CLOSE_ALL };
