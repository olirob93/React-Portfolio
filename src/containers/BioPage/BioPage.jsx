import React from 'react';
import Bio from '../../componenets/Bio';
import text from '../../data/text.js';

const BioPage = () => {
    return (
        <div>
            {text.map((item) => <Bio text={item} /> )}
        </div>
    )
}

export default BioPage
