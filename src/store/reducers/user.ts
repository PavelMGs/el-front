type Action = {
  type: string;
};

const userReducer = (action: Action, state = null) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
