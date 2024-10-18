"use client"
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import Button from "@/components/AdminCrud/PrimaryButton";
import '@/styles/containers.css'
import '@/styles/form.css'

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    // Estados para capturar los valores de los inputs
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Manejar cambios en los inputs
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Alternar visibilidad de las contraseñas
    const togglePasswordVisibility = (type: any) => {
        if (type === 'password') {
            setPasswordVisible(!passwordVisible);
        } else {
            setConfirmPasswordVisible(!confirmPasswordVisible);
        }
    };

    // Manejo del registro
    const handleRegister = (e: any) => {
        e.preventDefault(); // Evitar que el formulario se envíe por defecto
        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_name: formData.email.split('@')[0], // Puedes generar el username basado en el email
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                password: formData.password,
                roles: [1, 2] // Aquí puedes ajustar según sea necesario
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
                CREA UNA CUENTA
            </h1>
            <form onSubmit={handleRegister}>
                <input
                    placeholder="Nombre"
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder="Apellido"
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder="Correo electrónico"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <div className="relative">
                    <input
                        placeholder="Contraseña"
                        className="w-full"
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
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
                <div className='relative'>
                    <input
                        placeholder="Confirmar contraseña"
                        className="w-full"
                        type={confirmPasswordVisible ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <span
                        className="icon"
                        onClick={() => togglePasswordVisibility('confirmPassword')}
                    >
                        <FaEye />
                    </span>
                </div>

                <button className="bg-primary" type="submit">REGISTRAR</button>
            </form>
            <p>¿Ya tienes una cuenta? <a href="#">Iniciar sesión</a></p>
        </div>
    )
}
