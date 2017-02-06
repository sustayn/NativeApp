import { a } from '../actions';

const init = {
  value: 0,
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case a.INCREMENT:
      return { ...state, value: state.value + 1 };
    case a.DECREMENT:
      return { ...state, value: state.value - 1000 };
    default:
      return state;
  }
};
