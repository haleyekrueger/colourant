import React from 'react';
import { useState } from 'react';

const PaletteSelectButton = () => {
    const [formVisible, setFormVisible] = useState(false);

    return (
        <div>
        <button onClick={() => setFormVisible(!formVisible)} class="btn"><span class="material-symbols-outlined">
        palette
        </span>
        </button>
        if {formVisible && (
            <form>
              <label>Select your color season</label>
              <br></br>
              <option>Summer</option>
              <br></br>
            </form>
          )}
        </div>
    );
}

export default PaletteSelectButton;

