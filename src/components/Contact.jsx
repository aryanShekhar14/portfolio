import React from 'react'

const Contact = () => {
    return (
        <div name="contact me" className="w-full h-full bg-gradient-to-b from-black to-gray-800 pt-4 text-white">
            <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact Me</p>
                    <p className="py-6">Submit the form to get in touch</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action='https://getform.io/f/9fb9500c-fc2c-4062-bb3b-3806218eb213' method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type='text'
                            name='name' placeholder='Enter your name'
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <input type='text'
                            name='email' placeholder='Enter your Email ID'
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4" />
                        <textarea name='message'
                            placeholder="Enter your message" rows={10} className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"></textarea>
                        <button className="text-white  bg-gradient-to-r from-purple-950 to-cyan-900 px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Get in touch!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact