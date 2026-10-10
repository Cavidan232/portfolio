import React, { useMemo, useState } from 'react';

import music from '../assets/portfolio/music.png';
import restoran from '../assets/portfolio/restoran.png';
import not from '../assets/portfolio/not.png';
import lankonFarm from '../assets/portfolio/lankonFarm.png';

import {
    HiArrowNarrowRight,
    HiSearch,
    HiOutlineChartBar,
    HiCode,
    HiX,
} from 'react-icons/hi';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filters = [
        'All',
        'Data Analytics',
        'Frontend Development',
    ];

    const portfolios = [
        {
            id: 1,
            title: 'E-Commerce Sales Analysis',
            category: 'Data Analytics',
            description:
                'Analyzing e-commerce order data to explore sales performance, product trends, and customer purchasing behavior using Python and Pandas.',
            image: null,
            icon: '📊',
            technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
            live: '',
            code: 'https://github.com/Cavidan232',
            featured: true,
        },
        {
            id: 2,
            title: 'Movie Sales Analysis',
            category: 'Data Analytics',
            description:
                'A data-cleaning and exploration project involving missing values, duplicate records, and numerical analysis with Pandas and NumPy.',
            image: null,
            icon: '🎬',
            technologies: ['Python', 'Pandas', 'NumPy'],
            live: '',
            code: 'https://github.com/Cavidan232/movie-sales-pandas-numpy',
        },
        {
            id: 3,
            title: 'Customer Data Analysis',
            category: 'Data Analytics',
            description:
                'Exploring customer demographics, purchase frequency, total spending, and average order value to discover useful business insights.',
            image: null,
            icon: '👥',
            technologies: ['Python', 'Pandas', 'Data Analysis'],
            live: '',
            code: 'https://github.com/Cavidan232/customer_data',
        },
        {
            id: 4,
            title: 'Artlist Clone',
            category: 'Frontend Development',
            description:
                'A music-inspired web interface built to practice frontend development and responsive design.',
            image: music,
            technologies: ['HTML', 'CSS', 'JavaScript'],
            live: 'https://artlist-phi.vercel.app/',
            code: 'https://github.com/Cavidan232/artlist-clone',
        },
        {
            id: 5,
            title: 'Restaurant Website',
            category: 'Frontend Development',
            description:
                'A restaurant website project focused on layout, visual presentation, and user experience.',
            image: restoran,
            technologies: ['React', 'Tailwind CSS'],
            live: 'https://restoran-omega.vercel.app',
            code: 'https://github.com/Cavidan232/restoran-site',
        },
        {
            id: 6,
            title: 'Simple Notes',
            category: 'Frontend Development',
            description:
                'A simple notes application created to practice interactive interfaces and JavaScript.',
            image: not,
            technologies: ['JavaScript', 'React'],
            live: 'https://simple-note-clon.vercel.app',
            code: 'https://github.com/Cavidan232/simple-note-clon',
        },
        {
            id: 7,
            title: 'LankonFarm',
            category: 'Frontend Development',
            description:
                'A web project developed to establish an online presence for LankonFarm.',
            image: lankonFarm,
            technologies: ['Web Development'],
            live: 'https://lankonfarm.com',
            code: '',
        },
    ];

    const filteredProjects = useMemo(() => {
        return portfolios.filter((project) => {
            const matchesFilter =
                activeFilter === 'All' ||
                project.category === activeFilter;

            const searchableText = [
                project.title,
                project.description,
                project.category,
                ...project.technologies,
            ]
                .join(' ')
                .toLowerCase();

            const matchesSearch = searchableText.includes(
                searchTerm.trim().toLowerCase()
            );

            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, searchTerm]);

    return (
        <div
            name="portfolio"
            className="min-h-screen w-full bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white"
        >
            <div className="mx-auto max-w-screen-lg px-5 py-20 sm:py-24">

                {/* Heading */}
                <div className="mb-10">
                    <h1 className="inline border-b-4 border-cyan-600 pb-2 text-2xl font-bold transition-colors duration-300 dark:border-cyan-400 sm:text-3xl lg:text-4xl">
                        Portfolio
                    </h1>

                    <p className="mt-6 max-w-2xl text-base text-gray-600 transition-colors duration-300 dark:text-gray-400 sm:text-lg">
                        A collection of my work in data analytics and
                        frontend development, combining analytical thinking
                        with practical problem-solving.
                    </p>
                </div>

                {/* Statistics */}
                <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-gray-200 bg-white p-4 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/70">
                        <HiCode className="mb-2 text-2xl text-cyan-600 dark:text-cyan-400" />
                        <p className="text-2xl font-bold">
                            {portfolios.filter(
                                (p) => p.category === 'Frontend Development'
                            ).length}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Frontend Projects
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-white p-4 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/70">
                        <HiOutlineChartBar className="mb-2 text-2xl text-cyan-600 dark:text-cyan-400" />
                        <p className="text-2xl font-bold">
                            {portfolios.filter(
                                (p) => p.category === 'Data Analytics'
                            ).length}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Analytics Projects
                        </p>
                    </div>

                    <div className="hidden rounded-xl border border-gray-200 bg-white p-4 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/70 sm:block">
                        <FaGithub className="mb-2 text-2xl text-cyan-600 dark:text-cyan-400" />
                        <p className="text-2xl font-bold">
                            {portfolios.filter((p) => p.code).length}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Code Repositories
                        </p>
                    </div>
                </div>

                {/* Search */}
                <div className="relative mb-6">
                    <HiSearch
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={21}
                    />

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search projects or technologies..."
                        aria-label="Search projects"
                        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-12 text-sm text-gray-900 outline-none transition-colors duration-300 placeholder:text-gray-500 focus:border-cyan-500 dark:border-gray-800 dark:bg-gray-900/80 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-cyan-400 sm:text-base"
                    />

                    {searchTerm && (
                        <button
                            type="button"
                            onClick={() => setSearchTerm('')}
                            aria-label="Clear search"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            <HiX size={20} />
                        </button>
                    )}
                </div>

                {/* Category Filters */}
                <div className="mb-10 flex flex-wrap gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                            aria-pressed={activeFilter === filter}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                activeFilter === filter
                                    ? 'border-transparent bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-900/20'
                                    : 'border-gray-300 bg-white text-gray-600 hover:border-cyan-500 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-400 dark:hover:text-cyan-300'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Project Count */}
                <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Showing{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            {filteredProjects.length}
                        </span>{' '}
                        {filteredProjects.length === 1
                            ? 'project'
                            : 'projects'}
                    </p>
                </div>

                {/* Project Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                        {filteredProjects.map((project) => (
                            <article
                                key={project.id}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-cyan-900/10 dark:border-gray-800 dark:bg-gray-900/60 dark:shadow-black/20 dark:hover:shadow-cyan-950/30"
                            >
                                {/* Image / Analytics Cover */}
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 via-slate-100 to-gray-200 transition-colors duration-300 dark:from-gray-900 dark:via-slate-900 dark:to-gray-950 sm:h-52">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={`${project.title} preview`}
                                            loading="lazy"
                                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="relative flex h-full w-full flex-col items-center justify-center">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent opacity-20" />

                                            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-500/30 bg-white/80 shadow-lg shadow-cyan-900/10 transition-transform duration-300 group-hover:scale-110 dark:bg-gray-900/80 dark:shadow-cyan-900/20">
                                                <span
                                                    className="text-4xl"
                                                    role="img"
                                                    aria-label="Analytics project"
                                                >
                                                    {project.icon}
                                                </span>
                                            </div>

                                            <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
                                                Data Analytics
                                            </p>

                                            <HiOutlineChartBar className="absolute right-5 top-5 text-3xl text-gray-400 dark:text-gray-700" />
                                        </div>
                                    )}

                                    {/* Category Badge */}
                                    <span className="absolute left-3 top-3 rounded-full border border-gray-200/80 bg-white/90 px-3 py-1 text-xs text-cyan-700 backdrop-blur-sm dark:border-gray-700/80 dark:bg-black/75 dark:text-cyan-300">
                                        {project.category}
                                    </span>

                                    {project.featured && (
                                        <span className="absolute right-3 top-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Project Details */}
                                <div className="flex flex-1 flex-col p-5 sm:p-6">
                                    <h2 className="text-xl font-bold transition-colors group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
                                        {project.title}
                                    </h2>

                                    <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-md border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs text-gray-700 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/80 dark:text-gray-300"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                                            >
                                                Live Demo
                                                <FaExternalLinkAlt size={12} />
                                            </a>
                                        )}

                                        {project.code && (
                                            <a
                                                href={project.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors duration-300 hover:border-cyan-500 hover:text-cyan-700 dark:border-gray-700 dark:text-gray-300 dark:hover:text-cyan-300"
                                            >
                                                <FaGithub size={17} />
                                                Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-gray-200 bg-white px-5 py-16 text-center transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/50">
                        <HiSearch className="mx-auto mb-4 text-4xl text-gray-400 dark:text-gray-600" />

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            No projects found
                        </h3>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Try another search term or category.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setSearchTerm('');
                                setActiveFilter('All');
                            }}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300"
                        >
                            Clear filters
                            <HiArrowNarrowRight size={17} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
