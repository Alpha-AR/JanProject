export const initialState = {
   userName: null,
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_USERNAME":
         return {
            ...state,
            userName: action.payload,
         };
      default:
         return state;
   }
};
