import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

export const Context = React.createContext();

export const Provider = props => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const res = await axios.get('http://localhost:5000/contacts');
    setContacts(res.data);
  };
  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const editContact = updContact => {
    setContacts([
      ...contacts.map(contact =>
        contact.id === Number(updContact.id) ? (contact = updContact) : contact
      ),
    ]);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Context.Provider
      value={{ contacts, removeContact, addContact, editContact }}
    >
      {props.children}
    </Context.Provider>
  );
};

// export const Consumer = Context.Consumer;
