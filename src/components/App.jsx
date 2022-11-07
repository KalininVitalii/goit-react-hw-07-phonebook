// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from 'redux/operations';
// import { selectIsLoading } from 'redux/contacts-slice';

import { ContactForm } from './Form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
