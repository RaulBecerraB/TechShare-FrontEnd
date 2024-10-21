import React, { useState } from 'react'
import '@/styles/buttons.css'

interface ButtonProps {
    buttonLabel: string;
    buttonFunction: any;
    isDisabled?: boolean;
}

export default function Button({ buttonLabel, buttonFunction, isDisabled = false }: ButtonProps) {
    return (
        <button className='primary-button'
            onClick={buttonFunction}
            disabled={isDisabled}
            type='submit'
        >
            {isDisabled ? '' : buttonLabel}
        </button>
    )
}
