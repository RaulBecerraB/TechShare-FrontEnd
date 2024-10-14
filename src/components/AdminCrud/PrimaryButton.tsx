import React, { useState } from 'react'
import '@/styles/buttons.css'

interface ButtonProps {
    buttonLabel: string;
    buttonFunction: any;
    disabled?: boolean;
    isSecondary?: boolean;
}

export default function Button({ buttonLabel, buttonFunction, disabled = false, isSecondary = false }: ButtonProps) {
    const [activeClass, setActiveClass] = useState(isSecondary ? 'secondary-button' : 'primary-button');

    return (
        <button className={`${disabled ? '' : activeClass}`}
            onClick={buttonFunction}
            disabled={disabled}
        >
            {disabled ? '' : buttonLabel}
        </button>
    )
}
