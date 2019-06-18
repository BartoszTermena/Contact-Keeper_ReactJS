const initState = {
  contacts: [
    {
      id: "1",
      name: "Jeff Jackson",
      email: "jeff@gmail.com",
      phone: "+48 123-456-789",
      type: "professional"
    },
    {
      id: "2",
      name: "Eva Bing",
      email: "Eva@gmail.com",
      phone: "+48 123-456-789",
      type: "professional"
    },
    {
      id: "3",
      name: "John Jackson",
      email: "John@gmail.com",
      phone: "+48 123-451-789",
      type: "personal"
    }
  ]
};
const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      console.log(action.contact);
      return state;
    case "CREATE_CONTACT_ERROR":
      console.log(action.err);
      return state;
    case "DELETE_CONTACT":
      console.log(action.contactId);
      return state;
    case "DELETE_CONTACT_ERROR":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default contactReducer;
