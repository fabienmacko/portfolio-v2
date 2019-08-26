import axios from 'axios';

import {} from './reducer';

const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    case "ACTION":
      next(action);
      axios.get('https://api.github.com/user')
        .then((response) => {

        })
        .catch(() => {

        });
      break;
    default:
      return next(action);
  }
};
export default ajaxMiddleware;