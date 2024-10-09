import React from 'react'

interface ButtonProps {
    buttonLabel: string;
    buttonFunction: any;
}

export default function Button({ buttonLabel, buttonFunction }: ButtonProps) {
    return (
        <button className='primary-button' onClick={buttonFunction}>
            {buttonLabel}
        </button>
    )
}
