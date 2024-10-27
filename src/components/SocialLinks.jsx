import React from 'react';
import { FaGithub, FaLinkedin,FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/javidan-valizada-163747284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Cavidan232'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'cavidanvelizade9@gmail.com'
        },
        {
            id:4,
            child:(
                <>
                Facebook <FaFacebook size={30}/>
                </>
            ),
            href:"https://www.facebook.com/cavidan.velizade.1907?mibextid=ZbWKwL",

        }
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={
                        "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                        " " + style}>
                        <a href={href} className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks;
