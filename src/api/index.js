import { API_URLS } from "../utils";

//common function to all the api and return response

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
    throw new Error("Error occur while calling the api");
  } catch (error) {
    return {
      message: error.message,
      success: false,
    };
  }
};

//this function is used to call the api for getting all the contact list
export const getContactList = () => {
  return customFetch(API_URLS.contactList(), {
    method: "GET",
  });
};

//this function is used for updated the contact is server
export const updateContact = async (updatedContact, id) => {
  return customFetch(API_URLS.updateContact(id), {
    method: "PUT",
    body: JSON.stringify(updatedContact),
  });
};

//this function is used to add new contact
export const addContact = async (addContact) => {
  return customFetch(API_URLS.addContact(), {
    method: "POST",
    body: JSON.stringify(addContact),
  });
};
