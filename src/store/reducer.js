/**
 * Initial State
 */
const initialState = {
  isMenuOpen: false,
  view: "Welcome",
  clickCounter: 0,
};

/**
 * Types
 */
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const INCREASE_CLICK_COUNTER = 'INCREASE_CLICK_COUNTER';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU:
      console.log("OpenMenu");
      
      return {
        ...state,
        isMenuOpen: true,
      };
    case CLOSE_MENU:
        console.log("CloseMenu");
      return {
        ...state,
        isMenuOpen: false,
      };
    case CHANGE_VIEW:
      return {
        ...state,
        view: action.view,
      };
    case INCREASE_CLICK_COUNTER:
      return {
        ...state,
        clickCounter: state.clickCounter + 1,
      };
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

export const increaseClickCounter = () => ({
  type: INCREASE_CLICK_COUNTER
})




/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;