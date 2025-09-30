"use client"

import type React from "react"

import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Download, User, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [admissionData, setAdmissionData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    gender: "",
    currentClass: "",
    previousSchool: "",
    address: "",
    parentPhone: "",
    parentEmail: "",
    additionalInfo: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showAdmissionForm, setShowAdmissionForm] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Show admission form when Admission Inquiry is selected
    if (name === "subject" && value === "Admission Inquiry") {
      setShowAdmissionForm(true)
    } else if (name === "subject" && value !== "Admission Inquiry") {
      setShowAdmissionForm(false)
    }
  }

  const handleAdmissionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setAdmissionData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let emailSubject = `${formData.subject} - MS School Academy Inquiry`
    let emailBody = `Dear Principal Kuldeep Yadav,

I am writing to inquire about MS School Academy.

CONTACT DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Subject: ${formData.subject}

MESSAGE:
${formData.message}`

    // Add admission details if it's an admission inquiry
    if (showAdmissionForm && formData.subject === "Admission Inquiry") {
      emailSubject = `Admission Application - MS School Academy`
      emailBody = `Dear Principal Kuldeep Yadav,

I am submitting an admission application for MS School Academy.

PARENT/GUARDIAN DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

STUDENT DETAILS:
Student Name: ${admissionData.studentName}
Father's Name: ${admissionData.fatherName}
Mother's Name: ${admissionData.motherName}
Date of Birth: ${admissionData.dateOfBirth}
Gender: ${admissionData.gender}
Class Seeking Admission: ${admissionData.currentClass}
Previous School: ${admissionData.previousSchool || "Not applicable"}
Address: ${admissionData.address}
Parent Phone: ${admissionData.parentPhone}
Parent Email: ${admissionData.parentEmail}

ADDITIONAL INFORMATION:
${admissionData.additionalInfo || "None"}

MESSAGE:
${formData.message}

Thank you for considering our application. We look forward to hearing from you.

Best regards,
${formData.name}`
    }

    emailBody += `

Best regards,
${formData.name}`

    // Create mailto link
    const mailtoLink = `mailto:Kuldeepyadav900322@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink

    // Show success message
    setIsSubmitted(true)

    // Reset forms
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setAdmissionData({
      studentName: "",
      fatherName: "",
      motherName: "",
      dateOfBirth: "",
      gender: "",
      currentClass: "",
      previousSchool: "",
      address: "",
      parentPhone: "",
      parentEmail: "",
      additionalInfo: "",
    })
    setShowAdmissionForm(false)

    // Reset success message after 8 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 8000)
  }

  const handleWhatsAppSubmit = () => {
    let whatsappMessage = `Hello MS School Academy,

I would like to inquire about admission/information.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Subject: ${formData.subject}

Message: ${formData.message}`

    // Add admission details if it's an admission inquiry
    if (showAdmissionForm && formData.subject === "Admission Inquiry") {
      whatsappMessage = `Hello MS School Academy,

I am submitting an admission application.

PARENT/GUARDIAN DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

STUDENT DETAILS:
Student Name: ${admissionData.studentName}
Father's Name: ${admissionData.fatherName}
Mother's Name: ${admissionData.motherName}
Date of Birth: ${admissionData.dateOfBirth}
Gender: ${admissionData.gender}
Class: ${admissionData.currentClass}
Previous School: ${admissionData.previousSchool || "Not applicable"}
Address: ${admissionData.address}

Additional Info: ${admissionData.additionalInfo || "None"}

Message: ${formData.message}`
    }

    whatsappMessage += `

