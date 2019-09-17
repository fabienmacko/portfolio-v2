/**
 * Initial State
 */
const initialState = {
  isMenuOpen: false,
  view: "Welcome",
};

/**
 * Types
 */
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const CHANGE_VIEW = 'CHANGE_VIEW';

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
    case CHANGE_VIEW:
      return {
        ...state,
        view: action.view,
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
export const changeView = (view) => ({
  type: CHANGE_VIEW,
  view
});




/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;