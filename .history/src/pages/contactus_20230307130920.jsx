import React, { useState } from 'react';

function ContactForm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');
const [formStatus, setFormStatus] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
setFormStatus('Please wait...');

const formData = { name, email, phone, message };

try {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  const data = await response.json();

  if (response.status === 200) {
    setFormStatus(data.message);
  } else {
    setFormStatus('Something went wrong!');
  }
} catch (error) {
  console.log(error);
  setFormStatus('Something went wrong!');
}

setTimeout(() => {
  setFormStatus('');
  setName('');
  setEmail('');
  setPhone('');
  setMessage('');
}, 3000);
