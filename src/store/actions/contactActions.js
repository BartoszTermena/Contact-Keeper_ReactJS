export const createContact = contact => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_CONTACT", contact });
  };
};
