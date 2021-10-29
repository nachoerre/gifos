//styles
import './App.css';

//components
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Results from '../components/results/Results';

//contexts
import { AppContext } from '../contexts/AppContext';

//dependencies
import React, { useContext } from 'react';


function App() {
  const { isDark } = useContext(AppContext);
  const { isSearching } = useContext(AppContext);

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <hr />
      <div className='container'>
        <Header />
        <Search />
        {isSearching ? <span className='lds-dual-ring'></span> :
          <Results />
        }
      </div>
    </div>
  );
}

export default App;
