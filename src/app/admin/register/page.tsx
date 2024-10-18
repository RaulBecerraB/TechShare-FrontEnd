"use client"
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import Button from "@/components/AdminCrud/PrimaryButton";
import '@/styles/containers.css'
import '@/styles/form.css'

export default function register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = (type: any) => {
        if (type === 'password') {
            setPasswordVisible(!passwordVisible);
        } else {
            setConfirmPasswordVisible(!confirmPasswordVisible);
        }
    };

    const handleRegister = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_name: 'JohnDoe',
                first_name: 'John',
                last_name: 'Doe',
                email: 'JohnDoe@example.com',
                password: '123456',
                roles: [1, 2]
            })
        };
        fetch('http://localhost:8080/register', requestOptions)
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    };
    return (
        <div className="form-container">
            <h1 className="text-primary font-bold">
                CREATE AN ACCOUNT
            </h1>
            <form>
                <label htmlFor="first_name">Nombre</label>
                <input type="text" id="first_name" name="first_name" required />

                <label htmlFor="last_name">Apellido</label>
                <input type="text" id="last_name" name="last_name" required />

                <label htmlFor="email">Correo</label>
                <input type="text" id="email" name="email" required />

                <label htmlFor="password">Contraseña</label>

                <div className="relative">
                    <input
                        className="w-full"
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        required
                    />
                    <span
                        className="icon"
                        onClick={() => togglePasswordVisibility('password')}
                    >
                        <FaEye />
                    </span>
                </div>

                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <div className='relative'>
                    <input
                        className="w-full"
                        type={confirmPasswordVisible ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                    />
                    <span
                        className="icon"
                        onClick={() => togglePasswordVisibility('confirmPassword')}
                    >
                        <FaEye />
                    </span>
                </div>

                <button type="submit">REGISTER</button>
            </form>
            <p>Already have an account? <a href="#">Log in</a></p>
        </div>
    )
}