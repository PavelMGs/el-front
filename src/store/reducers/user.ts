type Action = {
  type: string;
};

type State = null | string;

// eslint-disable-next-line default-param-last
const userReducer = (state: State = null, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
