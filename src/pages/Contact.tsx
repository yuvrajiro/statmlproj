import { useState } from 'react';
import { Mail } from 'lucide-react';

export function Contact() {
  
    
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
});

    const [submitted, setSubmitted] = useState(false);

    // Handle Input Changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit Form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error("Submission Error:", error));
    };

    return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Request a Consultation</h2>

      {!submitted ? (
        <form 
          name="consultation-form" 
          method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Netlify Hidden Input */}
          <input type="hidden" name="form-name" value="consultation-form" />

          {/* Honeypot Field (Prevents Spam) */}
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] bg-white dark:bg-gray-700"
              placeholder="Your name"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Company
            </label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] bg-white dark:bg-gray-700"
              placeholder="Your company"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] bg-white dark:bg-gray-700"
              placeholder="your.email@company.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] bg-white dark:bg-gray-700"
              placeholder="Tell us about your specific needs..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-md transition-colors font-medium flex items-center justify-center"
          >
            Request a Consultation
            <Mail className="ml-2 h-4 w-4" />
          </button>
        </form>
      ) : (
        <p className="text-green-500 font-semibold">Thank you! Your request has been submitted. 🚀</p>
      )}
    </div>
    );
    }




