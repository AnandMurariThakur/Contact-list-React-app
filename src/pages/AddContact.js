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

  //this method  will handle the update state
  const handleTextChange = (text, field) => {
    setStates((prev) => ({
      ...prev,
      [field]: text.target.value,
    }));
  };

  //this method will check the empty state and give notification else we set the tempArray as it as give in contact api response and then make api call to add the contact, once we get the success reponse we will add our new contact in global state for contact list
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
      return addToast("Please fill all the detail", {
        appearance: "error",
      });
    }
    setSavingForm(true);
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

    const response = await addContact(tempArray);
    if (response.success) {
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
    setStates({
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
  };

  //method to naviagte back to previous screen
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
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <input
          type="text"
          required
          value={states.name}
          onChange={(e) => handleTextChange(e, "name")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>User Name</div>
        <input
          type="text"
          required
          value={states.username}
          onChange={(e) => handleTextChange(e, "username")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <input
          type="text"
          required
          value={states.email}
          onChange={(e) => handleTextChange(e, "email")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Street</div>
        <input
          type="text"
          required
          value={states.street}
          onChange={(e) => handleTextChange(e, "street")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Suite</div>
        <input
          type="text"
          required
          value={states.suite}
          onChange={(e) => handleTextChange(e, "suite")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>City</div>
        <input
          type="text"
          required
          value={states.city}
          onChange={(e) => handleTextChange(e, "city")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Zipcode</div>
        <input
          type="text"
          required
          value={states.zipcode}
          onChange={(e) => handleTextChange(e, "zipcode")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Latititude</div>
        <input
          type="text"
          required
          value={states.lat}
          onChange={(e) => handleTextChange(e, "lat")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Longitude</div>
        <input
          type="text"
          required
          value={states.lng}
          onChange={(e) => handleTextChange(e, "lng")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Phone</div>
        <input
          type="text"
          required
          value={states.phone}
          onChange={(e) => handleTextChange(e, "phone")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Website</div>
        <input
          type="text"
          required
          value={states.website}
          onChange={(e) => handleTextChange(e, "website")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Company Name</div>
        <input
          type="text"
          required
          value={states.companyName}
          onChange={(e) => handleTextChange(e, "companyName")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Company Catch Phrase</div>
        <input
          type="text"
          required
          value={states.companyCatchPhrase}
          onChange={(e) => handleTextChange(e, "companyCatchPhrase")}
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Company Bs</div>
        <input
          type="text"
          required
          value={states.companyBs}
          onChange={(e) => handleTextChange(e, "companyBs")}
        />
      </div>
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
