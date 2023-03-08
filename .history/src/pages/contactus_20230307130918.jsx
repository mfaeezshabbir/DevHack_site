import React, { useState } from 'react';

function ContactForm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');
const [formStatus, setFormStatus] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
