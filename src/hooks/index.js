import { useState, useContext, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { ContactsContext } from "../providers";
import { getContactList } from "../api";

// Custom hook to access the contacts context
export const useContacts = () => {
  return useContext(ContactsContext);
};

// Custom hook for the contacts provider logic
export const useProviderContacts = () => {
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  // Fetch the contact list from the API on component mount
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await getContactList();

      if (response.success) {
        setContacts(response.data);
      } else {
        addToast(response.message, {
          appearance: "error",
        });
      }
      setLoading(false);
    };
    fetchContacts();
  }, [addToast]);

  // Update a contact in the contact list by replacing the contact object at the specified index in the array
  const updateContact = (cont, id) => {
    const newContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return cont;
      }
      return contact;
    });
    setContacts(newContacts);
  };

  // Add a new contact to the end of the contact list array
  const addContact = (cont) => {
    const newContacts = [...contacts, cont];
    setContacts(newContacts);
  };

  // Delete a contact from the contact list at the specified index
  const deleteContact = (id) => {
    const newContacts = [...contacts];
    if (newContacts.length > 0) {
      newContacts.splice(id, 1);
    }
    setContacts(newContacts);
    addToast("Contact deleted successfully", {
      appearance: "success",
    });
  };

  // Return the contacts data, loading state, and the functions to update, add, and delete contacts
  return {
    data: contacts,
    loading,
    updateContact,
    addContact,
    deleteContact,
  };
};
