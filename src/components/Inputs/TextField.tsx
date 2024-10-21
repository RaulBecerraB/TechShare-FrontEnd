import React from 'react';

interface FormInputProps {
    placeholder: string;
    name: string;
    value: any;
    onChange: (e: any) => void;
}

const TextField: React.FC<FormInputProps> = ({ placeholder, name, value, onChange }) => {
    return (
        <input className='p-[10px] mb-[15px] border-b-[1px] border-primary rounded-none'
            placeholder={placeholder}
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required
        />
    );
}

export default TextField;
