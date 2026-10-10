import React from 'react';

const About = () => {
    return (
        <div
            name="about"
            className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-10 md:py-0"
        >
            <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full min-h-screen">

                <div className="flex justify-center md:justify-start items-center pb-8">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold inline border-b-4 border-gray-500">
                        About Me
                    </p>
                </div>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed mt-5 text-gray-300">
                    I am a Mathematics and Informatics Teaching graduate with
                    a strong interest in technology, programming, and data.
                    My background in mathematics has helped me develop
                    analytical thinking, problem-solving, and attention to detail.
                </p>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed mt-5 text-gray-300">
                    Currently, I am focusing on Python, SQL, and Data Analytics,
                    exploring how data can be transformed into meaningful insights.
                    I work with tools such as Pandas, NumPy, and Excel to
                    analyze data, identify patterns, and solve practical problems.
                </p>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed mt-5 text-gray-300">
                    My journey also includes frontend development and hands-on
                    experience with HTML, CSS, JavaScript, and React. I enjoy
                    learning new technologies, building projects, and continuously
                    improving my technical skills.
                </p>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed mt-5 text-gray-300">
                    I am a proud graduate of Code Academy, where I completed
                    my training with High Honor. I believe in continuous learning,
                    practical experience, and using technology to turn ideas
                    into meaningful solutions.
                </p>

            </div>
        </div>
    );
};

export default About;
```
