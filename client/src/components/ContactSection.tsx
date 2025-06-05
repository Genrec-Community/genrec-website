import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    error: false,
    success: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: false, success: false });

    try {
      await emailjs.send(
        'service_4ownjyp',
        'template_f5gqfy7',
        {
          from_name: formData.name,
          reply_to: formData.email,
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'acH_iZFNOJ0cWbrZo'
      );

      setStatus({ loading: false, error: false, success: true });
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({ loading: false, error: true, success: false });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Connect With Us
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            Ready to transform your vision into reality? Get in touch with our team.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-white/30"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-white/30"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    rows={6}
                    placeholder="Project Details"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-white/30 resize-none"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={status.loading}
                    className="w-full px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.loading ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
                {status.success && (
                  <p className="text-green-500 mt-4">Message sent successfully!</p>
                )}
                {status.error && (
                  <p className="text-red-500 mt-4">Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="space-y-8"
            >
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-gray-300">ai.genrec@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-300">+91 96555 32378</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Karur , Tamil Nadu</span>

                  </div>
<div className="text-left mt-4">
                  <p className="text-gray-400">We will contact you as soon as Possible</p>
                </div>
                </div>
              </div>
              
              
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
