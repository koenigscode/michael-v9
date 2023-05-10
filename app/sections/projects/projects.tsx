import { DEFAULT_PROJECT, IProject } from "@/components/common/project/types";

import plantBackground from "@/res/images/plants.jpg"
import novellinBackground from "@/res/images/novellin.png"
import collectItBackground from "@/res/images/collectit.jpg"
import codeBackground from "@/res/images/code.jpg"
import ecerBackground from "@/res/images/ecer.png"
import React from "react";
import Section from "@/components/common/section/section";
import Project from "@/components/common/project/project";

const projects: IProject[] = [
    {
        name: "Plant Stein",
        type: "university project",
        date: "2023",
        description: "This prototype will help people take care of their plants by monitoring the temperature, light and humidity in the room where the plant is and the moisture of the soil. The project will remind people when they should water their plants or change other conditions, which will help them achieve the conditions perfect for the plant.",
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
        tags: "Spring Boot, JPA/Hibernate, Flutter, GitLab CI",
        links: [{ href: "#", text: "Video presentation" }, { href: "#", text: "GitHub" },]
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
        name: "Portfolio Website",
        type: "web dev",
        date: "2023",
        description: "My personal website built with Next.js. You're on it right now, who could've guessed?",
        detailedDescription: "TODO:",
        color: "255, 109, 104",
        backgroundImage: codeBackground,
        darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! - 0.1,
        tags: "Next.js, Tailwind CSS"
    },
    {
        name: "ECER 2020",
        type: "autonomous drone flying",
        date: "2020",
        description: "We - team vision from ATRIA - were preparing for the ECER 2020 (European Conference on Educational Robotics) in Bratislava. Sadly, due to COVID-19, the event couldn't take place as planned, but we still learnt a lot about ROS (Robot Operating System) and OpenCV to fly drones autonomously.",
        detailedDescription: "TODO:",
        color: "106, 149, 255",
        backgroundImage: ecerBackground,
        tags: "Python, ROS, OpenCV"
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
        <div className="grid grid-cols-2 gap-4 auto-rows-auto">
            {
                projects.filter(project => project.featured).map((project, idx) => <div key={idx} className="col-span-2 mb-4">
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