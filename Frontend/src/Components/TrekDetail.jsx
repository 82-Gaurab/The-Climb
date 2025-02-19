/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  Mountain,
  ThermometerSun,
  Users,
  Mail,
} from "lucide-react";

import mountain1 from "../assets/images/mountain1.jpg";

const TrekDetail = () => {
  //   const { id } = useParams();

  // This would typically come from an API/database
  const trekData = {
    title: "Mount Everest Base Camp Trek",
    image: mountain1,
    difficulty: "Hard",
    duration: "14 days",
    bestSeason: "March-May, September-November",
    region: "Nepal, Himalayas",
    description:
      "The Everest Base Camp trek is one of the most popular trekking routes in Nepal and the world. This trek offers stunning views of the world's highest peaks, including Mount Everest, and an insight into the unique Sherpa culture.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu (1,400m)",
        description:
          "Arrive in Kathmandu, transfer to hotel, and trek briefing.",
      },
      {
        day: 2,
        title: "Fly to Lukla (2,800m) and trek to Phakding (2,652m)",
        description:
          "Early morning flight to Lukla, begin trek to Phakding through Dudh Koshi Valley.",
      },
      {
        day: 3,
        title: "Trek to Namche Bazaar (3,440m)",
        description:
          "Challenging ascent through pine forests to the famous Sherpa capital.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={trekData.image || "https://via.placeholder.com/800"}
          alt={trekData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">
              {trekData.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white">
              <span className="flex items-center">
                <Mountain className="h-5 w-5 mr-2" />
                {trekData.region}
              </span>
              <span className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {trekData.duration}
              </span>
              <span className="flex items-center">
                <ThermometerSun className="h-5 w-5 mr-2" />
                {trekData.bestSeason}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Trek Details */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {trekData.description}
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
              <div className="space-y-6">
                {trekData.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {trekData.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Trek gallery ${index + 1}`}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Book This Trek</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of People
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Request Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekDetail;
