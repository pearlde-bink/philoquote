"use client";
import Footer from "../app/component/Footer";
import Header from "../app/component/Header";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../scss/style.scss";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("https://philosophy-quotes-api.glitch.me/quotes");
      if (res.ok) {
        const val = await res.json();
        setData(val);
      }
    } catch (err) {
      console.error("Error fetching data: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   AOS.init({
  //     // easing: "fade-up",
  //     // once: true,
  //     // offset: 50,
  //     // duration: 3000,
  //     easing: "ease-out-cubic",
  //     once: true,
  //     offset: 50,
  //   });
  // }, []);

  useEffect(() => {
    AOS.refresh({ easing: "fade-up", delay: 400, duration: 800 });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main className="h-auto pt-4 flex-col flex items-center justify-start bg-black text-white border-none">
        {/* Search form */}
        <form className="max-w-md w-full mx-auto border-2 rounded-lg">
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm rounded-lg text-gray-900 bg-gray-50 rounded-e-lg   dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search by author, philosophy, keyword..."
                required=""
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        {/* main content */}
        <div className="container w-full max-w-4xl space-y-4 mt-6 h-full p-5">
          <div className="gap-4 columns-2 sm:gap-5 md:gap-10 sm:columns-3 md:columns-4">
            {data.map((item, index) => (
              <div
                className="quote mt-5 sm:mt-6 md:mt-10 border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-sm
             font-semibold text-gray-700"
                key={index}
              >
                "The unexamined life is not worth living." - Socrates
                <p>
                  {item.quote} -{" "}
                  <span>
                    {item.source} ({item.philosophy})
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
