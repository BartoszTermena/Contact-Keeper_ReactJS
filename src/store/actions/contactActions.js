export const createContact = contact => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("contacts")
      .add({
        ...contact,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_CONTACT", contact });
      })
      .catch(err => {
        dispatch({ type: "CREATE_CONTACT_ERROR", err });
      });
  };
};
