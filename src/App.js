import 'bootstrap/dist/css/bootstrap.min.css'; // eslint-disable-next-line
import Header from './components/Header';
import Contacts from './components/Contacts';
import PropTypes from 'prop-types';
import { Provider } from './context';

const App = () => {
  // RENDER
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="container">
          <Contacts />
        </div>
      </div>
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
