//styles
import './Results.css'

//components
import Gif from "../gif/Gif";

//dependencies
import React, { useContext } from "react";

//contexts
import { AppContext } from "../../contexts/AppContext";

function Results() {
  const { gifsList } = useContext(AppContext);
  const { initialMessage } = useContext(AppContext);

  return (
    <div className='results'>
      {!gifsList.length ?
        <p>No se encontraron resultados :(</p> :
        <section>
          {!initialMessage ?
            <p>Realiza tu búsqueda!</p> :
            <p>Resultados de la búsqueda</p>
          }
          <div className='gif-container'>
            {(gifsList || []).map(item => {
              const { id, images: {
                fixed_height: {
                  url }
              } } = item; 
              return (
                <Gif key={id} src={url} />
              )
            })}
          </div>
        </section>
      }
    </div>
  );
}

export default Results;