import styles from "./projects.module.css";
import sectionStyles from "../section.module.css";
import Project, { IProject } from "@/components/project/project";

import plantBackground from "@/res/images/plants.jpg"
import novellinBackground from "@/res/images/novellin.png"
import collectItBackground from "@/res/images/collectit.jpg"
import codeBackground from "@/res/images/code.jpg"
import ecerBackground from "@/res/images/ecer.png"


const plantStein: IProject = {
    type: "university project",
    date: "2023",
    name: "Plant Stein",
    description: "This project will help people take care of their plants by monitoring the temperature, light and humidity in the room where the plant is and the moisture of the soil. The project will remind people when they should water their plants or change other conditions, which will help them achieve the conditions perfect for the plant.",
    color: "27, 234, 165",
    backgroundImage: plantBackground,
    featured: true,
    tags: "Spring Boot, Flutter, GitLab CI",
    links: [{ href: "#", text: "Video presentation" }, { href: "#", text: "GitHub" },]
}

const novellin: IProject = {
    type: "school diploma thesis",
    date: "2022",
    name: "Novellin",
    description: "My diploma thesis for school was about comparing technologies used to develop mobile, desktop and web apps from one codebase. As a part of the thesis, we developed a prototype for a platform with social media features used to publish books. I was primarily working on the frontend with React Native and Redux.",
    color: "255, 93, 145",
    backgroundImage: novellinBackground,
    gradientOverlayIntensity: 0.55,
    // featured: true,
    tags: "React Native, Redux"
}

const collectIt: IProject = {
    type: "coding",
    date: "2019",
    name: "collectIT - School Open Days",
    description: "Six students of the HTL St. Pölten - including me - decided to make a web app for our school's open days and it was well-received. Guests could go around from booth to booth and were awarded points for doing so. I was responsible for the frontend (React) the visitors interacted with.",
    color: "154, 206, 43",
    backgroundImage: collectItBackground,
    gradientOverlayIntensity: 0.75,
    tags: "React, Express"
}

const personalWebsite: IProject = {
    type: "web dev",
    date: "2023",
    name: "Portfolio Website",
    description: "My personal website built with Next.js. You're on it right now, who could've guessed?",
    color: "255, 80, 70",
    backgroundImage: codeBackground,
    gradientOverlayIntensity: 0.3,
    tags: "Next.js, Tailwind CSS"
}

const ecer: IProject = {
    type: "autonomous drone flying",
    date: "2020",
    name: "ECER 2020",
    description: "We - team vision from ATRIA - were preparing for the ECER 2020 (European Conference on Educational Robotics) in Bratislava. Sadly, due to COVID-19, the event couldn't take place as planned, but we still learnt a lot about ROS (Robot Operating System) and OpenCV to fly drones autonomously.",
    color: "255, 80, 70",
    backgroundImage: ecerBackground,
    // gradientOverlayIntensity: 0.3,
    tags: "Python, ROS, OpenCV"
}

export default function Projects() {
    return <div className={`${sectionStyles.section} w-full flex justify-center`}>
        <div className="w-[80%] max-w-5xl">
            <h1 className="text-6xl font-bold mb-16">My projects</h1>
            <div className="h-12"></div>
            <div className="grid grid-cols-2 gap-4 auto-rows-auto">
                <div className="col-span-2 mb-8">
                    <Project {...plantStein} />
                </div>
                <Project {...novellin} />
                <Project {...collectIt} />
                <Project {...personalWebsite} />
                <Project {...ecer} />
            </div>
        </div>
    </div >
}