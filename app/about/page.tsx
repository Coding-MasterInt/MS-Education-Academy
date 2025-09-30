import Link from "next/link"
import { Users, BookOpen, Award, Target, Heart, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
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
                className="hover:underline font-medium px-2 py-1 text-sm lg:text-base bg-green-800 rounded"
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
        <section className="bg-green-50 py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4 lg:mb-6 text-center lg:text-left">
              About MS School Academy
            </h1>
            <p className="text-gray-700 max-w-3xl mb-6 lg:mb-8 text-sm lg:text-base text-center lg:text-left">
              Established in 2024, MS School Academy is dedicated to providing quality education and fostering the
              holistic development of students in Jamrehi Chautarhai Pirona, Uttar Pradesh.
            </p>
            <div className="mt-6 lg:mt-8">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?q=80&w=1632&auto=format&fit=crop"
                alt="MS School Academy building"
                width={800}
                height={300}
                className="rounded-lg shadow-md w-full h-48 lg:h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-8 w-8 lg:h-10 lg:w-10 text-green-700 mb-2 lg:mb-4" />
                  <CardTitle className="text-xl lg:text-2xl text-green-800">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm lg:text-base">
                    To provide quality education that nurtures young minds, develops character, and prepares students
                    for a successful future while preserving our cultural values and traditions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Star className="h-8 w-8 lg:h-10 lg:w-10 text-green-700 mb-2 lg:mb-4" />
                  <CardTitle className="text-xl lg:text-2xl text-green-800">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm lg:text-base">
                    To be a leading educational institution that empowers students with knowledge, skills, and values
                    necessary to become responsible citizens and contribute positively to society.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-8 lg:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
                These fundamental principles guide everything we do at MS School Academy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <BookOpen className="h-10 w-10 lg:h-12 lg:w-12 text-green-700 mx-auto mb-3 lg:mb-4" />
                <h3 className="font-bold text-base lg:text-lg mb-2">Excellence in Education</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  We strive for academic excellence and continuous improvement in all aspects of education.
                </p>
              </div>

              <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <Heart className="h-10 w-10 lg:h-12 lg:w-12 text-green-700 mx-auto mb-3 lg:mb-4" />
                <h3 className="font-bold text-base lg:text-lg mb-2">Care and Compassion</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  We create a nurturing environment where every student feels valued and supported.
                </p>
              </div>

              <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <Users className="h-10 w-10 lg:h-12 lg:w-12 text-green-700 mx-auto mb-3 lg:mb-4" />
                <h3 className="font-bold text-base lg:text-lg mb-2">Community Partnership</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  We work closely with families and the community to support student success.
                </p>
              </div>

              <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <Award className="h-10 w-10 lg:h-12 lg:w-12 text-green-700 mx-auto mb-3 lg:mb-4" />
                <h3 className="font-bold text-base lg:text-lg mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  We uphold the highest standards of honesty, fairness, and ethical behavior.
                </p>
              </div>

              <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <Target className="h-10 w-10 lg:h-12 lg:w-12 text-green-700 mx-auto mb-3 lg:mb-4" />
                <h3 className="font-bold text-base lg:text-lg mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  We embrace new teaching methods and technologies to enhance learning experiences.
                </p>
              </div>

              <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <Star className="h-10 w-10 lg:h-12 lg:w-12 text-green-700 mx-auto mb-3 lg:mb-4" />
                <h3 className="font-bold text-base lg:text-lg mb-2">Cultural Heritage</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  We celebrate and preserve our rich cultural traditions while preparing for the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* School History */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4">Our Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
                From our humble beginnings to becoming a trusted educational institution in our community.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 lg:space-y-8">
                <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
                  <div className="bg-green-700 text-white rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">
                    2024
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-base lg:text-lg mb-2">Foundation Year</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      MS School Academy was established in Jamrehi Chautarhai Pirona, Uttar Pradesh, with the vision of
                      providing quality education to the local community. Under the leadership of Principal Kuldeep
                      Yadav, we began our journey with a commitment to excellence.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">
                    2024
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-base lg:text-lg mb-2">Growing Strong</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      In our inaugural year, we have focused on building a strong foundation with experienced faculty,
                      modern teaching methods, and a comprehensive curriculum that meets the needs of our students and
                      community.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">
                    Future
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-base lg:text-lg mb-2">Looking Ahead</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      We continue to expand our programs, enhance our facilities, and strengthen our commitment to
                      providing the best possible education for our students. Our goal is to become a model institution
                      in the region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-8 lg:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4">Our Facilities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
                We provide modern facilities and resources to support effective learning and development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1632&auto=format&fit=crop"
                  alt="Modern classroom"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 lg:mb-4 w-full h-32 lg:h-40 object-cover"
                />
                <h3 className="font-bold text-base lg:text-lg mb-2">Modern Classrooms</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  Well-equipped classrooms with modern teaching aids and comfortable seating arrangements.
                </p>
              </div>

              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1632&auto=format&fit=crop"
                  alt="Library"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 lg:mb-4 w-full h-32 lg:h-40 object-cover"
                />
                <h3 className="font-bold text-base lg:text-lg mb-2">Library</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  A well-stocked library with books, reference materials, and a quiet study environment.
                </p>
              </div>

              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1632&auto=format&fit=crop"
                  alt="Sports facilities"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 lg:mb-4 w-full h-32 lg:h-40 object-cover"
                />
                <h3 className="font-bold text-base lg:text-lg mb-2">Sports Ground</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  Spacious playground for various sports activities and physical education classes.
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
                  <span className="text-white font-semibold text-sm lg:text-base">About Us</span>
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
