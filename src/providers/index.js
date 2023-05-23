import { createContext } from "react";
import { useProviderContacts } from "../hooks";

//here we have configure our provider with initial state using createContext
const initialState = {
  contacts: [],
  loading: true,
  updateContact: () => {},
  addContact: () => {},
  deleteContact: () => {},
};

export const ContactsContext = createContext(initialState);

export const ContactsProvider = ({ children }) => {
  const auth = useProviderContacts();
  return (
    <ContactsContext.Provider value={auth}>{children}</ContactsContext.Provider>
  );
};
