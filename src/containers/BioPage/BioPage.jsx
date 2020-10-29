import React from 'react';
import Bio from '../../components/Bio';
import text from '../../data/text.js';

const BioPage = () => {
    return (
        <div>
            {text.map((item, index) => <Bio key={index} text={item} /> )}
        </div>
    )
}

export default BioPage
