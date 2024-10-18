"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/AdminCrud/PrimaryButton";
import '@/styles/containers.css'

export default function register() {

    const [registerData, setRegisterData] = useState([]);

    const handleRegister = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                tuser_name: 'John Doe',
                first_name: 'John',
                last_name: 'Doe',
                email: 'JohnDoe@example.com',
                password: '123456',
                roles: [1, 2]
            })
        };
        fetch('http://localhost:8080/register', requestOptions)
            .then(response => response.json())
            .then(data => setRegisterData(data.id));
    };

    return (
        <div className="white-container">
            <h1>register</h1>
            <Button buttonFunction={handleRegister} buttonLabel="CREAR REGISTRO"></Button>
        </div>
    );
}