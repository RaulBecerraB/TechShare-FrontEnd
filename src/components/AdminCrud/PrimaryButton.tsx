import React from 'react'

interface ButtonProps {
    buttonLabel: string;
    buttonFunction: any;
    disabled?: boolean;
}

export default function Button({ buttonLabel, buttonFunction, disabled = false }: ButtonProps) {
    return (
        <button className={`${disabled ? '' : 'primary-button'}`}
            onClick={buttonFunction}
            disabled={disabled}
        >
            {disabled ? '' : buttonLabel}
        </button>
    )
}
