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

    case "UPDATE_POST":
      newObjArr = [...initialState];

      newObjArr[action.payload.postInd].title = action.payload.title;
      newObjArr[action.payload.postInd].body = action.payload.body;
      newObjArr[action.payload.postInd].tags = action.payload.tags.split(",");

      return newObjArr;
  }
};

export default postReducer;
