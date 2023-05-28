// Import the necessary dependencies and components
import { useContacts } from "../hooks";
import { Loader, ContactList } from "../components";
import "../styles/home.css";

// The Home component is responsible for displaying the list of contacts.
const Home = () => {
  const Contacts = useContacts();

  // If the contacts are still loading, display the Loader component
  if (Contacts.loading) {
    return <Loader />;
  }

  // Render the list of contacts using the ContactList component
  return (
    <div className="home">
      <h2>Contact</h2>
      {Contacts.data.map((contact, index) => (
        <ContactList contact={contact} key={`post-${index}`} index={index} />
      ))}

      {/* Display a message if there are no contacts */}
      {Contacts.data.length === 0 ? (
        <div className="no-contact">No Contact</div>
      ) : null}
    </div>
  );
};

export default Home;
