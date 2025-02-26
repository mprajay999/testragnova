[TextBlock(citations=None, text='```tsx\n"use client";\n\nimport { useEffect, useState, useRef } from "react";\nimport { motion } from "framer-motion";\nimport { MapPin, Phone, Mail, Clock } from "lucide-react";\nimport { Lora } from "next/font/google";\nimport { Raleway } from "next/font/google";\nimport Image from "next/image";\n\nconst lora = Lora({ subsets: ["latin"], weight: ["700"] });\nconst raleway = Raleway({ subsets: ["latin"], weight: ["400", "500"] });\n\nexport default function ContactPage() {\n  const [formData, setFormData] = useState({\n    name: "",\n    email: "",\n    phone: "",\n    subject: "",\n    message: "",\n  });\n  const [isSubmitting, setIsSubmitting] = useState(false);\n  const [submitSuccess, setSubmitSuccess] = useState(false);\n  const [submitError, setSubmitError] = useState("");\n  const mapRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    // This would be replaced with actual map initialization code\n    // Example: Google Maps, Mapbox, etc.\n    const initMap = () => {\n      if (mapRef.current) {\n        // Initialize map\n        console.log("Map initialized");\n      }\n    };\n\n    initMap();\n  }, []);\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {\n    const { name, value } = e.target;\n    setFormData((prev) => ({ ...prev, [name]: value }));\n  };\n\n  const handleSubmit = async (e: React.FormEvent) => {\n    e.preventDefault();\n    setIsSubmitting(true);\n    setSubmitError("");\n\n    try {\n      // This would be replaced with actual form submission logic\n      // Simulating API call\n      await new Promise((resolve) => setTimeout(resolve, 1500));\n      setSubmitSuccess(true);\n      setFormData({\n        name: "",\n        email: "",\n        phone: "",\n        subject: "",\n        message: "",\n      });\n    } catch (error) {\n      setSubmitError("There was an error submitting your message. Please try again.");\n    } finally {\n      setIsSubmitting(false);\n    }\n  };\n\n  const fadeIn = {\n    hidden: { opacity: 0, y: 20 },\n    visible: {\n      opacity: 1,\n      y: 0,\n      transition: { duration: 0.6 }\n    }\n  };\n\n  return (\n    <div className={`min-h-screen bg-[#F5F5F5] ${raleway.className}`}>\n      {/* Hero Section */}\n      <div className="relative h-[40vh] w-full overflow-hidden">\n        <Image\n          src="/images/contact-hero.jpg"\n          alt="Kuxyury Mexican Dining Contact"\n          fill\n          priority\n          className="object-cover"\n        />\n        <div className="absolute inset-0 bg-[#1A1A1A] bg-opacity-50 flex items-center justify-center">\n          <motion.h1 \n            className={`text-white text-5xl md:text-6xl font-bold ${lora.className}`}\n            initial="hidden"\n            animate="visible"\n            variants={fadeIn}\n          >\n            Contact Us\n          </motion.h1>\n        </div>\n      </div>\n\n      <div className="container mx-auto px-4 py-16 max-w-7xl">\n        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">\n          {/* Left Column: Contact Information */}\n          <motion.div\n            initial="hidden"\n            animate="visible"\n            variants={fadeIn}\n            className="flex flex-col space-y-8"\n          >\n            <div>\n              <h2 className={`text-3xl font-bold text-[#1A1A1A] mb-6 ${lora.className}`}>\n                We\'d Love to Hear from You\n              </h2>\n              <p className="text-gray-700 mb-8 text-lg leading-relaxed">\n                Whether you have a question about our menu, want to make a special reservation request, or are \n                interested in hosting a private event, we\'re here to assist you in creating an unforgettable \n                dining experience.\n              </p>\n            </div>\n\n            <div className="space-y-6">\n              <div className="flex items-start space-x-4">\n                <div className="p-3 bg-[#C0A363] rounded-full text-white">\n                  <MapPin size={24} />\n                </div>\n                <div>\n                  <h3 className={`text-xl font-semibold text-[#1A1A1A] mb-1 ${lora.className}`}>Location</h3>\n                  <p className="text-gray-700">123 Luxury Lane</p>\n                  <p className="text-gray-700">Beverly Hills, CA 90210</p>\n                </div>\n              </div>\n\n              <div className="flex items-start space-x-4">\n                <div className="p-3 bg-[#C0A363] rounded-full text-white">\n                  <Phone size={24} />\n                </div>\n                <div>\n                  <h3 className={`text-xl font-semibold text-[#1A1A1A] mb-1 ${lora.className}`}>Phone</h3>\n                  <p className="text-gray-700">(310) 555-1234</p>\n                </div>\n              </div>\n\n              <div className="flex items-start space-x-4">\n                <div className="p-3 bg-[#C0A363] rounded-full text-white">\n                  <Mail size={24} />\n                </div>\n                <div>\n                  <h3 className={`text-xl font-semibold text-[#1A1A1A] mb-1 ${lora.className}`}>Email</h3>\n                  <p className="text-gray-700">reservations@kuxyury.com</p>\n                </div>\n              </div>\n\n              <div className="flex items-start space-x-4">\n                <div className="p-3 bg-[#C0A363] rounded-full text-white">\n                  <Clock size={24} />\n                </div>\n                <div>\n                  <h3 className={`text-xl font-semibold text-[#1A1A1A] mb-1 ${lora.className}`}>Hours</h3>\n                  <p className="text-gray-700">Monday - Thursday: 5:00 PM - 10:00 PM</p>\n                  <p className="text-gray-700">Friday - Saturday: 5:00 PM - 11:00 PM</p>\n                  <p className="text-gray-700">Sunday: 5:00 PM - 9:00 PM</p>\n                </div>\n              </div>\n            </div>\n\n            <div className="pt-4">\n              <h3 className={`text-2xl font-bold text-[#1A1A1A] mb-4 ${lora.className}`}>Follow Us</h3>\n              <div className="flex space-x-4">\n                <a href="https://instagram.com" className="p-3 bg-[#C0A363] hover:bg-[#E4B769] text-white rounded-full transition-colors duration-300">\n                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\n                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>\n                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>\n                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>\n                  </svg>\n                </a>\n                <a href="https://facebook.com" className="p-3 bg-[#C0A363] hover:bg-[#E4B769] text-white rounded-full transition-colors duration-300">\n                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\n                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>\n                  </svg>\n                </a>\n                <a href="https://twitter.com" className="p-3 bg-[#C0A363] hover:bg-[#E4B769] text-white rounded-full transition-colors duration-300">\n                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\n                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>\n                  </svg>\n                </a>\n              </div>\n            </div>\n          </motion.div>\n\n          {/* Right Column: Contact Form and Map */}\n          <motion.div\n            initial="hidden"\n            animate="visible"\n            variants={fadeIn}\n            className="flex flex-col space-y-8"\n          >\n            <div className="bg-white shadow-lg p-8 rounded-lg">\n              <h3 className={`text-2xl font-bold text-[#1A1A1A] mb-6 ${lora.className}`}>Send Us a Message</h3>\n\n              {submitSuccess ? (\n                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">\n                  Thank you for your message! We\'ll get back to you shortly.\n                </div>\n              ) : (\n                <form onSubmit={handleSubmit} className="space-y-6">\n                  {submitError && (\n                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">\n                      {submitError}\n                    </div>\n                  )}\n                  \n                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\n                    <div className="relative">\n                      <input\n                        type="text"\n                        id="name"\n                        name="name"\n                        value={formData.name}\n                        onChange={handleChange}\n                        required\n                        className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#C0A363] outline-none bg-transparent transition-colors"\n                        placeholder=" "\n                      />\n                      <label\n                        htmlFor="name"\n                        className="absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#C0A363]"\n                      >\n                        Your Name\n                      </label>\n                    </div>\n\n                    <div className="relative">\n                      <input\n                        type="email"\n                        id="email"\n                        name="email"\n                        value={formData.email}\n                        onChange={handleChange}\n                        required\n                        className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#C0A363] outline-none bg-transparent transition-colors"\n                        placeholder=" "\n                      />\n                      <label\n                        htmlFor="email"\n                        className="absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#C0A363]"\n                      >\n                        Email Address\n                      </label>\n                    </div>\n                  </div>\n\n                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\n                    <div className="relative">\n                      <input\n                        type="tel"\n                        id="phone"\n                        name="phone"\n                        value={formData.phone}\n                        onChange={handleChange}\n                        className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#C0A363] outline-none bg-transparent transition-colors"\n                        placeholder=" "\n                      />\n                      <label\n                        htmlFor="phone"\n                        className="absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#C0A363]"\n                      >\n                        Phone Number (optional)\n                      </label>\n                    </div>\n\n                    <div className="relative">\n                      <select\n                        id="subject"\n                        name="subject"\n                        value={formData.subject}\n                        onChange={handleChange}\n                        required\n                        className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#C0A363] outline-none bg-transparent transition-colors appearance-none"\n                      >\n                        <option value="" disabled>Select a subject</option>\n                        <option value="Reservation Question">Reservation Question</option>\n                        <option value="Private Event">Private Event</option>\n                        <option value="General Inquiry">General Inquiry</option>\n                        <option value="Feedback">Feedback</option>\n                      </select>\n                      <label\n                        htmlFor="subject"\n                        className="absolute left-4 -top-2.5 text-sm text-gray-500"\n                      >\n                        Subject\n                      </label>\n                      <div className="absolute right-4 top-3 pointer-events-none">\n                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>\n                        </svg>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div className="relative">\n                    <textarea\n                      id="message"\n                      name="message"\n                      value={formData.message}\n                      onChange={handleChange}\n                      required\n                      rows={5}\n                      className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#C0A363] outline-none bg-transparent transition-colors resize-none"\n                      placeholder=" "\n                    ></textarea>\n                    <label\n                      htmlFor="message"\n                      className="absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#C0A363]"\n                    >\n                      Your Message\n                    </label>\n                  </div>\n\n                  <button\n                    type="submit"\n                    disabled={isSubmitting}\n                    className="w-full bg-[#C0A363] hover:bg-[#E4B769] text-white py-3 px-6 rounded transition-colors duration-300 font-medium text-lg flex items-center justify-center"\n                  >\n                    {isSubmitting ? (\n                      <>\n                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\n                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>\n                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n                        </svg>\n                        Sending...\n                      </>\n                    ) : (\n                      "Send Message"\n                    )}\n                  </button>\n                </form>\n              )}\n            </div>\n\n            <div className="h-80 bg-white shadow-lg rounded-lg overflow-hidden">\n              <div ref={mapRef} className="w-full h-full bg-gray-200">\n                {/* Map would be initialized here */}\n                <div className="w-full h-full flex items-center justify-center">\n                  <p className="text-gray-500">Interactive Map Loading...</p>\n                </div>\n              </div>\n            </div>\n          </motion.div>\n        </div>\n      </div>\n    </div>\n  );\n}\n```', type='text')]