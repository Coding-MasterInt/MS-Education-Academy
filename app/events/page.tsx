import Link from "next/link"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function EventsPage() {
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
                className="hover:underline font-medium px-2 py-1 text-sm lg:text-base bg-green-800 rounded"
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
        <section className="bg-green-50 py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4 lg:mb-6 text-center lg:text-left">
              School Events & News
            </h1>
            <p className="text-gray-700 max-w-3xl mb-6 lg:mb-8 text-sm lg:text-base text-center lg:text-left">
              Stay updated with the latest happenings, events, and announcements at MS School Academy.
            </p>
            <div className="mt-6 lg:mt-8">
              <Image
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1632&auto=format&fit=crop"
                alt="School events and activities"
                width={800}
                height={300}
                className="rounded-lg shadow-md w-full h-48 lg:h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl lg:text-2xl font-bold text-green-800 mb-6 lg:mb-8 text-center lg:text-left">
              Upcoming Events
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-green-100 text-green-800">Upcoming</Badge>
                    <span className="text-sm text-gray-500">January 2025</span>
                  </div>
                  <CardTitle className="text-lg lg:text-xl">Annual Sports Day</CardTitle>
                  <CardDescription>
                    Join us for our exciting annual sports day featuring various competitions and activities for all
                    students.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>January 15, 2025</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>School Playground</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-blue-100 text-blue-800">Academic</Badge>
                    <span className="text-sm text-gray-500">February 2025</span>
                  </div>
                  <CardTitle className="text-lg lg:text-xl">Parent-Teacher Meeting</CardTitle>
                  <CardDescription>
                    Important meeting to discuss student progress and academic performance with parents.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>February 5, 2025</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>10:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>School Auditorium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-purple-100 text-purple-800">Cultural</Badge>
                    <span className="text-sm text-gray-500">March 2025</span>
                  </div>
                  <CardTitle className="text-lg lg:text-xl">Cultural Festival</CardTitle>
                  <CardDescription>
                    Celebrate our rich cultural heritage with performances, exhibitions, and traditional activities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>March 10, 2025</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>11:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>School Campus</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-orange-100 text-orange-800">Admission</Badge>
                    <span className="text-sm text-gray-500">April 2025</span>
                  </div>
                  <CardTitle className="text-lg">New Admission 2025-26</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-3">
                    Admissions are now open for the new academic year 2025-26. Visit our office for application forms.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>April 1 - April 30, 2025</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>8:00 AM - 1:30 PM</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>School Office</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-8 lg:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-xl lg:text-2xl font-bold text-green-800 mb-6 lg:mb-8 text-center lg:text-left">
              Recent News & Updates
            </h2>

            <div className="space-y-6 lg:space-y-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <Image
                      src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1632&auto=format&fit=crop"
                      alt="School achievement"
                      width={200}
                      height={150}
                      className="rounded-lg w-full lg:w-48 h-32 lg:h-36 object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-green-100 text-green-800">Achievement</Badge>
                        <span className="text-sm text-gray-500">December 15, 2024</span>
                      </div>
                      <h3 className="font-bold text-base lg:text-lg mb-2">
                        MS School Academy Receives Recognition for Excellence
                      </h3>
                      <p className="text-gray-600 text-sm lg:text-base mb-3">
                        We are proud to announce that MS School Academy has been recognized by the local education
                        department for our commitment to quality education and community service in Jamrehi Chautarhai
                        Pirona.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Principal Kuldeep Yadav</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <Image
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1632&auto=format&fit=crop"
                      alt="New facilities"
                      width={200}
                      height={150}
                      className="rounded-lg w-full lg:w-48 h-32 lg:h-36 object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-100 text-blue-800">Infrastructure</Badge>
                        <span className="text-sm text-gray-500">December 1, 2024</span>
                      </div>
                      <h3 className="font-bold text-base lg:text-lg mb-2">New Library and Computer Lab Inaugurated</h3>
                      <p className="text-gray-600 text-sm lg:text-base mb-3">
                        We have successfully inaugurated our new library and computer lab, providing students with
                        modern learning resources and technology access to enhance their educational experience.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        <span>MS School Academy</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <Image
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1632&auto=format&fit=crop"
                      alt="Student activities"
                      width={200}
                      height={150}
                      className="rounded-lg w-full lg:w-48 h-32 lg:h-36 object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-purple-100 text-purple-800">Activities</Badge>
                        <span className="text-sm text-gray-500">November 20, 2024</span>
                      </div>
                      <h3 className="font-bold text-base lg:text-lg mb-2">
                        Students Excel in Inter-School Competition
                      </h3>
                      <p className="text-gray-600 text-sm lg:text-base mb-3">
                        Our students participated in the regional inter-school competition and brought home several
                        awards in academics, sports, and cultural activities, making the entire school community proud.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Student Affairs</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Notices */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl lg:text-2xl font-bold text-green-800 mb-6 lg:mb-8 text-center lg:text-left">
              Important Notices
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base lg:text-lg text-green-800">School Timings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Regular school hours: Monday to Saturday, 8:00 AM to 1:30 PM. Sunday is a holiday.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base lg:text-lg text-blue-800">Uniform Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm lg:text-base">
                    All students are required to wear the prescribed school uniform. Uniform details are available at
                    the school office.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base lg:text-lg text-orange-800">Fee Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Monthly fees should be paid by the 10th of each month. Late payment will incur additional charges.
                    Contact the office for payment details.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base lg:text-lg text-purple-800">Transportation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm lg:text-base">
                    School bus service is available for nearby villages. Contact the office for routes, timings, and
                    registration.
                  </p>
                </CardContent>
              </Card>
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
                  <span className="text-white font-semibold text-sm lg:text-base">Events</span>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-green-100 hover:text-white text-sm lg:text-base transition-colors"
                  >
                    Contact Us
                  </Link>
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
