import React from 'react';
import { useState } from 'react';


const LinkSelectButton = () => {
    const [formVisible, setFormVisible] = useState(false);
    
    const handleClick = () => {
        setFormVisible(!formVisible);
      }

    return (
      <div>
        
        {formVisible ? (
            <form>
              <label for="color url"><b>Paste the garment color's URL:</b></label>
              <br></br>
              <br></br>
              <input type="url" />
            </form>
        ) : (
            <button onClick={handleClick} className="btn">
            <span class="material-symbols-sharp">
            add_link
            </span>
          </button>
        )}
        </div>
    );
};


export default LinkSelectButton;
