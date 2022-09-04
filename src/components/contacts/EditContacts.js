import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import FormInput from './FormInput';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditContacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setError] = useState({ name: '', email: '', phone: '' });

  const { editContact } = useContext(Context);
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/contacts/${id}`).then(res => {
      const { name, email, phone } = res.data;

      setName(name);
      setEmail(email);
      setPhone(phone);
    });
  }, [id]);

  const onSubmit = async e => {
    e.preventDefault();

    if (name === '' || email === '' || phone === '') {
      setError({
        name: 'name is required',
        email: 'email is required',
        phone: 'Phone is required',
      });
    } else {
      const UpdatedContact = { id, name, email, phone };

      await axios.put(`http://localhost:5000/contacts/${id}`, UpdatedContact);

      editContact(UpdatedContact);

      setName('');
      setEmail('');
      setPhone('');
      setError({ name: '', email: '', phone: '' });
      history('/');
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Edit contact</div>
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
              value="Edit Contact"
              className="btn btn-light "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContacts;
