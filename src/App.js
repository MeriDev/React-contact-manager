import 'bootstrap/dist/css/bootstrap.min.css'; // eslint-disable-next-line
import PropTypes from 'prop-types';
import { Provider } from './context';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContacts from './components/contacts/AddContacts';
import EditContacts from './components/contacts/EditContacts';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  // RENDER
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/contact/add" element={<AddContacts />} />
              <Route path="/contact/edit/:id" element={<EditContacts />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

Header.defaultProps = {
  branding: 'Contact Manager',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default App;
