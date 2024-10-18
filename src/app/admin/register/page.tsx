"use client"
import Image from "next/image";
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
            <h1>CREATE AN ACCOUNT</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="surname">Surname</label>
                <input type="text" id="surname" name="surname" required />

                <label htmlFor="password">Password</label>
                <div className="password-container">
                    <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        required
                    />
                    <span
                        className="toggle-password"
                        onClick={() => togglePasswordVisibility('password')}
                    >
                        👁️
                    </span>
                </div>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-container">
                    <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                    />
                    <span
                        className="toggle-password"
                        onClick={() => togglePasswordVisibility('confirmPassword')}
                    >
                        👁️
                    </span>
                </div>

                <button type="submit">REGISTER</button>
            </form>
            <p>Already have an account? <a href="#">Log in</a></p>
        </div>
    )
}