import './App.css';
import contactsFile from './contacts.json';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useEffect, useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [contacts, setContacts] = useState(() => {
    const localStorageContacts = localStorage.getItem('contacts');
    if (localStorageContacts) return JSON.parse(localStorageContacts);
    return contactsFile;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const searchedContacts = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.number.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const addContact = contact => {
    setContacts(prevContacts => {
      return [...prevContacts, contact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submit={addContact} />
      <SearchBox value={searchValue} onFilter={setSearchValue} />
      <ContactList contacts={searchedContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
