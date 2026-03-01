import React from "react";

const Donate = () => {
  return (
    <div className="min-h-screen bg-rose-50 py-16 px-6 text-center">

      <h1 className="text-4xl font-bold text-rose-600">
        Support Aaicha Ghar
      </h1>

      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        Every helping hand makes a meaningful difference in a child’s journey
      </p>

      {/* Donate Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 mt-10 max-w-md mx-auto">

        <h2 className="text-xl font-semibold mb-4">
          Donate via UPI ID/QR
        </h2>

        {/* Replace with your QR */}
        <img
          src="/QR.jpeg"
          alt="Donate QR"
          className="mx-auto w-56"
        />

        <p className="mt-4 font-medium">
          UPI ID: aaichaghar@upi
        </p>

        

      </div>

    </div>
  );
};

export default Donate;