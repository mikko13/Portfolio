import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
  };

  return (
    <div className="relative">
      {/* Memoji Image */}
      <div className="absolute top-[150px] left-[-95px] transform rotate-[43deg] hidden md:block">
        <img 
          src={`${process.env.PUBLIC_URL}/images/memoji.png`} 
          alt="Memoji" 
          className="w-[350px] h-auto" 
          draggable="false" 
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      <h2 className="text-xl text-center mt-6 text-[#1c3c4d]">
        get in touch
      </h2>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1c3c4d]">
        Contact Me Now!
      </h2>
      <div className="p-4 md:p-6 flex justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row w-full text-white gap-x-20">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col md:w-1/2 mt-4 md:mt-0 md:pr-6 gap-4 items-end">
            {/* Email Card */}
            <div className="p-4 w-full md:w-[375px] bg-gradient-to-r from-[#284f62] to-[#1c3c4d] rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <p className="flex items-center gap-3 text-xs md:text-sm">
                <FaEnvelope size={16} />
                <a href="mailto:mikko.samaniego123@gmail.com" className="text-coral hover:underline">mikko.samaniego123@gmail.com</a>
              </p>
            </div>

            {/* Phone Card */}
            <div className="p-4 w-full md:w-[375px] bg-gradient-to-r from-[#284f62] to-[#1c3c4d] rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <p className="flex items-center gap-3 text-xs md:text-sm">
                <FaPhone size={16} />
                +63 906 364 2928
              </p>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 w-full md:w-[375px] bg-gradient-to-r from-[#284f62] to-[#1c3c4d] rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <p className="flex items-center gap-3 text-xs md:text-sm">
                <FaLinkedin size={16} />
                <a href="https://www.linkedin.com/in/mikko-s-0253902b7/" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">Mikko Samaniego</a>
              </p>
            </div>

            {/* Facebook Card */}
            <div className="p-4 w-full md:w-[375px] bg-gradient-to-r from-[#284f62] to-[#1c3c4d] rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <p className="flex items-center gap-3 text-xs md:text-sm">
                <FaFacebook size={16} />
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">Facebook</a>
              </p>
            </div>

            {/* Instagram Card */}
            <div className="p-4 w-full md:w-[375px] bg-gradient-to-r from-[#284f62] to-[#1c3c4d] rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <p className="flex items-center gap-3 text-xs md:text-sm">
                <FaInstagram size={16} />
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">Instagram</a>
              </p>
            </div>

            {/* GitHub Card */}
            <div className="p-4 w-full md:w-[375px] bg-gradient-to-r from-[#284f62] to-[#1c3c4d] rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <p className="flex items-center gap-3 text-xs md:text-sm">
                <FaGithub size={16} />
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">GitHub</a>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-[80%] rounded-xl shadow-xl p-6 md:p-8 bg-gradient-to-r from-[#284f62] to-[#1c3c4d]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-1 text-xs md:text-sm">
                Name:
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="p-2 rounded-lg bg-[#142b36] text-white placeholder-[#7b8d9b]" 
                  placeholder="Your Name" 
                />
              </label>
              <label className="flex flex-col gap-1 text-xs md:text-sm">
                Email:
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="p-2 rounded-lg bg-[#142b36] text-white placeholder-[#7b8d9b]" 
                  placeholder="Your Email" 
                />
              </label>
              <label className="flex flex-col gap-1 text-xs md:text-sm">
                Subject:
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  className="p-2 rounded-lg bg-[#142b36] text-white placeholder-[#7b8d9b]" 
                  placeholder="Subject" 
                />
              </label>
              <label className="flex flex-col gap-1 text-xs md:text-sm">
                Message:
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="p-2 rounded-lg bg-[#142b36] text-white placeholder-[#7b8d9b]" 
                  placeholder="Your Message"
                />
              </label>
              <button type="submit" className="p-2 mt-4 bg-[#FF6F61] text-white font-semibold rounded-md hover:bg-opacity-90 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
