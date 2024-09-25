import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./style.css";


const ContactUs = () => {
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
    <section className="mt-10 flex flex-col lg:flex-row">
      <div className="w-full lg:w-[60%] p-6 shadow-xl">
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
                value={name}
                onChange={(e)=>{setname(e.target.value)}}
                placeholder="Enter your name"
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
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
                placeholder="Enter your email"
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

      <div className="w-full lg:w-[40%] lg:pl-6 mt-10 lg:mt-0">
        <h2 className="text-[2.75rem] leading-[3rem] font-bold text-gray-800 mb-4">
          Send us a message
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">
            Our social media :
          </label>
          <div className="flex space-x-4 mt-5">
            <a href="https://www.facebook.com/your-profile-name" target="_blank" rel="noopener noreferrer" className="text-blue-600 mr-2">
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="text-pink-600 mr-2">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.youtube.com/channel/your-channel-id" target="_blank" rel="noopener noreferrer" className="text-red-600" mr-2>
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
