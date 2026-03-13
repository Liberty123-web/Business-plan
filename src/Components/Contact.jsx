import React, { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        businessName: "",
        date: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "2348145922874";

        const text =
            `Business plane form -\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Business Name: ${formData.businessName}\n` +
            `Date: ${formData.date}\n` +
            `Message: ${formData.message}`;

        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        window.open(url, "-_blank");
    }

    return (
        <div className="w-full flex justify-center items-center bg-white flex-col px-4">
            <form id="contactForm" onSubmit={handleSubmit}

                className="w-full max-w-2xl rounded-2xl flex flex-col justify-center items-center gap-10 mt-30 mb-10 bg-gray-200 shadow-lg p-6 md:p-10">

                <input className="outline-1 outline-gray-400 w-full p-3 rounded-xl"
                    name="name" value={formData.name} onChange={handleChange}
                    type="text" placeholder="Full-Name" />

                <input className="outline-1 outline-gray-400 w-full p-3 rounded-xl"
                    name="email" value={formData.email} onChange={handleChange}
                    type="email" placeholder="Email" />

                <input className="outline-1 outline-gray-400 w-full p-3 rounded-xl"
                    name="businessName" value={formData.businessName} onChange={handleChange}
                    type="text" placeholder="Bussiness-Name" />

                <input className="outline-1 outline-gray-400 w-full p-3 rounded-xl"
                    name="date" value={formData.date} onChange={handleChange}
                    type="date" placeholder="Date" />

                <textarea className="outline-1 outline-gray-400 w-full p-3 rounded-xl text-gray-700"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How do you want us to help you make the perfect Bussiness plane">
                </textarea>

                <button className="bg-green-400 w-full md:w-60 p-3 rounded-xl" type="submit">
                    Send a message
                </button>

            </form>
        </div>
    );
}

export default Contact;