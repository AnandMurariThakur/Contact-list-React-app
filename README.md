# Contact list React app

Problem statement

> - Create a contact list app to manage contacts.

#

- Index.js is our root file where we have bind the app.js with **react-toast-notifications** for notification and **ContactsProvider** for assecing the global state

- App.js is the container file where we have bind the Home.js, EditContact.js and AddContact.js with **react-router-dom** for routing

- Fetch the api response and stored it into global state using context and used by Home.js to render the contact list

- We added all the styles in style folder for respective pages and component

- We have created common method for calling the api in api folder also respective function to perform action

- We have add Base URL in Util folder with common api merger function

> From the contact list we have given button to update and delete contact also we have handle our global state on respection action, also we are merging the contact that have been added by as to our contact list

- In editcontact.js we have passed the id, using which we filter the contact which we need to update, once user click update contact we all the api to update the contact and handle the global state for respective action

- In addContact.js we have the form for getting contact detail and call the api for adding the contact once we get all detail and update the global state
