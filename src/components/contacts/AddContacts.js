import { useContext, useState } from 'react';
import { Context } from '../../context';
import FormInput from './FormInput';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddContacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setError] = useState({ name: '', email: '', phone: '' });

  const { addContact } = useContext(Context);
  const history = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();
    if (name === '' || email === '' || phone === '') {
      setError({
        name: 'name is required',
        email: 'email is required',
        phone: 'Phone is required',
      });
    } else {
      const newContact = { name, email, phone };
      const req = await axios.post(
        'http://localhost:5000/contacts',
        newContact
      );

      addContact(req.data);

      setName('');
      setEmail('');
      setPhone('');
      setError({ name: '', email: '', phone: '' });
      history('/');
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Add contact</div>
      <div className="card-body">
        <form onSubmit={e => onSubmit(e)}>
          <FormInput
            label="Name"
            name="name"
            placeholder="Enter Name..."
            value={name}
            onChange={e => setName(e.target.value)}
            errors={errors.name}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
            errors={errors.email}
          />
          <FormInput
            label="Phone"
            name="phone"
            placeholder="Enter Phone..."
            value={phone}
            onChange={e => setPhone(e.target.value)}
            errors={errors.phone}
          />

          <div className=" d-grid ">
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContacts;
