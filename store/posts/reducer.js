import { actions } from "./action";

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_DATA:
      return {
        ...state,
        data: [...state.data, ...action.data],
      };
    default:
      return state;
  }
}
