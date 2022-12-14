import React from 'react';
import { useState } from 'react';

const PaletteSelectButton = () => {
    const [formVisible, setFormVisible] = useState(false);
    
    const handleClick = () => {
        setFormVisible(!formVisible);
      }

    return (
      <div>
        
        {formVisible ? (
            <form>
              <label for="color season"><b>Select your color season: </b></label>
              <br></br>
              <br></br>
              <input type="radio" id="summer" name="color season" value="summer"/>
              <label for="summer">Summer</label>
              <br></br>
              <input type="radio" id="autumn" name="color season" value="autumn"/>
              <label for="autumn">Autumn</label>
              <br></br><input type="radio" id="winter" name="color season" value="winter"/>
              <label for="winter">Winter</label>
              <br></br><input type="radio" id="spring" name="color season" value="spring"/>
              <label for="spring">Spring</label>
              <br></br>
              <br></br>
              <label for="tone"><b>Select your tone: </b></label>
              <br></br>
              <br></br>
              <input type="radio" id="bright" name="tone" value="bright"/>
              <label for="bright">Bright</label>
              <br></br>
              <input type="radio" id="true" name="tone" value="true"/>
              <label for="true">True</label>
              <br></br><input type="radio" id="soft" name="tone" value="soft"/>
              <label for="soft">Soft</label>
            </form>
        ) : (
            <button onClick={handleClick} className="btn">
            <span className="material-symbols-outlined">palette</span>
          </button>
        )}
        </div>
    );
};

export default PaletteSelectButton;

