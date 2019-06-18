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

export const deleteContact = contactId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("contacts")
      .doc(contactId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_CONTACT", contactId });
      })
      .catch(err => {
        dispatch({ type: "DELETE_CONTACT_ERROR", err });
      });
  };
};
