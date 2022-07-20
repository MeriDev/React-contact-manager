import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componenets/Header';
import Contacts from './componenets/Contacts';
import { useState } from 'react';

const App = () => {
  const [contacts, setContact] = useState([
    {
      id: 1,
      name: 'meri',
      email: 'meri@mail.com',
      phone: '555 555 555',
    },
    {
      id: 2,
      name: 'moe',
      email: 'moe@mail.com',
      phone: '999 999 999 ',
    },
  ]);
  // RENDER
  return (
    <div>
      <Header branding="Contact Manager" />
      <div className="container">
        {contacts.map(({ id, ...otherProps }) => {
          return <Contacts key={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
};

export default App;
