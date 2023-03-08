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
        <div className="flex items-center min-h-screen bg-gray-50 dark:bg-[#3c0d72]">
            <div className="container mx-auto">
                <div className="w-2/3 mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Join Our Community</h1>
                        <p className="text-gray-400 dark:text-gray-400">Fill up the form below to join our community.</p>
                    </div>
                    <div className="m-7">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    required
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    required
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="contact" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    value={contactNumber}
                                    onChange={(e) => setContact(e.target.value)}
                                    placeholder="+1 123 456 7890"
                                    required
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="department" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                    Department
                                </label>
                                <input
                                    type="text"
                                    name="department"
                                    id="department"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    placeholder="Computer Science"
                                    required
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="university" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                    University
                                </label>
                                <input
                                    type="text"
                                    name="university"
                                    id="university"
                                    value={university}
                                    onChange={(e) => setUniversity(e.target.value)}
                                    placeholder="Example University"
                                    required
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />

                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="semester"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                    Semester
                                </label>
                                <input
                                    type="number"
                                    name="semester"
                                    id="semester"
                                    value={semester}
                                    onChange={(e) => setSemester(e.target.value)}
                                    placeholder="4"
                                    required
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="portfolio"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                    Portfolio Link
                                </label>
                                <input
                                    type="url"
                                    name="portfolio"
                                    id="portfolio"
                                    value={portfolioLink}
                                    onChange={(e) => setPortfolioLink(e.target.value)}
                                    placeholder="https://example.com"
                                    required
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="programming-language"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                    Interested Programming Language(s)
                                </label>
                                <input
                                    type="text"
                                    name="programming-language"
                                    id="programming-language"
                                    value={programmingLanguage}
                                    onChange={(e) => setProgrammingLanguage(e.target.value)}
                                    placeholder="JavaScript, Python"
                                    required
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="technical-strength"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                    Technical Strength
                                </label>
                                <textarea
                                    name="technical-strength"
                                    id="technical-strength"
                                    value={technicalStrength}
                                    onChange={(e) => setTechnicalStrength(e.target.value)}
                                    placeholder="I'm experienced with React and have built a few applications using it."
                                    required
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="areas-of-interest"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                    Areas of Programming Interest
                                </label>
                                <textarea
                                    name="areas-of-interest"
                                    id="areas-of-interest"
                                    value={programmingInterests}
                                    onChange={(e) => setAreasOfInterest(e.target.value)}
                                    placeholder="I'm interested in front-end development and machine learning."
                                    required
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />

                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="additional-information"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                    Additional Information
                                </label>
                                <textarea
                                    name="additional-information"
                                    id="additional-information"
                                    value={additionalInformation}
                                    onChange={(e) => setAdditionalInformation(e.target.value)}
                                    placeholder="I'm excited to work with other passionate developers and learn from them!"
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            )};
            export default JoinForm;
