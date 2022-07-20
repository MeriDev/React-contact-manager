import Contact from './Contact';

const Contacts = ({ name, email, phone }) => {
  return (
    <div>
      <Contact name={name} email={email} phone={phone} />
    </div>
  );
};

export default Contacts;
