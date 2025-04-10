import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-10">
                    My name is Aryan Shekhar. I completed my BTech in Computer Science from VIT Vellore in 2024. With a strong focus on web development, I have acquired extensive experience in creating dynamic and visually appealing websites using React JS and Node JS, along with various complementary tools such as Bootstrap, Tailwind, and Chakra UI. I also possess a solid understanding of integrating third-party APIs into my projects. I have successfully utilized APIs like OMDB and NEWSAPI, to fetch and display relevant data from external sources, thereby enhancing the overall functionality and versatility of the web applications.
                </p>
            </div>
        </div>
    )
}

export default About