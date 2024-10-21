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
            <div className="relative">
                <input
                    placeholder={placeholder}
                    className="w-full"
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
                    <FaEye />
                </span>
            </div>
        </>
    );
}

export default PasswordField;
