import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MS School Academy Jamrehi Chautarhai Pirona | Best School in Uttar Pradesh | Quality Education",
  description:
    "MS School Academy - Premier educational institution in Jamrehi Chautarhai Pirona, Uttar Pradesh. Offering quality education, experienced faculty, modern facilities. Admissions open for 2025-26. Contact Principal Kuldeep Yadav at +91 8737900322.",
  keywords: [
    // Primary Local Keywords
    "MS School Academy",
    "school in Jamrehi Chautarhai Pirona",
    "best school Uttar Pradesh",
    "education Jalaun district",
    "school admission Uttar Pradesh",
    "quality education Jamrehi",

    // Location-based Keywords
    "Jamrehi Chautarhai Pirona school",
    "Uttar Pradesh school admission",
    "Jalaun district education",
    "UP school 285201",
    "village school Uttar Pradesh",
    "rural education India",

    // Service Keywords
    "school admission 2024-25",
    "primary education Uttar Pradesh",
    "secondary education UP",
    "CBSE school Jalaun",
    "English medium school",
    "Hindi medium school",

    // Academic Keywords
    "quality education India",
    "experienced teachers",
    "modern teaching methods",
    "holistic education",
    "character building",
    "extracurricular activities",

    // Local Area Keywords
    "school near Orai",
    "education Bundelkhand",
    "school Kalpi road",
    "Yamuna belt education",
    "UP government school",

    // Principal & Contact
    "Principal Kuldeep Yadav",
    "school contact 8737900322",
    "Kuldeepyadav900322@gmail.com",

    // Facilities Keywords
    "school library",
    "computer lab",
    "sports facilities",
    "school transport",
    "affordable education",

    // Competition Keywords
    "best school Jalaun",
    "top school Uttar Pradesh",
    "school ranking UP",
    "education excellence",

    // Long-tail Keywords
    "school admission form 2024",
    "school fees structure UP",
    "school timings 8 AM to 1:30 PM",
    "school uniform policy",
    "parent teacher meeting",

    // Regional Keywords
    "Bundelkhand education",
    "Yamuna river school",
    "UP rural school",
    "village development education",
  ].join(", "),
  authors: [{ name: "MS School Academy", url: "https://msschoolacademy.edu" }],
  creator: "MS School Academy Jamrehi Chautarhai Pirona",
  publisher: "MS School Academy",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  // Open Graph for Social Media
  openGraph: {
    title: "MS School Academy - Best School in Jamrehi Chautarhai Pirona, Uttar Pradesh",
    description:
      "Premier educational institution offering quality education in Jamrehi Chautarhai Pirona, UP. Modern facilities, experienced faculty, holistic development. Admissions open 2025-26.",
    url: "https://msschoolacademy.edu",
    siteName: "MS School Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/school-logo.jpg",
        width: 1200,
        height: 630,
        alt: "MS School Academy Logo - Jamrehi Chautarhai Pirona",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MS School Academy - Quality Education in Uttar Pradesh",
    description:
      "Best school in Jamrehi Chautarhai Pirona, UP. Quality education, modern facilities, experienced faculty. Admissions 2025-26 open!",
    images: ["/images/school-logo.jpg"],
    creator: "@MSSchoolAcademy",
  },

  // Additional SEO
  alternates: {
    canonical: "https://msschoolacademy.edu",
  },

  // Geo Location
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Jamrehi Chautarhai Pirona",
    "geo.position": "26.8467;80.9462",
    ICBM: "26.8467, 80.9462",
    "DC.title": "MS School Academy - Best School in Jamrehi Chautarhai Pirona",
    rating: "5",
    distribution: "global",
    "revisit-after": "7 days",
    language: "English, Hindi",
    coverage: "Worldwide",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "MS School Academy",
              alternateName: "M.S. Education Academy",
              description:
                "Premier educational institution in Jamrehi Chautarhai Pirona, Uttar Pradesh offering quality education with modern facilities and experienced faculty.",
              url: "https://msschoolacademy.edu",
              logo: "https://msschoolacademy.edu/images/school-logo.jpg",
              image: "https://msschoolacademy.edu/images/school-logo.jpg",
              telephone: "+91-8737900322",
              email: "Kuldeepyadav900322@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Road, Jamrehi Chautarhai Pirona",
                addressLocality: "Jamrehi Chautarhai Pirona",
                addressRegion: "Uttar Pradesh",
                postalCode: "285201",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.8467,
                longitude: 80.9462,
              },
              openingHours: "Mo-Sa 08:00-13:30",
              founder: {
                "@type": "Person",
                name: "Kuldeep Yadav",
                jobTitle: "Principal",
              },
              employee: {
                "@type": "Person",
                name: "Kuldeep Yadav",
                jobTitle: "Principal",
              },
              areaServed: ["Jamrehi Chautarhai Pirona", "Jalaun District", "Uttar Pradesh", "Bundelkhand Region"],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 26.8467,
                  longitude: 80.9462,
                },
                geoRadius: "50000",
              },
              priceRange: "Affordable",
              paymentAccepted: "Cash, Bank Transfer",
              currenciesAccepted: "INR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Educational Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Course",
                      name: "Primary Education",
                      description: "Quality primary education with modern teaching methods",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Course",
                      name: "Secondary Education",
                      description: "Comprehensive secondary education with holistic development",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Parent Review",
                  },
                  reviewBody:
                    "Excellent school with quality education and caring teachers. My child has shown great improvement.",
                },
              ],
            }),
          }}
        />

        {/* Additional Meta Tags for Local SEO */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Jamrehi Chautarhai Pirona, Uttar Pradesh" />
        <meta name="geo.position" content="26.8467;80.9462" />
        <meta name="ICBM" content="26.8467, 80.9462" />
        <meta name="language" content="English, Hindi" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="classification" content="Education, School, Academy" />
        <meta name="category" content="Education" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="Parents, Students, Education Seekers" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Favicon */}
        <link rel="icon" href="/images/school-logo.jpg" />
        <link rel="apple-touch-icon" href="/images/school-logo.jpg" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Google Analytics - Replace with your tracking ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Add your Google Analytics code here
              // gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
