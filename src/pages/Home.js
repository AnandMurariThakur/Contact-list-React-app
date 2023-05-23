import { useContacts } from "../hooks";
import { Loader, ContactList } from "../components";
import "../styles/home.css";

//it contain the contact list component which will display all the contact and we added the style in home.css also we have used the global state to render contact list

const Home = () => {
  const Contacts = useContacts();
  if (Contacts.loading) {
    return <Loader />;
  }

  return (
    <div className="home">
      <h2>Contact</h2>
      {Contacts.data.map((contact, index) => (
        <ContactList contact={contact} key={`post-${index}`} index={index} />
      ))}
      {Contacts.data.length === 0 ? (
        <div className="no-contact">No Contact </div>
      ) : null}
    </div>
  );
};
export default Home;
