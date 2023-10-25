import { DEFAULT_PROJECT, IProject } from "@/components/common/project/types";

import plantBackground from "@/res/images/plants.jpg"
import novellinBackground from "@/res/images/novellin.png"
import collectItBackground from "@/res/images/collectit.jpg"
import codeBackground from "@/res/images/code.jpg"
import wasubbyBackground from "@/res/images/wasubby.png"
import ecerBackground from "@/res/images/ecer.png"
import React from "react";
import Section from "@/components/common/section/section";
import Project from "@/components/common/project/project";

const projects: IProject[] = [
    {
        name: "Plant Stein",
        type: "university project",
        date: "2023",
        description: "We developed Plant Stein as a part of our university project, in an agile team of 6 people. It's a plant surveillance system that monitors temperature, humidity, brightness and soil moisture of your plants and notifies you when the plant isn't happy. Happy plant - happy you!",
        detailedDescription: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptate corrupti delectus qui ut pariatur, voluptatibus aliquid sequi laudantium iure blanditiis! Adipisci debitis deleniti voluptatem obcaecati quam similique voluptas sapiente!.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptate corrupti delectus qui ut pariatur, voluptatibus aliquid sequi laudantium iure blanditiis! Adipisci debitis deleniti voluptatem obcaecati quam similique voluptas sapiente!Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptate corrupti delectus qui ut pariatur, voluptatibus aliquid sequi laudantium iure blanditiis! Adipisci debitis deleniti voluptatem obcaecati quam similique voluptas sapiente!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptate corrupti delectus qui ut pariatur, voluptatibus aliquid sequi laudantium iure blanditiis! Adipisci debitis deleniti voluptatem obcaecati quam similique voluptas sapiente!Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptate corrupti delectus qui ut pariatur, voluptatibus aliquid sequi laudantium iure blanditiis! Adipisci debitis deleniti voluptatem obcaecati quam similique voluptas sapiente!</>,


        color: "27, 234, 165",
        backgroundImage: plantBackground,
        featured: true,
        tags: "Spring Boot, Flutter, Microcontroller, GitLab CI",
        links: [{ text: "Video presentation", href: "https://youtu.be/81Tw_L5ifvU" },]
    },
    {
        name: "WaSubby",
        type: "university project",
        date: "2023",
        description: "WaSubby is a web app that allows the user to transcribe video or audio files in their original language and translates the generated subtitles into English as well. The media can then be watched/listened to with the subtitles in both languages, aiding the user in learning a new language.",
        detailedDescription: "TODO:",
        color: "184, 239, 136",
        backgroundImage: wasubbyBackground,
        darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! + 0.2,
        tags: "OpenAI whisper, Vue.js, Express, REST",
    },
    {
        name: "Portfolio Website",
        type: "web dev",
        date: "2023",
        description: "My personal website built with Next.js. Yes, you're on it right now!",
        detailedDescription: "TODO:",
        color: "255, 109, 104",
        backgroundImage: codeBackground,
        darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! - 0.1,
        tags: "Next.js, Tailwind CSS",
        links: [{ text: "Source Code", href: "https://github.com/koenigscode/michael-v9" }],
    },
    {
        name: "Novellin",
        type: "school diploma thesis",
        date: "2022",
        description: "My diploma thesis in school was about comparing technologies used to develop mobile, desktop and web apps from one codebase. As a part of the thesis, we developed a prototype for a platform with social media features used to publish books. I was primarily working on the frontend with React Native and Redux.",
        detailedDescription: "TODO:",
        color: "255, 90, 145",
        backgroundImage: novellinBackground,
        darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! + 0.2,
        // featured: true,
        tags: "React Native, Redux"
    },
    {
        name: "ECER 2020",
        type: "autonomous drone flying",
        date: "2020",
        description: "We - team vision from ATRIA - were preparing for the ECER 2020 (European Conference on Educational Robotics) in Bratislava. Sadly, due to COVID-19, the event couldn't take place as planned, but we still learnt a lot about ROS (Robot Operating System) and OpenCV to fly drones autonomously.",
        detailedDescription: "TODO:",
        color: "106, 149, 255",
        backgroundImage: ecerBackground,
        tags: "Python, ROS, OpenCV",
        links: [{ text: "PRIA ECER", href: "https://pria.at/en/ecer/" }],
    },
    {
        name: "collectIT - School Open Days",
        type: "coding",
        date: "2019",
        description: "Six students of the HTL St. Pölten - including me - decided to make a web app for our school's open days and it was well-received. Guests could go around from booth to booth and were awarded points for doing so. I was responsible for the frontend (React) the visitors interacted with.",
        detailedDescription: "TODO:",
        color: "154, 206, 43",
        backgroundImage: collectItBackground,
        darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! + 0.15,
        tags: "React, Express",
    },
]

export default function Projects() {
    return <Section title="My projects">
        <div className="grid lg:grid-cols-2 gap-4 auto-rows-auto">
            {
                projects.filter(project => project.featured).map((project, idx) => <div key={idx} className="lg:col-span-2 lg:mb-4">
                    <Project {...project}></Project>
                </div>
                )
            }
            {
                projects.filter(project => !project.featured).map((project, idx) => <React.Fragment key={idx}>
                    <Project {...project}></Project>
                </React.Fragment>
                )
            }
        </div>
    </Section>

}