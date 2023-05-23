import { useContacts } from "../hooks";
import { Loader, ContactList } from "../components";
import "../styles/home.css";

const Home = () => {
  const Contacts = useContacts();
  if (Contacts.loading) {
    return <Loader />;
  }

  return (
    <div className="home">
      <h2>Contact</h2>
      {Contacts.data.map((contact, index) => (
        <ContactList contact={contact} key={`post-${index}`} />
      ))}
      {Contacts.data.length === 0 ? (
        <div className="no-contact">No Contact </div>
      ) : null}
    </div>
  );
};
export default Home;
