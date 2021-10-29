//dependencies
import { createContext, useEffect, useState } from "react";

//utils
import { request } from '../utils/request';

export const AppContext = createContext();

export default function AppProvider({children}) {
  const [isDark, setIsDark] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [gifsList, setGifsList] = useState([]);
  const [isSearching, setIsSearching] = useState(false)
  const [initialMessage, setInitialMessage] = useState(false)

//initially we show the trending Gifs
  useEffect(() => {
      request('/trending')
        .then(res => res.json())
        .then(data => {
          setGifsList(data.data)
        })
        .catch(err => console.log(err))
  }, [])

  //it search the Gifs that matches with the text written on the input
  useEffect(() => {
    if (isSearching) {
      request('/search', inputValue)
        .then(res => res.json())
        .then(data => {
          setGifsList(data.data)
        })
        .catch(err => console.log(err))
        .finally(() => { setIsSearching(false); setInputValue(''); setInitialMessage(true) })
    }
  }, [isSearching, inputValue])

  return (
    <AppContext.Provider value={{
      isDark, 
      setIsDark, 
      inputValue, 
      setInputValue,
      gifsList,
      isSearching, 
      setIsSearching,
      initialMessage, 
      setInitialMessage
      }}>
      {children}
    </AppContext.Provider>
  )
}