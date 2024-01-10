const postReducer = (initialState, action) => {
  let newObjArr = [];
  switch (action.type) {
    case "NEW_POST":
      newObjArr = [...initialState, action.payload];
      return newObjArr;

    case "DELETE_POST":
      newObjArr = initialState.filter((post) => post.id !== action.payload.id);
      return newObjArr;

    case "INC_LIKE":
      newObjArr = [...initialState];

      const ind = newObjArr.findIndex((post) => post.id === action.payload.id);
      newObjArr[ind].reactions++;
      return newObjArr;
  }
};

export default postReducer;
