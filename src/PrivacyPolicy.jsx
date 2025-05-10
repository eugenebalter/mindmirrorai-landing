import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-800 flex flex-col items-center px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center text-purple-700 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Privacy Policy & Terms of Service
      </motion.h1>

      <motion.div
        className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-sm text-gray-500 mb-6">Last updated: May 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Mind Mirror AI uses advanced AI models (including Large Language Models) to analyze facial images and generate wellness-related insights. By using this application, you acknowledge and agree to the following terms:
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Terms of Service</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Your images are processed solely for generating personalized wellness insights and are not stored permanently.</li>
            <li>These insights are provided for informational and entertainment purposes only and do not constitute medical advice or diagnosis.</li>
            <li>Reasonable safeguards are used to protect your data during processing, but absolute security cannot be guaranteed.</li>
            <li>All results are provided "as-is", without warranties of any kind, and may not be accurate or applicable to every individual.</li>
            <li>This app is not a medical device. For health concerns, please consult a licensed healthcare provider.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Processing & Privacy</h2>
          <p className="text-gray-700">
            We process your facial images using state-of-the-art AI technology to provide wellness insights. The processing is done in real-time, and we do not permanently store your images or personal data. We may collect and use technical data and related information—including but not limited to technical information about your device, system and application software—that is gathered periodically to facilitate the provision of software updates, product support, and other services to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">License and Usage</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>This application is licensed, not sold, to you for use only under the terms of this agreement.</li>
            <li>You may not distribute or make the application available over a network where it could be used by multiple devices at the same time.</li>
            <li>You may not copy, reverse-engineer, disassemble, attempt to derive the source code of, modify, or create derivative works of the application.</li>
            <li>Any attempt to do so is a violation of the rights of the application licensor.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">External Services</h2>
          <p className="text-gray-700">
            The application may enable access to third-party services and websites. You agree to use these services at your sole risk. We are not responsible for examining or evaluating the content or accuracy of any third-party services, and shall not be liable for any such third-party services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Disclaimer of Warranties</h2>
          <p className="text-gray-700 uppercase text-sm">
            You expressly acknowledge and agree that use of the application is at your sole risk. To the maximum extent permitted by applicable law, the application and any services performed or provided by the application are provided "as is" and "as available," with all faults and without warranty of any kind.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Limitation of Liability</h2>
          <p className="text-gray-700 text-sm">
            To the extent not prohibited by law, in no event shall we be liable for personal injury or any incidental, special, indirect, or consequential damages whatsoever, including, without limitation, damages for loss of profits, loss of data, business interruption, or any other commercial damages or losses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Termination</h2>
          <p className="text-gray-700">
            This agreement is effective until terminated by you or us. Your rights under this agreement will terminate automatically if you fail to comply with any of its terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Export Control</h2>
          <p className="text-gray-700">
            You may not use or otherwise export or re-export the application except as authorized by United States law and the laws of the jurisdiction in which the application was obtained.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Governing Law</h2>
          <p className="text-gray-700">
            This agreement and the relationship between you and us shall be governed by the laws of the State of California, excluding its conflicts of law provisions.
          </p>
        </section>

        <p className="text-center text-gray-600 mt-12">© Mind Mirror AI. All rights reserved.</p>
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