import React from 'react';

function InsuranceCard({ title, description, imageUrl, additionalInfo }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-50"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="list-none text-gray-600">
          {additionalInfo.map((info, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">{info}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
        Nuevo
      </div>
    </div>
  );
}

export default InsuranceCard;
