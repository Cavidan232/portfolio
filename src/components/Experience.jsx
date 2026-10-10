
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
            description: 'Tools and technologies I use to explore, analyze, and understand data.',
            technologies: [
                {
                    id: 1,
                    title: 'Python',
                    label: 'Currently Learning',
                    style: 'shadow-yellow-400',
                    icon: '🐍',
                },
                {
                    id: 2,
                    title: 'Pandas',
                    label: 'Data Analysis',
                    style: 'shadow-purple-500',
                    icon: '🐼',
                },
                {
                    id: 3,
                    title: 'NumPy',
                    label: 'Numerical Computing',
                    style: 'shadow-blue-500',
                    icon: '🔢',
                },
                {
                    id: 4,
                    title: 'SQL',
                    label: 'Currently Learning',
                    style: 'shadow-sky-400',
                    icon: '🗄️',
                },
                {
                    id: 5,
                    title: 'Excel',
                    label: 'Data Analysis',
                    style: 'shadow-green-500',
                    icon: '📊',
                },
            ],
        },
        {
            category: 'Frontend Development',
            description: 'Technologies I have used to build web interfaces and projects.',
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
            className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
        >
            <div className="max-w-screen-lg mx-auto px-5 py-20 sm:py-24">

                <div className="mb-12">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold inline border-b-4 border-gray-500 pb-2">
                        Skills & Technologies
                    </p>

                    <p className="mt-6 text-gray-400 text-base sm:text-lg">
                        My technical background and the tools I am exploring
                        on my journey into data analytics.
                    </p>
                </div>

                {techGroups.map((group) => (
                    <section key={group.category} className="mb-14">

                        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                            {group.category}
                        </h2>

                        <p className="text-gray-400 mb-6">
                            {group.description}
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-8">

                            {group.technologies.map((tech) => (
                                <div
                                    key={tech.id}
                                    className={`flex flex-col items-center justify-center min-h-36 sm:min-h-40 p-5 rounded-xl bg-gray-900/70 border border-gray-800 shadow-md ${tech.style} hover:scale-105 hover:bg-gray-800 duration-300`}
                                >
                                    {tech.src ? (
                                        <img
                                            src={tech.src}
                                            alt={tech.title}
                                            loading="lazy"
                                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                                        />
                                    ) : (
                                        <span className="text-4xl" aria-hidden="true">
                                            {tech.icon}
                                        </span>
                                    )}

                                    <p className="mt-4 text-sm sm:text-base font-medium">
                                        {tech.title}
                                    </p>

                                    {tech.label && (
                                        <span className="text-xs text-gray-400 mt-1 text-center">
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
```