Thank you!`

    const whatsappUrl = `https://wa.me/918737900322?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")

    // Show success message
    setIsSubmitted(true)

    // Reset forms
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setAdmissionData({
      studentName: "",
      fatherName: "",
      motherName: "",
      dateOfBirth: "",
      gender: "",
      currentClass: "",
      previousSchool: "",
      address: "",
      parentPhone: "",
      parentEmail: "",
      additionalInfo: "",
    })
    setShowAdmissionForm(false)

    // Reset success message after 8 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 8000)
  }

  const downloadAdmissionForm = () => {
    const formContent = `
MS SCHOOL ACADEMY - ADMISSION FORM
Academic Year: 2025-26

STUDENT INFORMATION:
Student Name: _________________________________
Father's Name: ________________________________
Mother's Name: ________________________________
Date of Birth: ________________________________
Gender: ______________________________________
Class Seeking Admission: ______________________
Previous School (if any): _____________________

PARENT/GUARDIAN INFORMATION:
Parent/Guardian Name: __________________________
Relationship: _________________________________
Phone Number: _________________________________
Email Address: ________________________________
Occupation: ___________________________________

ADDRESS:
Permanent Address: ____________________________
_____________________________________________
Pin Code: ____________________________________

DOCUMENTS REQUIRED:
□ Birth Certificate
□ Previous School Records (if applicable)
□ Passport Size Photographs (4 copies)
□ Address Proof
□ Parent ID Proof

DECLARATION:
I hereby declare that the information provided above is true and correct to the best of my knowledge.

Parent/Guardian Signature: _____________________
Date: _______________________________________

---
Submit this form to:
MS School Academy
Main Road, Jamrehi Chautarhai Pirona
Uttar Pradesh - 285201
Phone: +91 8737900322
Email: Kuldeepyadav900322@gmail.com

Office Hours: Monday to Saturday, 8:00 AM - 1:30 PM
`

    const blob = new Blob([formContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "MS_School_Academy_Admission_Form_2025-26.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-4 lg:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <Image
                src="/images/school-logo.jpg"
                alt="MS School Academy Logo"
                width={40}
                height={40}
                className="mr-2 lg:mr-3 rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">MS School Academy</h1>
            </div>
            <nav className="flex flex-wrap justify-center gap-2 lg:gap-4">
              <Link
                href="/"
                className="hover:underline font-medium px-2 py-1 text-sm lg:text-base hover:bg-green-800 rounded transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:underline font-medium px-2 py-1 text-sm lg:text-base hover:bg-green-800 rounded transition-colors"
              >
                About
              </Link>
              <Link
                href="/events"
                className="hover:underline font-medium px-2 py-1 text-sm lg:text-base hover:bg-green-800 rounded transition-colors"
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="hover:underline font-medium px-2 py-1 text-sm lg:text-base bg-green-800 rounded"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-green-50 py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4 lg:mb-6 text-center lg:text-left">
              Contact Us
            </h1>
            <p className="text-gray-700 max-w-3xl mb-6 lg:mb-8 text-sm lg:text-base text-center lg:text-left">
              We'd love to hear from you. Please feel free to get in touch with us using the contact information below
              or by filling out the contact form. For admission inquiries, please provide detailed information about the
              student.
            </p>
            <div className="mt-6 lg:mt-8">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486&auto=format&fit=crop"
                alt="MS School Academy Entrance"
                width={800}
                height={300}
                className="rounded-lg shadow-md w-full h-48 lg:h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-green-800 mb-6 text-center lg:text-left">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-sm lg:text-base">Address</h3>
                      <p className="text-gray-600 text-sm lg:text-base">
                        MS School Academy
                        <br />
                        Main Road, Jamrehi Chautarhai Pirona
                        <br />
                        Uttar Pradesh - 285201
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-sm lg:text-base">Phone</h3>
                      <p className="text-gray-600 text-sm lg:text-base">
                        Office: +91 8737900322
                        <br />
                        Principal (Kuldeep Yadav): +91 8737900322
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-sm lg:text-base">Email</h3>
                      <p className="text-gray-600 text-sm lg:text-base break-all">
                        Principal: Kuldeepyadav900322@gmail.com
                        <br />
                        Office: info@msschoolacademy.edu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-sm lg:text-base">Office Hours</h3>
                      <p className="text-gray-600 text-sm lg:text-base">
                        Monday to Saturday: 8:00 AM - 1:30 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-3 text-sm lg:text-base">Quick Contact</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+918737900322"
                      className="flex items-center justify-center px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors text-sm lg:text-base"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/918737900322?text=Hello%20MS%20School%20Academy,%20I%20would%20like%20to%20inquire%20about%20admission."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm lg:text-base"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="mailto:Kuldeepyadav900322@gmail.com?subject=Inquiry%20about%20MS%20School%20Academy"
                      className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </div>
                </div>

                {/* Admission Form Download */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3 text-sm lg:text-base flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Admission Form 2025-26
                  </h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Download our admission form and submit it to the school office during office hours.
                  </p>
                  <Button
                    onClick={downloadAdmissionForm}
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Admission Form
                  </Button>
                </div>
              </div>

              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-green-800 mb-6 text-center lg:text-left">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    <p className="font-bold text-sm lg:text-base">✅ Message Prepared!</p>
                    <p className="text-sm lg:text-base">
                      Your email client should have opened with your message ready to send. If it didn't open, you can
                      also contact us directly.
                    </p>
                    <p className="text-xs lg:text-sm mt-2">
                      For admission inquiries 2025-26, call us at{" "}
                      <a href="tel:+918737900322" className="font-bold underline">
                        +91 8737900322
                      </a>
                    </p>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="Admission Inquiry">Admission Inquiry</option>
                      <option value="General Information">General Information</option>
                      <option value="Academic Query">Academic Query</option>
                      <option value="Fee Information">Fee Information</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Extracurricular Activities">Extracurricular Activities</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Admission Form Fields */}
                  {showAdmissionForm && (
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-green-800 flex items-center">
                          <User className="h-5 w-5 mr-2" />
                          Student Admission Details
                        </CardTitle>
                        <CardDescription>Please fill in the student information for admission.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                              Student Name *
                            </label>
                            <Input
                              id="studentName"
                              name="studentName"
                              value={admissionData.studentName}
                              onChange={handleAdmissionChange}
                              required={showAdmissionForm}
                              className="w-full"
                              placeholder="Student's full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                              Date of Birth *
                            </label>
                            <Input
                              id="dateOfBirth"
                              name="dateOfBirth"
                              type="date"
                              value={admissionData.dateOfBirth}
                              onChange={handleAdmissionChange}
                              required={showAdmissionForm}
                              className="w-full"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700 mb-1">
                              Father's Name *
                            </label>
                            <Input
                              id="fatherName"
                              name="fatherName"
                              value={admissionData.fatherName}
                              onChange={handleAdmissionChange}
                              required={showAdmissionForm}
                              className="w-full"
                              placeholder="Father's full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="motherName" className="block text-sm font-medium text-gray-700 mb-1">
                              Mother's Name *
                            </label>
                            <Input
                              id="motherName"
                              name="motherName"
                              value={admissionData.motherName}
                              onChange={handleAdmissionChange}
                              required={showAdmissionForm}
                              className="w-full"
                              placeholder="Mother's full name"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                              Gender *
                            </label>
                            <select
                              id="gender"
                              name="gender"
                              value={admissionData.gender}
                              onChange={handleAdmissionChange}
                              required={showAdmissionForm}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                            >
                              <option value="">Select gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="currentClass" className="block text-sm font-medium text-gray-700 mb-1">
                              Class Seeking Admission *
                            </label>
                            <select
                              id="currentClass"
                              name="currentClass"
                              value={admissionData.currentClass}
                              onChange={handleAdmissionChange}
                              required={showAdmissionForm}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                            >
                              <option value="">Select class</option>
                              <option value="Nursery">Nursery</option>
                              <option value="LKG">LKG</option>
                              <option value="UKG">UKG</option>
                              <option value="Class 1">Class 1</option>
                              <option value="Class 2">Class 2</option>
                              <option value="Class 3">Class 3</option>
                              <option value="Class 4">Class 4</option>
                              <option value="Class 5">Class 5</option>
                              <option value="Class 6">Class 6</option>
                              <option value="Class 7">Class 7</option>
                              <option value="Class 8">Class 8</option>
                              <option value="Class 9">Class 9</option>
                              <option value="Class 10">Class 10</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700 mb-1">
                            Previous School (if any)
                          </label>
                          <Input
                            id="previousSchool"
                            name="previousSchool"
                            value={admissionData.previousSchool}
                            onChange={handleAdmissionChange}
                            className="w-full"
                            placeholder="Name of previous school"
                          />
                        </div>

                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Address *
                          </label>
                          <Textarea
                            id="address"
                            name="address"
                            value={admissionData.address}
                            onChange={handleAdmissionChange}
                            required={showAdmissionForm}
                            className="w-full min-h-[80px]"
                            placeholder="Complete address with pin code"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-1">
                              Parent Phone *
                            </label>
                            <Input
                              id="parentPhone"
                              name="parentPhone"
                              type="tel"
                              value={admissionData.parentPhone}
                              onChange={handleAdmissionChange}
                              required={showAdmissionForm}
                              className="w-full"
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>
                          <div>
                            <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-1">
                              Parent Email
                            </label>
                            <Input
                              id="parentEmail"
                              name="parentEmail"
                              type="email"
                              value={admissionData.parentEmail}
                              onChange={handleAdmissionChange}
                              className="w-full"
                              placeholder="parent@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Information
                          </label>
                          <Textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={admissionData.additionalInfo}
                            onChange={handleAdmissionChange}
                            className="w-full min-h-[80px]"
                            placeholder="Any additional information about the student (medical conditions, special needs, etc.)"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[120px] lg:min-h-[150px]"
                      placeholder={
                        showAdmissionForm
                          ? "Any additional message or questions about the admission process..."
                          : "Please provide details about your inquiry. For admission, include student's age, current class, and any specific requirements."
                      }
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" className="bg-green-700 hover:bg-green-800 flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      {showAdmissionForm ? "Submit Admission Application" : "Send via Email"}
                    </Button>

                    <Button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="bg-green-600 hover:bg-green-700 flex-1"
                    >
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>

                <div className="mt-4 text-xs lg:text-sm text-gray-600">
                  <p>
                    * Required fields. Choose your preferred method to send your message. Email will open your default
                    email client, WhatsApp will open in a new tab.
                  </p>
                  {showAdmissionForm && (
                    <p className="mt-2 text-green-700 font-medium">
                      📋 For faster processing, you can also call us directly at{" "}
                      <a href="tel:+918737900322" className="underline font-bold">
                        +91 8737900322
                      </a>{" "}
                      for admission inquiries.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-8 lg:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-xl lg:text-2xl font-bold text-green-800 mb-6 text-center">Find Us</h2>

            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14236.123456789!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sJamrehi%20Chautarhai%2C%20Uttar%20Pradesh%20285201!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MS School Academy Location - Jamrehi Chautarhai Pirona, Uttar Pradesh 285201"
                className="w-full h-64 lg:h-96"
              ></iframe>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm lg:text-base">
                <strong>Address:</strong> MS School Academy, Main Road, Jamrehi Chautarhai Pirona, Uttar Pradesh -
                285201
              </p>
              <p className="text-gray-600 text-sm lg:text-base mt-2">
                <strong>Directions:</strong> Located on the main road of Jamrehi Chautarhai Pirona village, easily
                accessible by local transportation.
              </p>
              <div className="mt-4">
                <a
                  href="tel:+918737900322"
                  className="inline-flex items-center px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors text-sm lg:text-base mr-3"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call for Directions
                </a>
                <a
                  href="https://wa.me/918737900322?text=Hello%20MS%20School%20Academy,%20I%20need%20directions%20to%20reach%20your%20school."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm lg:text-base"
                >
                  WhatsApp for Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl lg:text-2xl font-bold text-green-800 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 lg:space-y-6">
              <div className="bg-green-50 rounded-lg p-4 lg:p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-base lg:text-lg mb-2">What are the school timings?</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  Our school operates from Monday to Saturday, 8:00 AM to 1:30 PM. Sunday is a holiday.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 lg:p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-base lg:text-lg mb-2">How can I apply for admission?</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  You can apply for admission by filling out the online form above, downloading our admission form, or
                  visiting the school office. For immediate assistance, call us at{" "}
                  <a href="tel:+918737900322" className="text-green-700 font-bold underline">
                    +91 8737900322
                  </a>
                  .
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 lg:p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-base lg:text-lg mb-2">Do you provide transportation services?</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  Yes, we provide transportation services to nearby villages. The bus routes and timings can be obtained
                  from the school office.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 lg:p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-base lg:text-lg mb-2">What extracurricular activities do you offer?</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  We offer a range of extracurricular activities including sports, music, dance, art, and various clubs.
                  These activities are scheduled after regular school hours.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 lg:p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-base lg:text-lg mb-2">What documents are required for admission?</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  Required documents include birth certificate, previous school records (if applicable), passport-size
                  photographs, and address proof. Contact our office for a complete list.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 lg:p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-base lg:text-lg mb-2">What is the fee structure?</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  Our fee structure is designed to be affordable for the local community. Please contact the school
                  office for detailed fee information and payment schedules.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6 lg:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-4 flex items-center justify-center lg:justify-start">
                <Image
                  src="/images/school-logo.jpg"
                  alt="MS School Academy Logo"
                  width={24}
                  height={24}
                  className="mr-2 rounded-full w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                />
                MS School Academy
              </h2>
              <p className="max-w-md text-green-100 text-sm lg:text-base mx-auto lg:mx-0">
                Providing quality education and nurturing young minds in our village community.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-semibold mb-3 text-sm lg:text-base">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-green-100 hover:text-white text-sm lg:text-base transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-green-100 hover:text-white text-sm lg:text-base transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-green-100 hover:text-white text-sm lg:text-base transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <span className="text-white font-semibold text-sm lg:text-base">Contact Us</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 mt-6 lg:mt-8 pt-4 text-xs lg:text-sm text-green-200 text-center">
            <p>© {new Date().getFullYear()} MS School Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
