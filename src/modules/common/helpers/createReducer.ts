export interface actionProps {
  type: string;
  payload: any;
}

export const createReducer = (initialState: any, handler: any) => {
  return (state = initialState, action: actionProps) => {
    return handler?.hasOwnProperty(action.type)
      ? handler[action.type](state, action)
      : state;
  };
};
