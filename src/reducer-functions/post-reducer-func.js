const postReducer = (initialState, action) => {
  switch (action.type) {
    case "NEW_POST":
      const newObjArr = [...initialState, action.payload];
      return newObjArr;
  }
};

export default postReducer;
