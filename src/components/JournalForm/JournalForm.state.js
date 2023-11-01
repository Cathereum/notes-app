export const INITIAL_STATE = {
  values: {
    title: "",
    date: "",
    tag: "",
    text: "",
  },
  isFormReadyToSubmit: false,
};

export function formReducer(state, action) {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, values: { ...state.values, ...action.payload } };

    case "CLEAR":
      return {
        ...state,
        values: INITIAL_STATE.values,
        isFormReadyToSubmit: false,
      };

    case "SUBMIT": {
      const titleValidity = state.values.title?.trim().length;
      const dateValidity = state.values.date;
      const textValidity = state.values.text?.trim().length;
      return {
        ...state,
        isFormReadyToSubmit: titleValidity && dateValidity && textValidity,
      };
    }
  }
}
