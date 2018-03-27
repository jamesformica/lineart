export const CHANGE_BG_COLOUR = 'CHANGE_BG_COLOUR';
export const CHANGE_DOT_COLOUR = 'CHANGE_DOT_COLOUR';
export const CHANGE_LINE_COLOUR = 'CHANGE_LINE_COLOUR';

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
