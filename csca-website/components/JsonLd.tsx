export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Construction Supply and Commission Agent Ltd",
    alternateName: "CSCA Ltd",
    description:
      "Trusted real estate, construction supply, car rental and leasing services in Kigali, Rwanda.",
    url: "https://csca-ltd.rw",
    telephone: ["+250787800040", "+250787534173"],
    email: "theogenentakirutimana04@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kigali",
      addressCountry: "RW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.9441,
      longitude: 30.0619,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Supply" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Rental Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Leasing Services" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
