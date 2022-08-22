import React from 'react';
import { useState } from 'react';
import data from './data/data';

export const Context = React.createContext();

export const Provider = props => {
  const [contacts, setContacts] = useState(data);

  const removeContact = id => {
    setContacts(contacts => {
      return contacts.filter(contact => contact.id !== id);
    });
  };

  return (
    <Context.Provider value={{ removeContact, contacts }}>
      {props.children}
    </Context.Provider>
  );
};

// export const Consumer = Context.Consumer;
