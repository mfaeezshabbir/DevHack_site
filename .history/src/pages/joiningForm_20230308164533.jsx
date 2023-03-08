import React, { useState } from 'react';

function JoinForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [university, setUniversity] = useState('');
  const [semester, setSemester] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [programmingLanguage, setProgrammingLanguage] = useState('');
  const [technicalStrength, setTechnicalStrength] = useState('');
  const [programmingInterests, setProgrammingInterests] = useState('');
  const [programmingProjects, setProgrammingProjects] = useState('');
  const [clubGoals, setClubGoals] = useState('');
  const [priorInvolvement, setPriorInvolvement] = useState('');
  const [otherSkills, setOtherSkills] = useState('');
  const [anythingElse, setAnythingElse] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Please wait...');

    const formData = {
      name,
      email,
      contactNumber,
      department,
      university,
      semester,
      portfolioLink,
      programmingLanguage,
      technicalStrength,
      programmingInterests,
      programmingProjects,
      clubGoals,
      priorInvolvement,
      otherSkills,
      anythingElse,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
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
      setContactNumber('');
      setDepartment('');
      setUniversity('');
      setSemester('');
      setPortfolioLink('');
      setProgrammingLanguage('');
      setTechnicalStrength('');
      setProgrammingInterests('');
      setProgrammingProjects('');
      setClubGoals('');
      setPriorInvolvement('');
      setOtherSkills('');
      setAnythingElse('');
    }, 3000);
  };

  return (
   
