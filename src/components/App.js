import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./";
import { Home, EditContact, AddContact } from "../pages";

const NotFound = () => {
  return <h1>404 Page Not Found</h1>;
};

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
