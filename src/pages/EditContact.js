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

  const handleTextChange = (text, field) => {
    text.preventDefault();
    setStates((prev) => ({
      ...prev,
      [field]: text.target.value,
    }));
  };

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
    setSavingForm(false);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className={styles.settings}>
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
          {savingForm ? "Updating Contact..." : "Update Contact"}
        </button>
        <button className={`button ${styles.backBtn}`} onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default EditContact;
