import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./";
import { Home, EditContact, AddContact } from "../pages";

const NotFound = () => {
  return <h1>404 Page Not Found</h1>;
};

//we have used react-roter-dom to navigate between pages
//Nabvar is the top most component
//home page display all the contact
//add contact page display add new contact form
//edit contact page have the functionality to change the contact detail
//not found will diplay if the try visit other other path which is not given in route

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editContact/:Id" element={<EditContact />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
