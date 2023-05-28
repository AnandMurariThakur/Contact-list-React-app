import { API_URLS } from "../utils";

// Common function for API calls that returns the response
const customFetch = async (url, { body, ...customConfig }) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  config.body = body;

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (response.status === 200 || response.status === 201) {
      return {
        data: data,
        success: true,
      };
    }

    throw new Error("An error occurred while calling the API.");
  } catch (error) {
    return {
      message: error.message,
      success: false,
    };
  }
};

// Function to retrieve the contact list from the server
export const getContactList = () => {
  return customFetch(API_URLS.contactList(), {
    method: "GET",
  });
};

// Function to update a contact on the server
export const updateContact = async (updatedContact, id) => {
  // Check if the provided ID is greater than 10, and if so, set it to 1 (added for error handling)
  const newID = id > 10 ? 1 : id;

  return customFetch(API_URLS.updateContact(newID), {
    method: "PUT",
    body: JSON.stringify(updatedContact),
  });
};

// Function to add a new contact
export const addContact = async (newContact) => {
  return customFetch(API_URLS.addContact(), {
    method: "POST",
    body: JSON.stringify(newContact),
  });
};
