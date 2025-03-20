import React from 'react';
import music from '../assets/portfolio/music.png';
import restoran from '../assets/portfolio/restoran.png';
import not from '../assets/portfolio/not.png';
import lankonFarm from '../assets/portfolio/lankonFarm.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: music,
            live: 'https://artlist-phi.vercel.app/',
            code: 'https://github.dev/Cavidan232/artlist-clone'
        },
        {
            id: 2,
            src: restoran,
            live: 'https://restoran-omega.vercel.app',
            code: 'https://github.dev/Cavidan232/restoran-site'
        },
        {
            id: 3,
            src: not,
            live: 'https://simple-note-clon.vercel.app',
            code: 'https://github.dev/Cavidan232/simple-note-clon'
        },
        {
            id: 4,
            src: lankonFarm,
            live: 'https://lankonfarm.com',
            code: ''
        }
    ];


    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-900 w-full text-white h-full'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8 pt-20 md:pt-40 px-2 lg:px-0 text-center sm:text-start'>
                    <p className='text-2xl sm:text-3xl lg:text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 sm:gap-x-16 lg:gap-x-20 gap-y-12 m-auto px-5 sm:px-2 w-full'>
                    {
                        portfolios.map(({ id, src, live, code }) => (
                            <div key={id} className='shadow-lg shadow-gray-600 rounded-lg hover:scale-105 ease-in duration-700'>
                                <img src={src} alt="" className='rounded-md' />
                                <div className='flex items-center justify-center'>
                                    <button className='text-sm sm:text-base w-1/2 px-6 py-1 m-3 hover:underline font-semibold'><a href={live} target='_blank' rel="noreferrer">View Live</a></button>
                                    <button className='text-sm sm:text-base w-1/2 px-6 py-1 m-3 hover:underline font-semibold'><a href={code} target='_blank' rel="noreferrer">Code</a></button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Portfolio;
