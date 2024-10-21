"use client"
import React from 'react';
import TextField from '@/components/Inputs/TextField';
import PasswordField from '@/components/Inputs/PasswordField';
import '@/styles/form.css';
import '@/styles/buttons.css';

const handleRegister = () => console.log('Registrando usuario...');
const handleChange = () => console.log('Manejando cambios en los inputs...');
const formData = {
    email: '',
    password: ''
};

const Page = () => {
    return (
        <div>
            <div className="form-container">
                <h1 className="text-primary font-bold">
                    CREA UNA CUENTA
                </h1>
                <form onSubmit={handleRegister}>
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
                <p>¿Ya tienes una cuenta? <a href="#">Iniciar sesión</a></p>
            </div>
        </div>
    );
}

export default Page;
