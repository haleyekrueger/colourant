import React from 'react';

const LinkSelectButton = () => {

    const handleClick = () => {
        
        alert('The button was clicked!');
    }

    return (
        <button onClick={handleClick} class="btn"><span class="material-symbols-sharp">
        add_link
        </span>
        </button>
    )
}

export default LinkSelectButton;
