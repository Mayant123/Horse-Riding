import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CountryCode = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="flex-1">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="phone"
      >
        Phone
      </label>
      <PhoneInput
        country={'us'} // Default country
        value={phone}
        onChange={setPhone}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
          className: 'w-full bg-transparent border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500',
        }}
        containerStyle={{ width: '100%' }} // Adjust the container width
        inputStyle={{ width: '100%', background: 'transparent', border: 'none' }} // Style adjustments
        buttonStyle={{ border: 'none', background: 'transparent' }} // Style adjustments for the dropdown
      />
    </div>
  );
};

export default CountryCode;
