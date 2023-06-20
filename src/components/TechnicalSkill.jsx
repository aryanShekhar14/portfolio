import React from 'react'
import bootstrap from "../assets/bootstrap.png"
import css from "../assets/css.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import java from "../assets/java.png"
import javascript from "../assets/javascript.png"
import mongo from "../assets/mongo.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"

const TechnicalSkill = () => {
    const tech = [
        {
            id: 1,
            src: react,
            title: "React Js",
            style: "shadow-sky-500"
        },
        {
            id: 2,
            src: mongo,
            title: "MongoDB",
            style: "shadow-green-600"
        },
        {
            id: 3,
            src: node,
            title: "Node Js",
            style: "shadow-green-600"
        },
        {
            id: 4,
            src: java,
            title: "Java",
            style: "shadow-sky-600"
        },
        {
            id: 5,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 6,
            src: css,
            title: "CSS",
            style: "shadow-blue-600"
        },
        {
            id: 7,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-400"
        },
        {
            id: 8,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-600"
        },
        {
            id: 9,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-500"
        },
        {
            id: 10,
            src: github,
            title: "Github",
            style: "shadow-gray-50"
        },

    ]
    return (
        <div
      name="technical skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white py-20">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technical Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default TechnicalSkill