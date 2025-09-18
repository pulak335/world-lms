'use client';

import Image from 'next/image';

export default function UniversityLogos() {
  const universities = [
    {
      name: 'North South University',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/North_South_University_Monogram.svg/1001px-North_South_University_Monogram.svg.png',
      website: 'https://www.northsouth.edu'
    },
    {
      name: 'American International University Bangladesh',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/American_International_University-Bangladesh_Monogram.svg/1200px-American_International_University-Bangladesh_Monogram.svg.png',
      website: 'https://www.aiub.edu'
    },
    {
      name: 'Independent University Bangladesh',
      logo: 'https://iub.ac.bd/media-backend/media/iub-logo_2024_color-c303e48f-7406-4c63-8e53-51fb791b2167.png',
      website: 'https://www.iub.ac.bd'
    },
    {
      name: 'United International University',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/United_International_University_Monogram.svg/1200px-United_International_University_Monogram.svg.png',
      website: 'https://www.uiu.ac.bd'
    },
    {
      name: 'East West University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/East-west-university-LogoSVG.svg/250px-East-west-university-LogoSVG.svg.png',
      website: 'https://www.ewubd.edu'
    },
    {
      name: 'Daffodil International University',
      logo: 'https://play-lh.googleusercontent.com/oe2tNvzeSXvrFEwkjh5ncdVGa6f44WiKPmMcUXrxtkrUmF3CQ_iQuvmPO6q7YkAJQTRO',
      website: 'https://www.daffodilvarsity.edu.bd'
    },
    {
      name: 'Stamford University Bangladesh',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Stamford_University_Bangladesh_Logo.svg/250px-Stamford_University_Bangladesh_Logo.svg.png',
      website: 'https://www.stamforduniversity.edu.bd'
    },
    {
      name: 'BRAC University',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/BRAC_University_monogram.svg/1200px-BRAC_University_monogram.svg.png',
      website: 'https://www.bracu.ac.bd'
    },
    {
      name: 'University of Liberal Arts Bangladesh',
      logo: 'https://opshori.wordpress.com/wp-content/uploads/2009/11/ulab_logo.gif?w=584',
      website: 'https://www.ulab.edu.bd'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-violet-900 mb-4">
          Everything You Need in One Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading universities across Bangladesh to provide quality education and recognized degrees.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* University Logos - Single Row on Large Screens */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {universities.map((university, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-violet-200 min-w-[120px] lg:min-w-[140px] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 mb-3 lg:mb-4 flex items-center justify-center">
                <Image
                  src={university.logo}
                  alt={`${university.name} logo`}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 80px"
                />
              </div>
              <h3 className="text-xs lg:text-sm font-medium text-gray-700 text-center group-hover:text-violet-600 transition-colors duration-300 leading-tight">
                {university.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All partner universities are accredited and recognized by the University Grants Commission (UGC) of Bangladesh
          </p>
        </div>
      </div>
    </section>
  );
}
