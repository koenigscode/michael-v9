import { DEFAULT_PROJECT, IProject } from "@/components/common/project/types"

import plantBackground from "@/res/images/plants.jpg"
import novellinBackground from "@/res/images/novellin.png"
import teethBackground from "@/res/images/teeth.jpg"
import collectItBackground from "@/res/images/collectit.jpg"
import plantSteinDiagram from "@/res/images/plant-stein-diagram.png"
import plantSteinLogo from "@/res/images/plant-stein-logo.png"
import entoothiastLogo from "@/res/images/entoothiast-logo.png"
import codeBackground from "@/res/images/code.jpg"
import wasubbyBackground from "@/res/images/wasubby.png"
import entoothiastComponentDiagram from "@/res/images/entoothiast-component-diagram.svg"
import ecerBackground from "@/res/images/ecer.png"
import React from "react"
import Section from "@/components/common/section/section"
import Project from "@/components/common/project/project"
import Image from "next/image"

const projects: IProject[] = [
  {
    name: "Entoothiast",
    type: "university project",
    date: "2023-24",
    description:
      "A distributed system consisting of several services split across 8 repos. The middleware services, communicating via MQTT, are further abstracted by an API gateway to make the API easier to consume for the two frontends.",
    detailedDescription: (
      <>
        <div className="flex flex-col items-center gap-16">
          <Image src={entoothiastLogo} alt="Entoothiast logo" height={300} />
          Entoothiast was developed as part of a university project and is a
          distributed system consisting of several services split across 8
          repos, to book and manage dentist appointments.
          <br />
          <br />
          The scheduling, logging, authentication and statistics service
          implement the main business logic, and an API gateway abstracts the
          previous services via a REST API, which is consumed by the Patient UI
          (Vue.js web app) and a Dentist UI (CLI written in JavaScript).
          <br />
          <br />
          My job was mainly to design and set up the system's architecture
          (using pm2 and Docker), making it horizontally scalable, and to
          implement the booking functionality and authentication service.
          <br />
          <br />
          We used the GitLab CI for automatically running integration tests that
          cover all backend services. We also conducted load tests on the system
          using locust to identify bottlenecks.
          <Image
            src={entoothiastComponentDiagram}
            alt={"Entoothiast component diagram"}
          />
        </div>
      </>
    ),
    color: "194, 175, 217",
    backgroundImage: teethBackground,
    featured: true,
    tags: "Distributed Systems, Express.js, MQTT, Vue.js, GitLab CI, Load testing",
    links: [],
  },
  {
    name: "Plant Stein",
    type: "university project",
    date: "2023",
    description:
      "A plant surveillance system that monitors your plants and notifies you when the plant isn't happy. Happy plant - happy you!",
    detailedDescription: (
      <>
        <div className="flex flex-col items-center gap-16">
          <Image src={plantSteinLogo} alt="Plant Stein logo" height={300} />
          We developed Plant Stein as a part of our university project, in an
          agile team of 6 people. It's a plant surveillance system that monitors
          temperature, humidity, brightness and soil moisture of your plants and
          notifies you when the plant isn't happy.
          <br />
          <br />
          The frontend is developed in Flutter, and the backend uses Spring Boot
          for the REST API and the database (using JPA). MQTT is used for
          receiving data from the microcontroller.
          <Image src={plantSteinDiagram} alt="Plant Stein component diagram" />
        </div>
      </>
    ),
    color: "27, 234, 165",
    backgroundImage: plantBackground,
    featured: true,
    tags: "Spring Boot, Flutter, Microcontroller, GitLab CI",
    links: [
      { text: "Video presentation", href: "https://youtu.be/81Tw_L5ifvU" },
    ],
  },
  {
    name: "WaSubby",
    type: "university project",
    date: "2023",
    description:
      "A web app for transcribing video/audio files and translating them into English.",
    detailedDescription: (
      <>
        WaSubby, built as part of a university project, is a web app that allows
        the user to transcribe video or audio files in their original language
        and translates the generated subtitles into English as well. The media
        can then be watched/listened to with the subtitles in both languages,
        which can be used for learning a new language.
        <br />
        <br />
        The backend uses OpenAI whisper, an AI-powered library for media file
        transcription.
      </>
    ),
    color: "184, 239, 136",
    backgroundImage: wasubbyBackground,
    darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! + 0.2,
    tags: "OpenAI whisper, Vue.js, Express, REST",
  },
  {
    name: "Portfolio Website",
    type: "web dev",
    date: "2023",
    description:
      "My personal website built with Next.js. Yes, you're on it right now!",
    detailedDescription:
      "The current and 9th iteration of my personal website built with Next.js and Tailwind CSS.",
    color: "255, 109, 104",
    backgroundImage: codeBackground,
    darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! - 0.1,
    tags: "Next.js, Tailwind CSS",
    links: [
      {
        text: "Source Code",
        href: "https://github.com/koenigscode/michael-v9",
      },
    ],
  },
  {
    name: "Novellin",
    type: "school diploma thesis",
    date: "2022",
    description:
      "My diploma thesis + project from school comparing different approaches and technologies on how to develop mobile, desktop and web apps from a single codebase.",
    detailedDescription: (
      <>
        My diploma thesis in school was about comparing technologies used to
        develop mobile, desktop and web apps from one codebase. As a part of the
        thesis, we developed a prototype for a platform with social media
        features used to publish books.
        <br />
        <br />I was primarily working on the frontend with React Native and
        Redux.
      </>
    ),
    color: "255, 90, 145",
    backgroundImage: novellinBackground,
    darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! + 0.2,
    // featured: true,
    tags: "React Native, Redux",
  },
  {
    name: "ECER 2020",
    type: "autonomous drone flying",
    date: "2020",
    description:
      "In preparation for the ECER 2020, we programmed drones to fly autonomously using OpenCV.",
    detailedDescription:
      "We - team vision from ATRIA - were preparing for the ECER 2020 (European Conference on Educational Robotics) in Bratislava. Sadly, due to COVID-19, the event couldn't take place as planned, but we still learnt a lot about ROS (Robot Operating System) and OpenCV to fly drones autonomously.",
    color: "106, 149, 255",
    backgroundImage: ecerBackground,
    tags: "Python, ROS, OpenCV",
    links: [{ text: "PRIA ECER", href: "https://pria.at/en/ecer/" }],
  },
  {
    name: "collectIT - School Open Days",
    type: "coding",
    date: "2019",
    description:
      "A web app for our school's open days. Guests could go around from booth to booth and scan + collect QR codes and were awarded points for doing so.",
    detailedDescription:
      "Six students of the HTL St. Pölten - including me - decided to make a web app for our school's open days and it was well-received. Guests could go around from booth to booth and scan + collect QR codes and were awarded points for doing so. I was responsible for the frontend (React) the visitors interacted with.",
    color: "154, 206, 43",
    backgroundImage: collectItBackground,
    darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! + 0.15,
    tags: "React, Express",
  },
]

export default function Projects() {
  return (
    <Section title="My projects">
      <div className="grid lg:grid-cols-2 gap-4 auto-rows-auto">
        {projects
          .filter((project) => project.featured)
          .map((project, idx) => (
            <div key={idx} className="lg:col-span-2 lg:mb-4">
              <Project {...project}></Project>
            </div>
          ))}
        {projects
          .filter((project) => !project.featured)
          .map((project, idx) => (
            <React.Fragment key={idx}>
              <Project {...project}></Project>
            </React.Fragment>
          ))}
      </div>
    </Section>
  )
}
