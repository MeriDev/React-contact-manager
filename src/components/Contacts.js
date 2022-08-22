import { useContext } from 'react';
import { Context } from '../context';
import Contact from './Contact';

const Contacts = () => {
  const { contacts } = useContext(Context);
  console.log(contacts);

  return (
    <>
      {contacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </>
  );
};

export default Contacts;
