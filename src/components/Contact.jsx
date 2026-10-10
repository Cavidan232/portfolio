import React from 'react';

const Contact = () => {
    return (
        <div
            name="contact"
            className="h-full w-full bg-gray-50 p-4 text-gray-900 transition-colors duration-300 dark:bg-gradient-to-b dark:from-black dark:to-gray-900 dark:text-white"
        >
            <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center p-4 pb-8 sm:pt-20 md:pt-44">

                {/* Section heading */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="inline border-b-4 border-cyan-600 text-2xl font-bold transition-colors duration-300 dark:border-cyan-400 sm:text-3xl lg:text-4xl">
                        Contact
                    </h2>

                    <p className="py-6 text-center text-gray-600 transition-colors duration-300 dark:text-gray-400">
                        Please, submit the form below to get in touch with me.
                    </p>
                </div>

                {/* Contact form */}
                <div className="flex items-center justify-center">
                    <form
                        action="https://getform.io/f/bvrreodb"
                        method="POST"
                        className="flex w-full flex-col md:w-1/2"
                    >
                        <input
                            type="text"
                            name="Name"
                            placeholder="Enter Your Name"
                            autoComplete="name"
                            required
                            className="my-2 rounded-md border-2 border-gray-300 bg-white p-3 text-gray-900 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-cyan-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-400"
                        />

                        <input
                            type="email"
                            name="Email"
                            placeholder="Enter Your Email"
                            autoComplete="email"
                            required
                            className="my-2 rounded-md border-2 border-gray-300 bg-white p-3 text-gray-900 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-cyan-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-400"
                        />

                        <input
                            type="tel"
                            name="Phone"
                            placeholder="Enter Your Phone"
                            autoComplete="tel"
                            className="my-2 rounded-md border-2 border-gray-300 bg-white p-3 text-gray-900 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-cyan-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-400"
                        />

                        <textarea
                            name="Message"
                            placeholder="Enter your message..."
                            rows={7}
                            required
                            className="my-2 resize-y rounded-md border-2 border-gray-300 bg-white p-3 text-gray-900 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-cyan-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-400"
                        />

                        <button
                            type="submit"
                            className="mx-auto my-8 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
                        >
                            Let's talk
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
