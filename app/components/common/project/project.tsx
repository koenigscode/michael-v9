import { StaticImageData } from "next/image"
import React from "react"

export interface IProjectLink {
    text: string
    href: string
}

export interface IProject {
    type: string
    date: string
    name: string
    description: string
    color: string //rgb, format: "255, 0, 255"
    backgroundImage: StaticImageData
    featured?: boolean // displays the project in bigger size
    darkOverlayIntensity?: number
    colorOverlayIntensity?: number
    img?: string
    text?: React.ReactNode
    links?: IProjectLink[]
    tags?: string
}

export const DEFAULT_PROJECT: Partial<IProject> = {
    darkOverlayIntensity: 0.5,
    colorOverlayIntensity: 0.2,

};


export default function Project(project: IProject) {
    project = { ...DEFAULT_PROJECT, ...project };

    return <div className="w-full dotted-bg-dimmed cursor-pointer rounded-lg hoverable">
        <div className="relative h-full"
            style={project.featured ? {
                boxShadow:
                    `0 0 10px rgb(${project.color}, 1), 0 0 30px rgb(${project.color}, 0.4), 0 0 80px rgb(${project.color}, 0.4)`
            } : {}}
        >
            <div className="absolute w-full h-full rounded-lg"
                style={{
                    background: `
                    linear-gradient(to bottom right,rgba(0,0,0,${project.darkOverlayIntensity}),rgba(0,0,0,${project.darkOverlayIntensity! + 0.1})),
                    rgba(${project.color}, ${project.colorOverlayIntensity})
                `
                }}>
            </div>
            <div className="absolute h-full w-full -z-10 blur-sm bg-cover bg-center" style={{ backgroundImage: `url(${project.backgroundImage.src})` }}></div>

            <div className="relative h-full">
                <div className={`${project.featured ? "p-16" : "p-8"} h-full flex flex-col justify-center`}>
                    <p className={`${project.featured ? "text-xl mb-4" : "text-md mb-2"}
                        italic font-semibold lowercase text-white tracking-widest`}>
                        {">"} {project.type} | {project.date}</p>
                    <p className={`${project.featured ? "text-4xl mb-4" : "text-3xl mb-2"} font-semibold text-white`}
                        style={{
                            color: `rgb(${project.color})`,
                            textShadow: `0 0 10px rgba(${project.color}, 0.6)`
                        }}>
                        {project.name}
                    </p>
                    <p className={`${project.featured ? "text-lg" : "text-md"} text-white mb-4`}>{project.description}</p>
                    {project.tags && <div className="mb-2">
                        <p className={`${project.featured ? "text-md" : "text-sm"} uppercase text-white font-bold`}>{project.tags}</p>
                    </div>}
                    <div className="flex">
                        {
                            project.links?.map((item, idx) => (
                                <div key={idx}>
                                    <a href={item.href}
                                        style={{ color: `rgb(${project.color})` }}>
                                        {item.text}
                                    </a>
                                    {idx < project.links!.length - 1 &&
                                        <span className="text-md font-bold mr-1"
                                            style={{ color: `rgb(${project.color})` }}>,</span>}
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    </div >
}