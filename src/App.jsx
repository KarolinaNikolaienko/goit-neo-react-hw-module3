import './App.css';
import contactsFile from './contacts.json';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [contacts, setContacts] = useState(contactsFile);

  const searchedContacts = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.number.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchValue} onFilter={setSearchValue} />
      <ContactList contacts={searchedContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
