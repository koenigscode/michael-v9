export interface ProjectLink {
    text: string
    href: string
}

export interface Project {
    type: string
    date: string
    name: string
    color: string //rgb, format: "255, 0, 255"
    img?: string
    text?: React.ReactNode
    links?: ProjectLink[]
    tags?: Array<string>
}

import bg from "@/res/images/plants.jpg"

export default function Project(project: Project) {
    return <div className="w-full dotted-bg-dimmed hoverable">
        <div className="relative rounded-lg"
            style={{ boxShadow: `0 0 10px rgb(${project.color}, 1), 0 0 80px rgb(${project.color}, 0.4)` }}
        >
            <div className="absolute w-full h-full rounded-lg"
                style={{ background: "linear-gradient(to bottom right,rgba(0,0,0,.4),rgba(0,0,0,.5))" }}>
            </div>
            <div className="absolute h-full w-full -z-10 blur-lg" style={{ background: `url(${bg.src})` }}></div>

            <div className="relative">
                <div className="px-16 py-16">
                    <p className="text-xl italic font-semibold lowercase text-white tracking-widest mb-4">{">"} {project.type} | {project.date}</p>
                    <p className="text-3xl font-semibold text-white mb-4"
                        style={{
                            color: `rgb(${project.color})`,
                            textShadow: `0 0 10px rgba(${project.color}, 0.6)`
                        }}>
                        {project.name}
                    </p>
                    <p className="text-white text-lg mb-4">This project will help people take care of their plants by monitoring the temperature, light and humidity in the room where the plant is and the moisture of the soil. The project will remind people when they should water their plants or change other conditions, which will help them achieve the conditions perfect for the plant.</p>
                    <div className="mb-2">
                        <p className="uppercase text-white font-bold text-md">Spring Boot, Flutter, CI</p>
                    </div>
                    <a href="#"
                        className="underline underline-offset-2 text-md font-bold tracking-wide"
                        style={{ color: `rgb(${project.color})` }}>Video presentation</a>
                </div>
            </div>

        </div>
    </div>
}