import React from 'react';

const About = () => {
    return (
        <div
            name="about"
            className="min-h-screen w-full bg-gray-50 py-10 text-gray-900 transition-colors duration-300 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white md:py-0"
        >
            <div className="mx-auto flex min-h-screen w-full max-w-screen-lg flex-col justify-center p-5">

                <div className="flex items-center justify-center pb-8 md:justify-start">
                    <p className="inline border-b-4 border-gray-400 pb-1 text-2xl font-bold sm:text-3xl lg:text-4xl dark:border-gray-500">
                        About Me
                    </p>
                </div>

                <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl dark:text-gray-300">
                    I am a Mathematics and Informatics educator with a strong
                    interest in programming, data, and technology. My mathematical
                    background has helped me develop analytical thinking,
                    problem-solving skills, and attention to detail.
                </p>

                <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl dark:text-gray-300">
                    Currently, I am focusing on Data Analytics, building my skills
                    in Python, SQL, and data manipulation. I use libraries such as
                    Pandas and NumPy, along with Excel, to explore datasets,
                    identify patterns, and turn raw data into meaningful insights.
                    My goal is to apply these skills to real-world analytical
                    problems and projects.
                </p>

                <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl dark:text-gray-300">
                    Through Coursera, I have been developing my knowledge of
                    Python-based data analysis, data visualization, and SQL.
                    These learning experiences help me connect theoretical
                    concepts with practical work and strengthen my understanding
                    of how data can support better decisions.
                </p>

                <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl dark:text-gray-300">
                    Alongside data analytics, I have experience in Front-End
                    Development using HTML, CSS, JavaScript, and React.
                    My background in web development has taught me how to build
                    user interfaces, approach technical challenges, and bring
                    ideas to life through code.
                </p>

                <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl dark:text-gray-300">
                    I also completed my training at Code Academy and earned a
                    High Honor diploma through the Code for Future Web Programming
                    Essentials program. I believe in continuous learning,
                    hands-on practice, and growing through real projects.
                </p>

            </div>
        </div>
    );
};

export default About;