const CHANGE_BG_COLOUR = 'CHANGE_BG_COLOUR';
const CHANGE_DOT_COLOUR = 'CHANGE_DOT_COLOUR';
const CHANGE_LINE_COLOUR = 'CHANGE_LINE_COLOUR';
const CHANGE_DOT_SIZE = 'CHANGE_DOT_SIZE';
const CHANGE_GRAVITY = 'CHANGE_GRAVITY';
const OPEN_BG_COLOUR = 'OPEN_BG_COLOUR';
const OPEN_DOT_COLOUR = 'OPEN_DOT_COLOUR';
const OPEN_LINE_COLOUR = 'OPEN_LINE_COLOUR';
const OPEN_DOT_SIZE = 'OPEN_DOT_SIZE';
const OPEN_GRAVITY = 'OPEN_GRAVITY';
const CLOSE_ALL = 'CLOSE_ALL';

const openBgColour = { type: OPEN_BG_COLOUR };
const openDotColour = { type: OPEN_DOT_COLOUR };
const openLineColour = { type: OPEN_LINE_COLOUR };
const openDotSize = { type: OPEN_DOT_SIZE };
const openGravity = { type: OPEN_GRAVITY };
const closeAll = { type: CLOSE_ALL };

const changeBgColour = colour => ({
  type: CHANGE_BG_COLOUR,
  colour
});

const changeDotColour = colour => ({
  type: CHANGE_DOT_COLOUR,
  colour
});

const changeLineColour = colour => ({
  type: CHANGE_LINE_COLOUR,
  colour
});

const changeDotSize = size => ({
  type: CHANGE_DOT_SIZE,
  size
});

const changeGravity = gravity => ({
  type: CHANGE_GRAVITY,
  gravity
})

export default {
  CHANGE_BG_COLOUR,
  CHANGE_DOT_COLOUR,
  CHANGE_LINE_COLOUR,
  CHANGE_DOT_SIZE,
  CHANGE_GRAVITY,
  OPEN_BG_COLOUR,
  OPEN_DOT_COLOUR,
  OPEN_LINE_COLOUR,
  OPEN_DOT_SIZE,
  OPEN_GRAVITY,
  CLOSE_ALL,
  openBgColour,
  openDotColour,
  openLineColour,
  openDotSize,
  openGravity,
  closeAll,
  changeBgColour,
  changeDotColour,
  changeLineColour,
  changeDotSize,
  changeGravity
}
