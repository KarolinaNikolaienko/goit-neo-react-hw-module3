import './App.css';
import contacts from './contacts.json';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchValue} onFilter={setSearchValue} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
