import React from "react";

const leadership = [
  {
    name: "Mr. Annasaheb Kadam",
    role: "Founder / Director",
    image: "/pappa_final img.jpeg",
  }
];

const teachingStaff = [
  "Principal – Mr. Pawar S.P.",
  "Special Educator – Mr. Govindpure O.B.",
  "Speech Educator – Mr. Dake S.R.",
  "Speech Educator – Mr. Pawar V.B.",
  "Speech Educator – Mr. Wagh N.D.",
  "Speech Educator – Mr. Gunale V.G.",
  "Speech Educator – Mr. Patil V.G.",
  "Speech Educator – Mr. Kale M.P",
  "Speech Educator – Mr. Male S.L.",
  "Speech Educator – Mr. Bedake P.K.",
  "Speech Educator – Mr. Bedake N.S.",
  "Speech Educator – Mr. Shendre H.R.",
  "Psychologist – Mr. Nimbalkar P.M.",
  "Music Teacher – Mr. Kore S.S.",
  "Art Teacher – Mr. Lavare P.G.",
  "Art Teacher – Mr. Ahire A.S.",
  "Sport Teacher – Mr. Sirsath T.H.",

  

];

const nonTeachingStaff = [
   "Hostel Superintendent – Mr. Khilari S.V.",
   "Nurse – Mrs. Jaybhaye Y.A.",
   "Clerk – Mr. Shinde B.D.",
   "Doctor – Mr. Deshmukh A.A.",
  "Cook – Mr. Giri G.S.",
  "Cook – Mr. Bhosale S.M.",
  "Helper – Mr. Babar T.V.",
  "Driver – Mr. Yadav L.R.",
  "peon – Mr. Kale S.A.",
  "Caretaker – Mr. Babar A.A.",
  "Caretaker – Mr. Deshmukh C.L",
  "Caretaker – Mr. Kshirsagar N.S.",
  "Caretaker – Mr. Fulse N.G.",
  "Caretaker – Mr. Ban K.G.",
  "Caretaker – Mr. Hangarge S.D.",
  "Caretaker – Mr. Murudkar S.S.",
  "Caretaker – Mr. Swami S.S.",
  "Caretaker – Mr. Kore M.V.",
  "Caretaker – Mr. Zunjurute P.S.",
  "Cleaner – Mr. Shaikh P.S.",
  "Cleaner – Mr. Jadhav B.M.",
  "Watchmen – Mr. Shinde R.B.",
  
];

const OurTeam = () => {
  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
        <p className="mt-4 text-lg opacity-90">
          Dedicated professionals working together for the care,
          education, and empowerment of our children.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Director
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {leadership.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-indigo-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Teaching Staff
          </h2>

          <ul className="grid md:grid-cols-2 gap-4">
            {teachingStaff.map((staff, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                {staff}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Non Teaching Staff */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Non-Teaching Staff
          </h2>

          <ul className="grid md:grid-cols-2 gap-4">
            {nonTeachingStaff.map((staff, index) => (
              <li
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-md"
              >
                {staff}
              </li>
            ))}
          </ul>
        </div>
      </section>

      

    </div>
  );
};

export default OurTeam;