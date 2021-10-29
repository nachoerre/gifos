//styles
import './Search.css';

//components
import Button from "../button/Button";

//dependencies
import React, { useState, useEffect, useContext } from 'react';

//utils
import { request } from '../../utils/request';

//contexts
import { AppContext } from '../../contexts/AppContext';

//assets
import ilustraHeader from '../../assets/ilustra_header.svg'
import iconSearchMod from '../../assets/icon-search-mod-noc.svg'
import iconSearch from '../../assets/icon-search.svg'

function Search() {
  const { inputValue, setInputValue } = useContext(AppContext);
  const { isSearching, setIsSearching } = useContext(AppContext);

  const [autoComplete, setAutoComplete] = useState([]);

  useEffect(() => {
    if (inputValue !== '') {
      request('/search/tags', inputValue, 5) //The route was taken from https://developers.giphy.com/docs/api/endpoint#autocomplete
        .then(res => res.json())
        .then(data => setAutoComplete(data.data))
        .catch(err => console.log(err))
    }
  }, [inputValue])

  return (
    <section className='search-section'>
      <h1 className='title'>¡Inspirate y busca los mejores <span>GIFS</span>!</h1>
      <img className='ilustra-header' src={ilustraHeader} alt="Ilustracion del encabezado" />
      <form className='search'>
        <div className='search-container'>
          <input
            className='input-search'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Buscar Gif'
          />
          <Button
            onClick={() => setIsSearching(!isSearching)}
            className='btn-search'
            disabled={isSearching || inputValue === ''}
          >
            <img src={iconSearchMod} alt="Lupa de busqueda" />
          </Button>
        </div>
        <div className={`browsers ${inputValue === '' || !autoComplete.length ? 'not-show' : 'show'}`}>
          {(autoComplete || []).map(item => {
            return (
              <Button
                key={item.name}
                onClick={() => {
                  setIsSearching(!isSearching)
                  setInputValue(item.name)
                }}
                className='btn-autocomplete'
                disabled={isSearching || inputValue === ''}
              >
                <div className='data-list'>
                  <img src={iconSearch} alt="Lupa de busqueda" />
                  <option>{item.name}</option>
                </div>
              </Button>
            );
          })}
        </div>
      </form>
    </section>
  );
}

export default Search;