import { DEFAULT_PROJECT, IProject } from "@/components/common/project/types"

import plantBackground from "@/res/images/plants.jpg"
import novellinBackground from "@/res/images/novellin.png"
import teethBackground from "@/res/images/teeth.jpg"
import aslBackground from "@/res/images/asl.jpg"
import thesisBackground from "@/res/images/thesis.jpg"
import carBackground from "@/res/images/car.jpg"
import collectItBackground from "@/res/images/collectit.jpg"
import plantSteinDiagram from "@/res/images/plant-stein-diagram.png"
import carDiagram from "@/res/images/car-diagram.svg"
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
    name: "Feature Store Library with Built-in Data Cleaning Support",
    type: "Bachelor's Thesis",
    date: "2025 (ongoing)",
    description:
      "Exploring how Feature Stores can utilize built-in Data Cleaning to serve features in their optimal representation for each consuming model type, by building a Python library.",
    detailedDescription: (
      <>
        <div className="flex flex-col items-center gap-16">
          Feature Engineering plays a critical role in the success of a Machine
          Learning project, leading to the rise of Feature Stores, which allow
          features to be shared on an enterprise-level, across several Machine
          Learning pipelines.
          <br />
          <br />
          Current solutions have different drawbacks, and this paper will focus
          on adding feature optimization to Feature Stores by integrating Data
          Cleaning into Feature Stores.
          <br></br>
          <br></br>
          This will be implemented as a Feature Store library as part of Design
          Science Research, and will explore how to serve features in their
          optimal pre-processed representation for different Machine Learning
          models. The paper investigates the effect of the developed library on
          developer efficiency, extensibility and completeness of the proposed
          solution.
        </div>
      </>
    ),
    color: "200, 230, 255",
    backgroundImage: thesisBackground,
    colorOverlayIntensity: DEFAULT_PROJECT.colorOverlayIntensity! + 0.5,
    // darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! - 0.1,
    featured: true,
    tags: "Machine Learning, Feature Stores, Data Cleaning",
    links: [],
  },
  {
    name: "Autonomous Driving",
    type: "university project",
    date: "2024",
    description:
      'We received "live" sensor data + a video feed from a model car and had to predict the steering direction.',
    detailedDescription: (
      <>
        <div className="flex flex-col items-center gap-16">
          We received "live" sensor data + a video feed from a model car and had
          to predict the steering direction. During the project we realized that
          the video feed isn't as promising as the thought, and decided to only
          rely on sensor values.
          <br></br>
          <br></br>
          The ML model was a Random Forest Regressor, tuned with Grid Search,
          and stacked with Linear Regression. We experimented a lot, and this
          gave us the best results. Since the course's codebase was provided in
          C++, but we had felt that sci-kit learn was a good fit for us, we
          exported the model as an ONNX model, and then used that ONNX model in
          C++ for inference.
          <br></br>
          <br></br>
          The following component diagram shows the architecture: The Vehicle
          View component provides the video frames to the H264 Decoder Service,
          which puts them into shared memory, so the Steering Service (which
          does the predictions) can access them. The Steering Service
          (implemented in C++) uses the ONNX model, which was
          implemented/trained in Python using sk-learn.
          <Image
            src={carDiagram}
            alt="Autonomous Driving System Architecture"
          />
        </div>
      </>
    ),
    color: "230, 170, 60",
    backgroundImage: carBackground,
    colorOverlayIntensity: DEFAULT_PROJECT.colorOverlayIntensity! + 0.4,
    darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! - 0.15,
    tags: "Machine Learning, sk-learn, C++, Python",
    links: [],
  },
  {
    name: "ASL Project",
    type: "university project",
    date: "2024-25",
    description:
      "An educational tool that can be used to increase ASL literacy. The user is presented with how the words are signed, and has to sign the prompted word to practice their newly acquired knowledge.",
    detailedDescription: (
      <>
        <div className="flex flex-col items-center gap-16">
          This application helps users practice signing words in ASL. The user
          is presented with how the words are signed, and has to sign the
          prompted word to practice their newly acquired knowledge. The user can
          choose whether they want to see an instruction video on how to sign a
          word, or if they want to practice without any help. The app then gives
          feedback on whether the word was signed correctly or not. The goal of
          this system is to be an educational tool that can be used to increase
          ASL literacy by providing an easy to use environment for learning.
          <br />
          <br />
          The application was implemented as a Django project, and using
          Tensorflow. First, we used a pretrained model for Google's MediaPipe,
          to extract handmarker positions (coordinates) from the user's hands,
          and then we used an LSTM model, using TensorFlow, to classify the
          (ASL) sign.
          <br /> <br />I fully developed the frontend, and sent the video
          recording (from the browser) to the backend, where I ran inference on
          it. For faster training and inference, as well as to make sure the
          video format sent from the browser is compatible with the ML model, I
          re-encoded the videos on the backend using ffmpeg - to make sure we
          always work with the same codec (and video container) and the
          framerate was adjusted, since ~24 fps are not needed and only slow
          down the ML pipeline. I also contributed to the ML model, especially
          the data preprocessing.
        </div>
      </>
    ),
    color: "120, 140, 240",
    backgroundImage: aslBackground,
    colorOverlayIntensity: DEFAULT_PROJECT.colorOverlayIntensity! + 0.4,
    // darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! - 0.1,
    featured: true,
    tags: "Machine Learning, Tensorflow, Keras, Django",
    links: [],
  },
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
    colorOverlayIntensity: DEFAULT_PROJECT.colorOverlayIntensity! + 0.4,
    // darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! + 0.1,
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
    colorOverlayIntensity: DEFAULT_PROJECT.colorOverlayIntensity! + 0.2,
    darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! - 0.2,
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
    colorOverlayIntensity: DEFAULT_PROJECT.colorOverlayIntensity! + 0.4,
    // darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! + 0.1,
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
    colorOverlayIntensity: DEFAULT_PROJECT.colorOverlayIntensity! + 0.3,
    darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! - 0.1,
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
    colorOverlayIntensity: DEFAULT_PROJECT.colorOverlayIntensity! + 0.4,
    // darkOverlayIntensity: DEFAULT_PROJECT.darkOverlayIntensity! + 0.15,
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
