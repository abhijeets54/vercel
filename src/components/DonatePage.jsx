import React from 'react';

const DonatePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Modes of Payment</h2>
        <p className="text-lg font-medium mb-2">GPAY/PAYTM/UPI: +919876920114</p>
        
        <h2 className="text-2xl font-semibold mb-4 mt-6">Bank Account Details</h2>
        <p className="text-lg font-medium mb-2">Account Name: Initiators of Change</p>
        <p className="text-lg font-medium mb-2">Bank: Punjab National Bank</p>
        <p className="text-lg font-medium mb-2">Account Number: 4433002100008197</p>
        <p className="text-lg font-medium">IFSC: PUNB0443300</p>
      </div>
    </div>
  );
}

export default DonatePage;
