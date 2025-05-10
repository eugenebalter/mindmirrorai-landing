import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Компонент со встроенным изображением вместо импорта файла
const DeletionScreenshot = () => {
  // Стили для имитации скриншота из картинки
  return (
    <div className="max-w-sm mx-auto border-4 border-gray-300 rounded-3xl overflow-hidden shadow-lg bg-black">
      <div className="p-4 bg-black text-white">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold">Profile</h2>
          </div>
        </div>
        
        <div className="py-3 border-t border-gray-700">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <span>Terms & Conditions</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="py-3 border-t border-gray-700">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <span>Data Privacy</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-red-500 text-white text-center py-3 px-4 rounded-lg font-bold">
          DELETE ACCOUNT AND DATA
        </div>
        
        <div className="flex justify-between mt-8 pt-4 border-t border-gray-700">
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">History</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs mt-1">Calendar</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-xs mt-1">Sun</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1 text-teal-400">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-800 flex flex-col items-center px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center text-purple-700 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Account Deletion Policy
      </motion.h1>

      <motion.div
        className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">How to Delete Your Account and Data</h2>
        
        <p className="text-lg text-gray-700 mb-6">
          We value your privacy and make it easy to delete your account and all associated data from our service.
          Mind Mirror AI allows you to delete your account and all personal data with a simple process:
        </p>

        <ol className="list-decimal pl-6 mb-8 space-y-3 text-gray-700">
          <li>Open the Mind Mirror AI app on your device</li>
          <li>Navigate to the Profile screen by tapping the profile icon in the bottom navigation bar</li>
          <li>Scroll down to find the "DELETE ACCOUNT AND DATA" button highlighted in red</li>
          <li>Tap the button and confirm your choice when prompted</li>
        </ol>

        <p className="text-lg text-gray-700 mb-6">
          Once confirmed, all your data will be permanently deleted from our servers, including:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Profile information</li>
          <li>All facial analysis history</li>
          <li>Stored photos</li>
          <li>Usage analytics</li>
          <li>Personalized settings and preferences</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6">
          The deletion process is immediate and cannot be undone. After deletion, you will need to create 
          a new account if you wish to use Mind Mirror AI again in the future.
        </p>

        <div className="border-t border-gray-200 pt-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Screenshot of Deletion Option</h3>
          <div className="flex justify-center">
            <DeletionScreenshot />
          </div>
          <p className="text-sm text-gray-500 italic mt-3 text-center">
            The red "DELETE ACCOUNT AND DATA" button as shown in the app's Profile section
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mt-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Back to Home
        </Link>
      </motion.div>

      <motion.footer
        className="text-sm text-gray-500 mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        © 2025 Mind Mirror AI. All rights reserved.
      </motion.footer>
    </div>
  );
} 