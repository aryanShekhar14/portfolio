import React from 'react'
import notebook from "../assets/portfolio/notebook.png"
import newsknock from "../assets/portfolio/newsknock.png"
import helptext from "../assets/portfolio/hep_text.png"
import dataset from "../assets/portfolio/dataset.png"
import chitchat from "../assets/portfolio/chit_chat.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chitchat,
      github: "https://github.com/aryanShekhar14/chit_chat",
      website:"https://chit-chat-84zh.onrender.com"

    },
    {
      id: 2,
      src: newsknock,
      github: "https://github.com/aryanShekhar14/newsknock"

    },
    {
      id: 3,
      src: notebook,
      github: "https://github.com/aryanShekhar14/untitled_notebook"

    },
    {
      id: 4,
      src: dataset,
      github: "https://github.com/aryanShekhar14/wiki_scrap"

    },
    {
      id: 5,
      src: helptext,
      github: "https://github.com/aryanShekhar14/help_text",
      website: "https://aryanshekhar14.github.io/help_text/"

    },

  ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 h-full w-full text-white">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-20'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>These are my projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {
            portfolios.map(({ id, src, github, website }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img className="rounded-md duration-200 hover:scale-105" src={src} alt="" />
                <div className="flex items-center justify-center">
                  <button className=" flex-1 px-6 py-3 m-4 duration-500 hover:scale-105" onClick={() => window.open(github, "_blank")}>Github</button>
                  {website && <button className=" flex-1 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(website, "_blank")}>Website</button>}
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Portfolio