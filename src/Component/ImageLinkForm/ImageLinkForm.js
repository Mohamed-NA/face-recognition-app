import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3' style={{margin: 10}}>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input 
            style={{borderRadius: '0.5rem', marginRight: '0.5rem'}}
            className='f4 pa2 w-70 center'
            type='tex'
            onChange={onInputChange}
          />
          <button
            style={{borderRadius: '0.5rem', outline: 'none'}}
            className='w-30 grow f4 link ph3 pv2 dib white bg'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;