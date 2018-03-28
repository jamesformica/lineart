export const CHANGE_BG_COLOUR = 'CHANGE_BG_COLOUR';
export const CHANGE_DOT_COLOUR = 'CHANGE_DOT_COLOUR';
export const CHANGE_LINE_COLOUR = 'CHANGE_LINE_COLOUR';
export const CHANGE_DOT_SIZE = 'CHANGE_DOT_SIZE';
export const OPEN_BG_COLOUR = 'OPEN_BG_COLOUR';
export const OPEN_DOT_COLOUR = 'OPEN_DOT_COLOUR';
export const OPEN_LINE_COLOUR = 'OPEN_LINE_COLOUR';
export const OPEN_DOT_SIZE = 'OPEN_DOT_SIZE';
export const CLOSE_ALL = 'CLOSE_ALL';

export const openBgColour = { type: OPEN_BG_COLOUR };
export const openDotColour = { type: OPEN_DOT_COLOUR };
export const openLineColour = { type: OPEN_LINE_COLOUR };
export const openDotSize = { type: OPEN_DOT_SIZE };
export const closeAll = { type: CLOSE_ALL };

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

export const changeDotSize = size => ({
  type: CHANGE_DOT_SIZE,
  size
});
