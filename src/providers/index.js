import { createContext } from "react";
import { useProviderContacts } from "../hooks";

// Define the initial state for the contacts context
const initialState = {
  contacts: [],
  loading: true,
  updateContact: () => {},
  addContact: () => {},
  deleteContact: () => {},
};

// Create the contacts context using createContext and provide the initial state
export const ContactsContext = createContext(initialState);

// Create the ContactsProvider component which wraps the application with the contacts context
export const ContactsProvider = ({ children }) => {
  const contacts = useProviderContacts();
  return (
    <ContactsContext.Provider value={contacts}>
      {children}
    </ContactsContext.Provider>
  );
};
