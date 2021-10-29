//styles
import './Gif.css'

//dependencies
import React from "react";

function Gif({
  src
}) {
  return (
    <div>
      {/* clicking the Gif you can access to the Gif original website at Giphy platform */}
      <a href={src} target='_blank' rel='noreferrer noopener'>
        <img className='gif-img' src={src} alt='gif'></img>
      </a>
    </div>
  );
};

export default Gif;