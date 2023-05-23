import { createContext } from "react";
import { useProviderContacts } from "../hooks";

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
