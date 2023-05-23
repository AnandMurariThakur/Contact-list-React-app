import { useState, useContext, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { ContactsContext } from "../providers";
import { getContactList } from "../api";

export const useContacts = () => {
  return useContext(ContactsContext);
};

export const useProviderContacts = () => {
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  useEffect(() => {
    const fetchPosts = async () => {
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

    fetchPosts();
  }, [addToast]);

  const updateContact = (cont, id) => {
    const newContacts = contacts;
    newContacts[id - 1] = cont;
    setContacts(newContacts);
  };

  const addContact = (cont) => {
    const newContacts = contacts;
    newContacts.push(cont);
    setContacts(newContacts);
  };

  const deleteContact = (id) => {
    const newContacts = contacts;
    if (newContacts.length > 0) {
      contacts.splice(id, 1);
    }
    setContacts(newContacts);
    addToast("Contact deleted successfully", {
      appearance: "success",
    });
  };
  return {
    data: contacts,
    loading,
    updateContact,
    addContact,
    deleteContact,
  };
};
