import { useContext } from 'react';
import { Context } from '../../context';
import Contact from './Contact';

const Contacts = () => {
  const { contacts } = useContext(Context);

  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Contact </span>List
      </h1>
      {contacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </>
  );
};

export default Contacts;
