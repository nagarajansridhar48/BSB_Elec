import axios from 'axios';
import React, { useState, useCallback } from 'react';

const Rightcard = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      alert('Please fill in all fields!');
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:5050/contactus',form).then((res)=>alert(res.data.message)).catch((err)=>alert("Try Again"));
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [form]);


  return (
    <div
      className="flex flex-col justify-center p-8 sm:p-8 md:p-10 bg-white text-gray-800 rounded-lg md:rounded-r-xl"
      data-aos="fade-up"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        GET IN TOUCH
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto md:mx-0 space-y-4">
        <div data-aos="fade-up" data-aos-delay="50">
          <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-1">Name</label>
          <input id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} className="w-full rounded-md p-2.5 sm:p-3 bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4286b9] focus:border-transparent transition"/>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-1">Email</label>
          <input id="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} className="w-full rounded-md p-2.5 sm:p-3 bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4286b9] focus:border-transparent transition"/>
        </div>

        <div data-aos="fade-up" data-aos-delay="150">
          <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-1">Message</label>
          <textarea id="message" name="message" placeholder="Your message" value={form.message} onChange={handleChange} className="w-full rounded-md p-2.5 sm:p-3 bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4286b9] focus:border-transparent transition"/>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className={`mt-4 w-full bg-gradient-to-r from-[#4286b9] to-[#f3a933] text-white font-medium py-2.5 sm:py-3 rounded-md shadow hover:opacity-90 cursor-pointer transition duration-300 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
          data-aos="fade-up"
          data-aos-delay="200"
          
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Rightcard;