import { useState, useContext } from 'react';
import { Context } from '../../context';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Contact = ({ contact }) => {
  const { id, name, email, phone } = contact;
  const [toggleInfo, setToggleInfo] = useState(false);

  const { removeContact } = useContext(Context);

  const onClickDelete = async id => {
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    removeContact(id);
  };

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
          onClick={() => onClickDelete(id)}
        ></i>
        <Link to={`contact/edit/${id}`}>
          <i
            className="fas fa-pencil-alt"
            style={{
              cursor: 'pointer',
              float: 'right',
              color: 'black',
              marginRight: '1rem',
            }}
          ></i>
        </Link>
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
