import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const uvData = [
  { time: "6 AM", uv: 1 },
  { time: "9 AM", uv: 3 },
  { time: "12 PM", uv: 7 },
  { time: "3 PM", uv: 9 },
  { time: "6 PM", uv: 5 },
  { time: "9 PM", uv: 2 },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-800 flex flex-col items-center justify-center px-6 py-12 space-y-16">
      <motion.h1
        className="text-5xl font-bold text-center text-purple-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mind Mirror AI
      </motion.h1>

      <motion.p
        className="text-lg text-center max-w-xl text-gray-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Your personal AI-powered skincare coach. Analyze your face, get health insights, and receive customized wellness plans based on your skin condition and environment.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <a href="#" className="rounded-2xl px-6 py-3 text-lg bg-purple-600 hover:bg-purple-700 text-white shadow-lg text-center">Download for Android</a>
        <span className="rounded-2xl px-6 py-3 text-lg bg-gray-300 text-gray-600 cursor-not-allowed text-center">Download for iOS (Coming Soon)</span>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {["AI Skin Analysis", "UV Forecast Chart", "Personalized Wellness Plan"].map((feature, i) => (
          <motion.div
            key={i}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center text-lg font-semibold text-purple-700 bg-white">
              {feature}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full max-w-4xl py-12">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Today's UV Index Forecast</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={uvData}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#9333ea" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#9333ea" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <motion.footer
        className="text-sm text-gray-500 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-4 mb-2">
            <Link to="/delete-account" className="text-purple-600 hover:text-purple-800 hover:underline transition-colors">
              Account Deletion
            </Link>
            <span>•</span>
            <Link to="/privacy-policy" className="text-purple-600 hover:text-purple-800 hover:underline transition-colors">
              Privacy Policy & Terms
            </Link>
          </div>
          <p>© 2025 Mind Mirror AI. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}
