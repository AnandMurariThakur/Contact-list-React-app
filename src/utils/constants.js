export const API_ROOT = "https://jsonplaceholder.typicode.com/users";

export const API_URLS = {
  contactList: () => `${API_ROOT}`,
  updateContact: (id) => `${API_ROOT}/${id}`,
  addContact: () => `${API_ROOT}`,
};
