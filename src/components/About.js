import React from 'react'

const About = () => {
  return (
    <section className="p-6 lg:p-12">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">ABOUT US</h1>
      <p className="text-lg text-gray-700 mb-6">
        THK INTERNATIONAL TRADING is a leading manufacturer and exporter of high-quality equestrian products, dedicated to providing innovative solutions for horse riders, trainers, and enthusiasts worldwide. Our mission is to enhance the equestrian experience through exceptional products, unparalleled customer service, and a passion for excellence.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Saddles and saddle accessories</li>
        <li>Bridles and reins</li>
        <li>Horse blankets and grooming supplies</li>
        <li>Riding apparel and footwear</li>
        <li>Stable and farm equipment</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manufacturing</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>State-of-the-art facilities with advanced machinery and technology</li>
        <li>Skilled craftsmen and quality control experts ensure exceptional product quality</li>
        <li>Materials sourced from trusted suppliers to guarantee durability and performance</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Export</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Global reach with exports to EUROPE, U.K, USA, ARABIAN GULF</li>
        <li>Strong logistics and shipping partnerships for timely delivery</li>
        <li>Compliance with international standards and regulations</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Values</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Quality and innovation</li>
        <li>Customer satisfaction and loyalty</li>
        <li>Integrity and transparency</li>
        <li>Passion for the equestrian community</li>
      </ul>
    </div>
  </section>
  )
}

export default About