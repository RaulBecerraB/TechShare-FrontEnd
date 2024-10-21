import React, { useState, useEffect } from 'react';
import { FaEye } from "react-icons/fa";

interface PasswordFieldProps {
    placeholder: string;
    name: string;
    value: string;
    handleChange: (e: any) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ placeholder, name, value, handleChange }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Alternar visibilidad de las contraseñas
    const togglePasswordVisibility = (type: string) => {
        if (type === 'password') {
            setPasswordVisible(!passwordVisible);
        }
    };

    return (
        <>
            <div className="relative text-sm">
                <input
                    placeholder={placeholder}
                    className="w-full p-[10px] mb-[15px] border-b-[1px] border-primary rounded-none"
                    type={passwordVisible ? "text" : "password"}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    required
                />
                <span
                    className="icon"
                    onClick={() => togglePasswordVisibility('password')}
                >
                    <div className='text-primary hover:text-gray-700 cursor-pointer'>
                        <FaEye />
                    </div>
                </span>
            </div>
        </>
    );
}

export default PasswordField;
