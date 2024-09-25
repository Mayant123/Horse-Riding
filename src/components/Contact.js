import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./style.css";

function Contact() {
    const [countryCode, setCountryCode] = useState('+1'); // Default country code
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState(''); // State for country field
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [description,setdescription] = useState('')

  const contactusForm = async()=>{
    const formData = {
          "Domain":"thktradeers",
          "email":email,
          "Name":name,
          "Contact":phoneNumber,
          "Subjec":country,
          "Description":description
      };

      try {
        const response = await fetch('https://nexon.eazotel.com/eazotel/addcontacts', {
            method: 'POST', // Set the method to POST
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
            body: JSON.stringify(formData) // Convert form data to a JSON string
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`); // Handle non-2xx HTTP responses
        }

        const data = await response.json(); // Parse the JSON response
        setCountryCode('+1')
        setPhoneNumber('')
        setCountry('')
        setname('')
        setemail('')
        setdescription('')
        alert('Form Submitted')
    } catch (error) {
        console.error('Error:', error); // Handle errors
    }
  }

    return (
        <div className="p-6 lg:p-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">CONTACT US</h1>
            <section className="mt-10 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-6">
                    <h2 className="text-[2.75rem] leading-[3rem] font-bold text-gray-800 mb-4">
                        Get in Touch
                    </h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Location</label>
                        <p className="flex items-center gap-2">
                            <FaLocationDot/>P.O. Box 1519, Post code 122, AL Mabela Muscat, Sultanate of Oman
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Email</label>
                        <a href="mailto:contact@thktrade.com" className="flex items-center gap-2"><MdEmail/>contact@thktrade.com</a>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Phone</label>
                        <p className="flex items-center gap-2"><IoMdCall/>+968 7909 8800 (Oman)</p>
                        <p className="flex items-center gap-2"><IoMdCall/>+91 9760 66 44 22 (India)</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3655.5013650600267!2d58.107192975331955!3d23.622209478758137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM3JzIwLjAiTiA1OMKwMDYnMzUuMiJF!5e0!3m2!1sen!2sin!4v1724674069556!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ borderRadius: "10px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
            
            <section className="mt-10">
                <div className="w-full p-6 shadow-xl">
                    <div>
                        <div className="flex flex-col lg:flex-row gap-6 mb-6">
                            <div className="flex-1">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="w-full bg-transparent border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e)=>{setname(e.target.value)}}
                                    required
                                />
                            </div>

                            <div className="flex-1">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="phone"
                                >
                                    Phone
                                </label>
                                <div className="flex items-center">
                                    <PhoneInput
                                        country={'us'}
                                        value={countryCode}
                                        onChange={(value) => setCountryCode(value)}
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        containerStyle={{ width: '70px', marginRight: '0.5rem' }}
                                        inputStyle={{ 
                                            width: '75px', 
                                            background: 'transparent', 
                                            paddingLeft:'40px',
                                            height:'28px',
                                            borderRadius:'0px',
                                            border: 'none', 
                                            borderBottom: '2px solid #D1D5DB' // Tailwind's gray-300
                                        }}
                                        buttonStyle={{ border: 'none', background: 'transparent' }}
                                    />
                                    <input
                                        className="w-full bg-transparent border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                        type="number"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-6 mb-6">
                            <div className="flex-1">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="w-full bg-transparent border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e)=>{setemail(e.target.value)}}
                                    required
                                />
                            </div>

                            <div className="flex-1">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="country"
                                >
                                    Country
                                </label>
                                <input
                                    className="w-full bg-transparent border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                    type="text"
                                    id="country"
                                    placeholder="Enter your country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className="w-full bg-transparent border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                id="message"
                                placeholder="Enter your message"
                                rows="4"
                                value={description}
                                onChange={(e)=>{setdescription(e.target.value)}}
                                required
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <button
                                className="w-full bg-button bg-button-on-hover font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={()=>{contactusForm()}}
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
