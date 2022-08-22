import { useState, useContext } from 'react';
import { Context } from '../context';

const Contact = ({ contact }) => {
  const { id, name, email, phone } = contact;
  const [toggleInfo, setToggleInfo] = useState(false);

  const { removeContact } = useContext(Context);

  return (
    <div className="card card-body mb-3">
      <h4>
        {name}
        <i
          onClick={() => setToggleInfo(!toggleInfo)}
          className="fas fa-sort-down"
          style={{ cursor: 'pointer' }}
        ></i>
        <i
          className="fas fa-times"
          style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          onClick={() => removeContact(id)}
        ></i>
      </h4>
      {toggleInfo && (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      )}
    </div>
  );
};

export default Contact;
