'use client'
import React from 'react';
const CrossfadeContainer = (props) => {
    return (
    <div 
        className={`content-layout ${props.className}`}
    >
        {props.children}
    </div>
    )
}

export default CrossfadeContainer;