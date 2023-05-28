// Base URL for the API
export const API_ROOT = "https://jsonplaceholder.typicode.com/users";

// API URLs for different endpoints
export const API_URLS = {
  // Returns the URL for retrieving the contact list
  contactList: () => `${API_ROOT}`,

  // Returns the URL for updating a contact by ID
  updateContact: (id) => `${API_ROOT}/${id}`,

  // Returns the URL for adding a new contact
  addContact: () => `${API_ROOT}`,
};
