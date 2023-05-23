import { API_URLS } from "../utils";

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

export const getContactList = () => {
  return customFetch(API_URLS.contactList(), {
    method: "GET",
  });
};

export const updateContact = async (updatedContact, id) => {
  return customFetch(API_URLS.updateContact(id), {
    method: "PUT",
    body: JSON.stringify(updatedContact),
  });
};

export const addContact = async (addContact) => {
  return customFetch(API_URLS.addContact(), {
    method: "POST",
    body: JSON.stringify(addContact),
  });
};
