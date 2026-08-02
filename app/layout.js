import "./globals.css";

export const metadata = {
  title: "Shreyash Shukla | Software Engineer & Computer Science Student in Gandhinagar",
  description:
    "Shreyash Shukla - Computer Science & Engineering student at PDEU, Gandhinagar, Gujarat. Software Engineering Intern at Quicko specializing in Angular, React, Next.js, Node.js, and AWS Serverless architecture.",
  keywords: [
    "Shreyash Shukla",
    "Gandhinagar Web Developer",
    "PDEU Computer Science",
    "Quicko Software Intern",
    "Angular 21 Developer",
    "React Developer Gujarat",
    "AWS Serverless Engineer",
    "Hackathon Winner Gujarat",
  ],
  authors: [{ name: "Shreyash Shukla", url: "https://shreyash-shukla.vercel.app" }],
  creator: "Shreyash Shukla",
  openGraph: {
    title: "Shreyash Shukla | Software Engineer & CSE Student",
    description:
      "Full Stack Web Developer & Software Intern at Quicko. View projects, hackathon achievements, and experience.",
    url: "https://shreyash-shukla.vercel.app/",
    siteName: "Shreyash Shukla Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/shreyash_emblem.png",
        width: 500,
        height: 500,
        alt: "Shreyash Shukla - Full Stack Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyash Shukla | Software Engineer in Gandhinagar",
    description:
      "Software Engineering Intern at Quicko & PDEU CSE student. Angular, React, Next.js, and AWS Lambda serverless tools.",
    images: ["/shreyash_emblem.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shreyash Shukla",
    url: "https://shreyash-shukla.vercel.app",
    image: "/shreyash_emblem.png",
    jobTitle: "Software Engineering Intern",
    worksFor: {
      "@type": "Organization",
      name: "Quicko",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Pandit Deendayal Energy University (PDEU)",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    sameAs: [
      "https://github.com/Shreyash-Shukla",
      "https://linkedin.com/in/shreyash-shukla",
    ],
    knowsAbout: [
      "Angular 21",
      "React.js",
      "Next.js",
      "TypeScript",
      "AWS Lambda",
      "Node.js",
      "DynamoDB",
      "Serverless Architecture",
      "Data Structures & Algorithms",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#0D0D0D] text-slate-900 dark:text-gray-100 antialiased selection:bg-[#00FF6A] selection:text-black">
        {children}
      </body>
    </html>
  );
}
