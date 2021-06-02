import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p>
                {'This magic brain will detect faces in the picture'}
            </p>
            <div className='center '>
                <div className='pa4 center form br3 shadow-5'>
                    <input className='f4 pa2 w-70 center bn' type='text' onChange={onInputChange}/>
                    <button 
                    className='w-30 grow f4 bn link ph3 pv dib white bg-light-purple'
                    onClick={onButtonSubmit}
                    >Detect</button>

                </div>
                
            </div>
        </div>
    )
}

export default ImageLinkForm;