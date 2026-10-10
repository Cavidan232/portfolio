
import React from 'react';
import myImage from '../assets/my.jpeg';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
            name="home"
            className="min-h-screen w-full bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300"
        >
            <div className="mx-auto flex min-h-screen max-w-screen-lg flex-col-reverse items-center justify-center px-5 py-24 md:flex-row md:gap-10">

                {/* Introduction */}
                <div className="flex flex-col items-center justify-center md:w-3/5 md:items-start">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-700 transition-colors duration-300 dark:text-cyan-400 sm:text-base">
                        Welcome to my portfolio
                    </p>

                    <h1 className="text-center text-3xl font-bold leading-tight text-gray-900 transition-colors duration-300 dark:text-white sm:text-4xl md:text-left lg:text-6xl">
                        Hi, I'm Cavidan
                    </h1>

                    <h2 className="mt-3 text-center text-2xl font-bold text-gray-700 transition-colors duration-300 dark:text-gray-300 sm:text-3xl md:text-left lg:text-4xl">
                        Data Analytics Enthusiast
                    </h2>

                    <p className="max-w-xl py-5 text-center text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400 sm:text-base md:text-left">
                        I have a background in Mathematics and Informatics
                        Teaching and a strong interest in working with data.
                        Currently, I'm developing my skills in Python, SQL,
                        Pandas, NumPy, and data visualization to turn raw data
                        into meaningful insights.
                    </p>

                    <p className="max-w-xl text-center text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400 sm:text-base md:text-left">
                        With previous experience in Frontend Development,
                        I enjoy solving problems, exploring new technologies,
                        and building practical projects. I'm always learning
                        and looking for opportunities to grow.
                    </p>

                    {/* Portfolio Button */}
                    <div className="mt-7">
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            offset={-60}
                            className="group flex w-fit cursor-pointer items-center gap-3 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 sm:text-base"
                        >
                            View My Projects

                            <HiArrowNarrowRight
                                size={20}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    {/* Skills */}
                    <div className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start">
                        {[
                            'Python',
                            'SQL',
                            'Pandas',
                            'NumPy',
                            'Data Visualization',
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 sm:text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Profile Image */}
                <div className="mb-8 flex justify-center md:mb-0 md:w-2/5">
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl transition-opacity duration-300 dark:opacity-30" />

                        <img
                            src={myImage}
                            alt="Cavidan Vəlizadə"
                            fetchpriority="high"
                            className="relative h-44 w-44 rounded-full border-2 border-gray-200 object-cover shadow-xl transition-all duration-300 hover:scale-[1.02] dark:border-gray-700 sm:h-56 sm:w-56 lg:h-80 lg:w-80"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
