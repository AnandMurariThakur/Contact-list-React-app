import { useState, useContext, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { ContactsContext } from "../providers";
import { getContactList } from "../api";

//using our context here
export const useContacts = () => {
  return useContext(ContactsContext);
};

//add all the logic for our provider here
export const useProviderContacts = () => {
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  //calling our initail api to fetch contact list here
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

  //updating our contact list by replacing the contact object at specific index in array
  const updateContact = (cont, id) => {
    const newContacts = contacts;
    newContacts[id - 1] = cont;
    setContacts(newContacts);
  };

  //adding the new contact object at end of our contact list array
  const addContact = (cont) => {
    const newContacts = contacts;
    newContacts.push(cont);
    setContacts(newContacts);
  };

  //deleting the contact from the list of specific index
  const deleteContact = (id) => {
    const newContacts = contacts;
    if (newContacts.length > 0) {
      newContacts.splice(id, 1);
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
