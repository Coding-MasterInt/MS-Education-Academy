import Link from "next/link"
import { Calendar, Users, BookOpen, Award, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-4 lg:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <Image
                src="/images/school-logo.jpg"
                alt="MS School Academy Logo - Best School in Jamrehi Chautarhai Pirona, Uttar Pradesh"
                width={40}
                height={40}
                className="mr-2 lg:mr-3 rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                priority
              />
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">MS School Academy</h1>
            </div>
            <nav
              className="flex flex-wrap justify-center gap-2 lg:gap-4"
              role="navigation"
              aria-label="Main navigation"
            >
              <Link
                href="/"
                className="hover:underline font-medium px-2 py-1 text-sm lg:text-base bg-green-800 rounded"
                aria-current="page"
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
                className="hover:underline font-medium px-2 py-1 text-sm lg:text-base hover:bg-green-800 rounded transition-colors"
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
        <section className="bg-green-50 py-8 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800 mb-4 lg:mb-6">
                  Welcome to MS School Academy
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-700 mb-4">
                  Best School in Jamrehi Chautarhai Pirona, Uttar Pradesh
                </h2>
                <p className="text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8">
                  Premier educational institution providing quality education and nurturing young minds in Jamrehi
                  Chautarhai Pirona, Uttar Pradesh since 2024. Admissions open for 2025-26 academic year.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact">
                    <Button size="lg" className="bg-green-700 hover:bg-green-800 w-full sm:w-auto">
                      Enroll Now - Admission 2025-26
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white w-full sm:w-auto bg-transparent"
                    >
                      Learn More About Our School
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1632&auto=format&fit=crop"
                  alt="Students in modern classroom at MS School Academy Jamrehi Chautarhai Pirona"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-green-800 mb-8 text-center">
              Contact MS School Academy - Uttar Pradesh's Premier Educational Institution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center p-4 lg:p-6 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
                <Phone className="h-8 w-8 lg:h-10 lg:w-10 text-green-700 mx-auto mb-3 lg:mb-4" />
                <h3 className="font-bold text-base lg:text-lg mb-2">Contact Our School</h3>
                <p className="text-gray-600 text-sm lg:text-base">+91 8737900322</p>
                <p className="text-gray-600 text-sm lg:text-base">Principal: Kuldeep Yadav</p>
                <a
                  href="tel:+918737900322"
                  className="inline-block mt-2 text-green-700 hover:text-green-800 font-medium text-sm"
                  aria-label="Call MS School Academy"
                >
                  Call Now for Admission →
                </a>
              </div>
              <div className="text-center p-4 lg:p-6 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
                <MapPin className="h-8 w-8 lg:h-10 lg:w-10 text-green-700 mx-auto mb-3 lg:mb-4" />
                <h3 className="font-bold text-base lg:text-lg mb-2">School Location</h3>
                <p className="text-gray-600 text-sm lg:text-base">Jamrehi Chautarhai Pirona</p>
                <p className="text-gray-600 text-sm lg:text-base">Uttar Pradesh - 285201</p>
                <Link
                  href="/contact#map"
                  className="inline-block mt-2 text-green-700 hover:text-green-800 font-medium text-sm"
                  aria-label="View MS School Academy location on map"
                >
                  View School Map →
                </Link>
              </div>
              <div className="text-center p-4 lg:p-6 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
                <Clock className="h-8 w-8 lg:h-10 lg:w-10 text-green-700 mx-auto mb-3 lg:mb-4" />
                <h3 className="font-bold text-base lg:text-lg mb-2">School Timings</h3>
                <p className="text-gray-600 text-sm lg:text-base">Mon - Sat: 8:00 AM - 1:30 PM</p>
                <p className="text-gray-600 text-sm lg:text-base">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4">
                Why Choose MS School Academy - Best School in Uttar Pradesh?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
                We are committed to providing excellent education and creating a nurturing environment for our students
                to grow and succeed. Experience quality education with modern facilities in Jamrehi Chautarhai Pirona.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 lg:h-12 lg:w-12 text-green-700 mx-auto mb-2 lg:mb-4" />
                  <CardTitle className="text-base lg:text-lg">Experienced Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm lg:text-base">
                    Our dedicated teachers bring years of experience and passion for quality education in Uttar Pradesh.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-10 w-10 lg:h-12 lg:w-12 text-green-700 mx-auto mb-2 lg:mb-4" />
                  <CardTitle className="text-base lg:text-lg">Quality Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm lg:text-base">
                    Comprehensive curriculum designed to meet modern educational standards and UP board requirements.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-10 w-10 lg:h-12 lg:w-12 text-green-700 mx-auto mb-2 lg:mb-4" />
                  <CardTitle className="text-base lg:text-lg">Holistic Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm lg:text-base">
                    Focus on academic excellence along with character building and life skills development.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 lg:h-12 lg:w-12 text-green-700 mx-auto mb-2 lg:mb-4" />
                  <CardTitle className="text-base lg:text-lg">Extracurricular Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm lg:text-base">
                    Sports, arts, and cultural activities to develop well-rounded personalities and talents.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events Preview */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4">Latest School Events & Activities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
                Stay updated with our latest school events, activities, and important announcements at MS School
                Academy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      Upcoming Event
                    </span>
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </div>
                  <CardTitle className="text-lg">Annual Sports Day 2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-3">
                    Join us for exciting sports competitions and activities for all students at MS School Academy.
                  </CardDescription>
                  <p className="text-sm text-gray-600">January 15, 2025 • 9:00 AM</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Academic</span>
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </div>
                  <CardTitle className="text-lg">Parent-Teacher Meeting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-3">
                    Important meeting to discuss student progress and academic performance with parents.
                  </CardDescription>
                  <p className="text-sm text-gray-600">February 5, 2025 • 10:00 AM</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                      Admission Open
                    </span>
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </div>
                  <CardTitle className="text-lg">New Admission 2025-26</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-3">
                    Admissions are now open for the new academic year 2025-26. Visit our school office for application
                    forms.
                  </CardDescription>
                  <p className="text-sm text-gray-600">Now Open • Contact: +91 8737900322</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/events">
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white bg-transparent"
                >
                  View All School Events
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-8 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4">
                MS School Academy Facilities & Infrastructure
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
                Take a look at our modern facilities and the vibrant learning environment we provide for our students in
                Jamrehi Chautarhai Pirona.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="relative group">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1632&auto=format&fit=crop"
                  alt="Modern classroom at MS School Academy Jamrehi Chautarhai Pirona"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 lg:p-4 rounded-b-lg">
                  <h3 className="font-bold text-sm lg:text-base">Modern Classrooms</h3>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1632&auto=format&fit=crop"
                  alt="Well-stocked library at MS School Academy Uttar Pradesh"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 lg:p-4 rounded-b-lg">
                  <h3 className="font-bold text-sm lg:text-base">Well-Stocked Library</h3>
                </div>
              </div>

              <div className="relative group">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1632&auto=format&fit=crop"
                  alt="Sports facilities at MS School Academy playground"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 lg:p-4 rounded-b-lg">
                  <h3 className="font-bold text-sm lg:text-base">Sports Facilities</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 lg:py-16 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
              Ready to Join MS School Academy - Uttar Pradesh's Best Educational Institution?
            </h2>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
              Give your child the best education and a bright future. Contact us today to learn more about admissions
              for 2025-26 academic year at MS School Academy, Jamrehi Chautarhai Pirona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-green-700 hover:bg-gray-100 w-full sm:w-auto"
                >
                  Contact Us for Admission
                </Button>
              </Link>
              <a
                href="tel:+918737900322"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-white text-white hover:bg-white hover:text-green-700 transition-colors w-full sm:w-auto"
                aria-label="Call MS School Academy for admission inquiry"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +91 8737900322
              </a>
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
                  alt="MS School Academy Logo - Best School in Jamrehi Chautarhai Pirona"
                  width={24}
                  height={24}
                  className="mr-2 rounded-full w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                />
                MS School Academy
              </h2>
              <p className="max-w-md text-green-100 text-sm lg:text-base mx-auto lg:mx-0">
                Providing quality education and nurturing young minds in Jamrehi Chautarhai Pirona, Uttar Pradesh. Best
                school for holistic development.
              </p>
              <p className="max-w-md text-green-100 text-sm lg:text-base mx-auto lg:mx-0 mt-2">
                📍 Jamrehi Chautarhai Pirona, Uttar Pradesh - 285201
              </p>
              <p className="max-w-md text-green-100 text-sm lg:text-base mx-auto lg:mx-0 mt-1">
                📞 Principal Kuldeep Yadav: +91 8737900322
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-semibold mb-3 text-sm lg:text-base">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-white font-semibold text-sm lg:text-base">Home</span>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-green-100 hover:text-white text-sm lg:text-base transition-colors"
                  >
                    About Our School
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-green-100 hover:text-white text-sm lg:text-base transition-colors"
                  >
                    School Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-green-100 hover:text-white text-sm lg:text-base transition-colors"
                  >
                    Contact & Admission
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 mt-6 lg:mt-8 pt-4 text-xs lg:text-sm text-green-200 text-center">
            <p>
              © {new Date().getFullYear()} MS School Academy, Jamrehi Chautarhai Pirona, Uttar Pradesh. All rights
              reserved.
            </p>
            <p className="mt-1">Best School in Uttar Pradesh | Quality Education | Admissions Open 2025-26</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
