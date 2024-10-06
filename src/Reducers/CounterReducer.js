const initialState = {
    count: 0,
  };
  
  export const CountReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          count: state.count + action.payload,
        };
      case "SUB":
        return {
          ...state,
          count: state.count - action.payload,
        };
      default:
        return state;
    }
  };
  