"use client"
import React from 'react';
import { useState } from 'react';
import TextField from '@/components/Inputs/TextField';
import PasswordField from '@/components/Inputs/PasswordField';
import '@/styles/form.css';
import '@/styles/buttons.css';

const Page = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = (e: any) => {
        e.preventDefault(); // Evitar que el formulario se envíe por defecto
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: formData.email,
            first_name: formData.password,
        })
    };

    fetch('http://localhost:8080/login', requestOptions)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    return (
        <div>
            <div className="form-container">
                <h1 className="text-primary font-bold">
                    CREA UNA CUENTA
                </h1>
                <form onSubmit={handleLogin}>
                    <TextField
                        placeholder="Correo electrónico"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <PasswordField
                        placeholder="Contraseña"
                        name="password"
                        value={formData.password}
                        handleChange={handleChange}
                    />
                    <button
                        className="primary-button font-bold"
                        type="submit">
                        REGÍSTRATE
                    </button>
                </form>
                <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
            </div>
        </div>
    );
}

export default Page;
