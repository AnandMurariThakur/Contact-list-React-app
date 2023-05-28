import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./";
import { Home, EditContact, AddContact } from "../pages";

// Component to display a 404 Page Not Found error message
const NotFound = () => {
  return <h1>404 Page Not Found</h1>;
};

// The main App component
function App() {
  return (
    <div className="App">
      {/* Set up the router */}
      <Router>
        {/* Display the navbar */}
        <Navbar />

        {/* Define the routes */}
        <Routes>
          {/* Route for the home page displaying all the contacts */}
          <Route path="/" element={<Home />} />

          {/* Route for editing a contact, with an ID parameter */}
          <Route path="/editContact/:Id" element={<EditContact />} />

          {/* Route for adding a new contact */}
          <Route path="/addContact" element={<AddContact />} />

          {/* Route for handling 404 Page Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
