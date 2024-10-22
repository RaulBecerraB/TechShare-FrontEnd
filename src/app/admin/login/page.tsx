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

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        };

        fetch('http://localhost:8080/login', requestOptions)
            .then(response => {
                // Usar .forEach para recorrer los headers
                response.headers.forEach((value, key) => {
                    console.log(`${key}: ${value}`);
                });

                // Intentar obtener el token desde 'Authorization'
                return response.headers.get('Authorization');
            })
            .then(token => {
                if (token) {
                    console.log('JWT Token:', token);
                } else {
                    console.warn('Token no encontrado en el header "Authorization".');
                }
            })
            .catch(error => console.error('Error:', error));
    };
    return (
        <div>
            <div className="form-container">
                <h1 className="text-primary font-bold">
                    INICIO DE SESIÓN
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
                        INICIAR SESIÓN
                    </button>
                </form>
                <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
            </div>
        </div>
    );
}

export default Page;
