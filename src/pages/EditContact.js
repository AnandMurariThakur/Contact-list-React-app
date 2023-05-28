// Import the necessary dependencies and styles
import { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../styles/editContact.module.css";
import { useContacts } from "../hooks";
import { updateContact } from "../api";

const EditContact = () => {
  const Contacts = useContacts();
  const { Id } = useParams();
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const [savingForm, setSavingForm] = useState(false);
  const [states, setStates] = useState({
    // Initial state for storing contact information
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

  // Use useEffect to set the initial state based on the selected contact ID
  useEffect(() => {
    const user =
      Contacts.data &&
      Contacts.data.filter((contact) => contact.id === parseInt(Id));
    if (user && user.length > 0) {
      const {
        id,
        name,
        username,
        email,
        address: { street, suite, city, zipcode, geo },
        phone,
        website,
        company: {
          name: companyName,
          catchPhrase: companyCatchPhrase,
          bs: companyBs,
        },
      } = user[0];

      setStates({
        id,
        name,
        username,
        email,
        street,
        suite,
        city,
        zipcode,
        lat: geo.lat,
        lng: geo.lng,
        phone,
        website,
        companyName,
        companyCatchPhrase,
        companyBs,
      });
    }
  }, [Contacts, Id]);

  // Handle text input changes and update the corresponding state
  const handleTextChange = (event, field) => {
    event.preventDefault();
    setStates((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  // Update the contact by making an API call and updating the global state if successful
  const handleUpdateContact = async () => {
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
      return addToast("Please fill in all the details", {
        appearance: "error",
      });
    }
    setSavingForm(true);
    let tempArray = [];
    const tempObj = {
      id: states.id,
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

    const response = await updateContact(tempArray, tempArray[0].id);

    if (response.success) {
      Contacts.updateContact(tempObj, tempObj.id);
      addToast("Contact updated successfully!", {
        appearance: "success",
      });
    } else {
      addToast(response.message, {
        appearance: "error",
      });
    }
    navigate("/");
    setSavingForm(false);
  };

  // Navigate back to the previous screen
  const handleBack = () => {
    navigate("/");
  };

  // Render the form for editing the contact
  return (
    <div className={styles.addContact}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/256/8014/8014428.png"
          alt=""
        />
      </div>
      {/* Form fields for editing contact information */}
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <input
          type="text"
          required
          value={states.name}
          onChange={(e) => handleTextChange(e, "name")}
        />
      </div>
      {/* Repeat the above pattern for other fields */}
      {/* ... */}
      <div className={styles.btnGrp}>
        {/* Button to update the contact */}
        <button
          className={`button ${styles.saveBtn}`}
          onClick={handleUpdateContact}
          disabled={savingForm}
        >
          {savingForm ? "Updating Contact..." : "Update Contact"}
        </button>
        {/* Button to navigate back */}
        <button className={`button ${styles.backBtn}`} onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default EditContact;
