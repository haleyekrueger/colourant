import React, { useRef, useState } from 'react';

const Form = () => {
  // Create a ref to store the form elements
  const forms = useRef([]);

  // Create state variables to track which forms are visible
  const [form1Visible, setForm1Visible] = useState(false);
  const [form2Visible, setForm2Visible] = useState(false);

  const handleForm1Click = () => {
    setForm1Visible(true);
  }

  const handleForm2Click = () => {
    setForm2Visible(true);
  }

  const handleSubmitAllClick = () => {
    // Iterate over the form elements and submit them
    forms.current.forEach(form => form.submit());
  }

  return (
    <div>
      {form1Visible ? (
        <form ref={form => forms.current.push(form)}>
          <br></br>
          <br></br>
          <label for="color season"><b>Select your color season: </b></label>
              <br></br>
              <br></br>
              <input type="radio" id="summer" name="color season" value="summer" required />
              <label for="summer">Summer</label>
              <br></br>
              <input type="radio" id="autumn" name="color season" value="autumn" required />
              <label for="autumn">Autumn</label>
              <br></br><input type="radio" id="winter" name="color season" value="winter" required />
              <label for="winter">Winter</label>
              <br></br><input type="radio" id="spring" name="color season" value="spring" required />
              <label for="spring">Spring</label>
              <br></br>
              <br></br>
              <label for="tone"><b>Select your tone: </b></label>
              <br></br>
              <br></br>
              <input type="radio" id="bright" name="tone" value="bright" required />
              <label for="bright">Bright</label>
              <br></br>
              <input type="radio" id="true" name="tone" value="true" required />
              <label for="true">True</label>
              <br></br><input type="radio" id="soft" name="tone" value="soft" required />
              <label for="soft">Soft</label>
              <br></br>
             
        </form>
      ) : (
        <button onClick={handleForm1Click} className="btn">
        <span className="material-symbols-outlined">palette</span></button>
      )}
      <br></br>
      {form2Visible ? (
        <form ref={form => forms.current.push(form)}>
        
          <br></br>
          <label for="color url"><b>Paste the garment color's URL:</b></label>
              <br></br>
              <br></br>
              <input type="url" id="color url" name="url" required />
          <br></br>
          <br></br>
        </form>
      ) : (
        <button onClick={handleForm2Click} className="btn">
        <span class="material-symbols-sharp">
        add_link
        </span>
        </button>
      )}
      <br></br>
      <button onClick={handleSubmitAllClick} class="btn"><span class="material-symbols-sharp">
        double_arrow
        </span></button>
    </div>
  );
};

export default Form;
