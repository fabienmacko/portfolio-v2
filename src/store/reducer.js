/**
 * Initial State
 */
const initialState = {
  isMenuOpen: false,
  isTypedTextActive: false,
};

/**
 * Types
 */
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const ACTIVE_TYPED_TEXT = "ACTIVE_TYPED_TEXT";

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true,
      };
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: false,
      };
    case ACTIVE_TYPED_TEXT:
      return {
        ...state,
        isTypedTextActive: true,
      }
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const openMenu = () => ({
  type: OPEN_MENU,
});
export const closeMenu = () => ({
  type: CLOSE_MENU,
});
export const activeTypedText = () => ({
  type: ACTIVE_TYPED_TEXT,
});



/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;