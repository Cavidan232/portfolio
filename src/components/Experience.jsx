
import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import bootstrap from '../assets/bootstrap.jpeg';
import git from '../assets/git.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';

const Experience = () => {
    const techGroups = [
        {
            category: 'Data Analytics',
            description:
                'Tools and technologies I use to explore, analyze, and understand data.',
            technologies: [
                {
                    id: 1,
                    title: 'Python',
                    label: 'Currently Learning',
                    src: 'https://cdn.simpleicons.org/python/3776AB',
                    style: 'shadow-yellow-400',
                },
                {
                    id: 2,
                    title: 'Pandas',
                    label: 'Data Analysis',
                    src: 'https://cdn.simpleicons.org/pandas/150458',
                    style: 'shadow-purple-500',
                },
                {
                    id: 3,
                    title: 'NumPy',
                    label: 'Numerical Computing',
                    src: 'https://cdn.simpleicons.org/numpy/013243',
                    style: 'shadow-blue-500',
                },
                {
                    id: 4,
                    title: 'SQL',
                    label: 'Currently Learning',
                    src: 'https://cdn.simpleicons.org/postgresql/4169E1',
                    style: 'shadow-sky-400',
                },
                {
                    id: 5,
                    title: 'Excel',
                    label: 'Data Analysis',
                    src: 'https://cdn.simpleicons.org/microsoftexcel',
                    style: 'shadow-green-500',
                },
            ],
        },
        {
            category: 'Frontend Development',
            description:
                'Technologies I have used to build web interfaces and projects.',
            technologies: [
                {
                    id: 6,
                    title: 'HTML',
                    src: html,
                    style: 'shadow-orange-500',
                },
                {
                    id: 7,
                    title: 'CSS',
                    src: css,
                    style: 'shadow-blue-500',
                },
                {
                    id: 8,
                    title: 'JavaScript',
                    src: javascript,
                    style: 'shadow-yellow-500',
                },
                {
                    id: 9,
                    title: 'React',
                    src: reactImg,
                    style: 'shadow-blue-600',
                },
                {
                    id: 10,
                    title: 'Tailwind CSS',
                    src: tailwind,
                    style: 'shadow-sky-400',
                },
                {
                    id: 11,
                    title: 'Bootstrap',
                    src: bootstrap,
                    style: 'shadow-purple-500',
                },
                {
                    id: 12,
                    title: 'Git',
                    src: git,
                    style: 'shadow-orange-600',
                },
                {
                    id: 13,
                    title: 'GitHub',
                    src: github,
                    style: 'shadow-gray-400',
                },
            ],
        },
    ];

    return (
        <div
            name="experience"
            className="min-h-screen w-full bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white"
        >
            <div className="mx-auto max-w-screen-lg px-5 py-20 sm:py-24">

                {/* Section heading */}
                <div className="mb-12">
                    <h1 className="inline border-b-4 border-cyan-600 pb-2 text-2xl font-bold transition-colors duration-300 dark:border-cyan-400 sm:text-3xl lg:text-4xl">
                        Skills & Technologies
                    </h1>

                    <p className="mt-6 text-base text-gray-600 transition-colors duration-300 dark:text-gray-400 sm:text-lg">
                        My technical background and the tools I am exploring
                        on my journey into data analytics.
                    </p>
                </div>

                {techGroups.map((group) => (
                    <section key={group.category} className="mb-14">

                        <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
                            {group.category}
                        </h2>

                        <p className="mb-6 text-gray-600 transition-colors duration-300 dark:text-gray-400">
                            {group.description}
                        </p>

                        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8 md:grid-cols-4">
                            {group.technologies.map((tech) => (
                                <div
                                    key={tech.id}
                                    className={`flex min-h-36 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900/70 dark:hover:bg-gray-800 sm:min-h-40 ${tech.style}`}
                                >
                                    <img
                                        src={tech.src}
                                        alt={`${tech.title} logo`}
                                        loading="lazy"
                                        className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                                    />

                                    <p className="mt-4 text-center text-sm font-medium text-gray-900 transition-colors duration-300 dark:text-white sm:text-base">
                                        {tech.title}
                                    </p>

                                    {tech.label && (
                                        <span className="mt-1 text-center text-xs text-gray-500 transition-colors duration-300 dark:text-gray-400">
                                            {tech.label}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Experience;