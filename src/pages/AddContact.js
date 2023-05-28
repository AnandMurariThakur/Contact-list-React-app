import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import styles from "../styles/editContact.module.css";
import { addContact } from "../api";
import { useContacts } from "../hooks";

const AddContact = () => {
  const { addToast } = useToasts();
  const Contacts = useContacts();
  const navigate = useNavigate();
  const [savingForm, setSavingForm] = useState(false);
  const [states, setStates] = useState({
    // Initial state values
    id: "",
    name: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
    phone: "",
    website: "",
    companyName: "",
    companyCatchPhrase: "",
    companyBs: "",
  });

  // Handle input field changes
  const handleTextChange = (text, field) => {
    setStates((prev) => ({
      ...prev,
      [field]: text.target.value,
    }));
  };

  // Add a new contact
  const handleUpdateContact = async () => {
    // Check if any field is empty
    if (
      !states.name ||
      !states.username ||
      !states.email ||
      !states.street ||
      !states.suite ||
      !states.city ||
      !states.zipcode ||
      !states.lat ||
      !states.lng ||
      !states.phone ||
      !states.website ||
      !states.companyName ||
      !states.companyCatchPhrase ||
      !states.companyBs
    ) {
      return addToast("Please fill all the details", {
        appearance: "error",
      });
    }

    setSavingForm(true);

    // Create a new contact object
    let tempArray = [];
    const tempObj = {
      id: Contacts.data[Contacts.data.length - 1].id + 1,
      name: states.name,
      username: states.username,
      email: states.email,
      address: {
        street: states.street,
        suite: states.suite,
        city: states.city,
        zipcode: states.zipcode,
        geo: {
          lat: states.lat,
          lng: states.lng,
        },
      },
      phone: states.phone,
      website: states.website,
      company: {
        name: states.companyName,
        catchPhrase: states.companyCatchPhrase,
        bs: states.companyBs,
      },
    };

    tempArray.push(tempObj);

    // Make API call to add the contact
    const response = await addContact(tempArray);

    if (response.success) {
      // Add the new contact to the global state
      Contacts.addContact(tempObj);
      addToast("Contact added successfully!", {
        appearance: "success",
      });
    } else {
      addToast(response.message, {
        appearance: "error",
      });
    }

    setSavingForm(false);
    navigate("/");
  };

  // Navigate back to the previous screen
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className={styles.addContact}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/256/8014/8014428.png"
          alt=""
        />
      </div>
      {/* Input fields */}
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <input
          type="text"
          required
          value={states.name}
          onChange={(e) => handleTextChange(e, "name")}
        />
      </div>
      {/* ... other input fields */}
      {/* Save and Back buttons */}
      <div className={styles.btnGrp}>
        <button
          className={`button ${styles.saveBtn}`}
          onClick={handleUpdateContact}
          disabled={savingForm}
        >
          {savingForm ? "Adding Contact..." : "Add Contact"}
        </button>
        <button className={`button ${styles.backBtn}`} onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default AddContact;
