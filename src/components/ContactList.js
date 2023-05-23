import { Link } from "react-router-dom";
import "../styles/home.css";
import { useContacts } from "../hooks";
const ContactList = ({ contact, index }) => {
  const Contacts = useContacts();

  const handleDelete = (id) => {
    Contacts.deleteContact(id);
  };

  return (
    <div className="movie-card">
      <div className="left">
        <div className="detail">
          <p>
            <strong>Name:</strong> {contact.name}
          </p>
          <p>
            <strong>Username:</strong> {contact.username}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Address:</strong>
          </p>
          <ul>
            <li>
              <strong>Street:</strong> {contact.address.street}
            </li>
            <li>
              <strong>Suite:</strong> {contact.address.suite}
            </li>
            <li>
              <strong>City:</strong> {contact.address.city}
            </li>
            <li>
              <strong>Zipcode:</strong> {contact.address.zipcode}
            </li>
            <li>
              <strong>Geo:</strong>
              <ul>
                <li>
                  <strong>Latitude:</strong> {contact.address.geo.lat}
                </li>
                <li>
                  <strong>Longitude:</strong> {contact.address.geo.lng}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p>
          <strong>Website:</strong> {contact.website}
        </p>
        <p>
          <strong>Company:</strong>
        </p>
        <ul>
          <li>
            <strong>Name:</strong> {contact.company.name}
          </li>
          <li>
            <strong>Catchphrase:</strong> {contact.company.catchPhrase}
          </li>
          <li>
            <strong>Business:</strong> {contact.company.bs}
          </li>
        </ul>
        <div className="footer">
          <button className="unfavourite-btn">
            <Link to={`/editContact/${contact.id}`}>Update</Link>
          </button>
          <button className="favourite-btn" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactList;
