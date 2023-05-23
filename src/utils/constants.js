//this is our base url
export const API_ROOT = "https://jsonplaceholder.typicode.com/users";

// we have define all the api
export const API_URLS = {
  contactList: () => `${API_ROOT}`,
  updateContact: (id) => `${API_ROOT}/${id}`,
  addContact: () => `${API_ROOT}`,
};
