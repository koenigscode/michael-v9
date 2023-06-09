"use client";

import React, { useEffect, useState } from "react"
import Modal from "react-modal";
import { DEFAULT_PROJECT, IProject } from "./types";
import { IoCloseCircle } from "@react-icons/all-files/io5/IoCloseCircle"


export default function Project(project: IProject) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (modalIsOpen)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "unset";
    }, [modalIsOpen]);

    project = { ...DEFAULT_PROJECT, ...project };
    const overlayStyle = {
        background: `
    linear-gradient(to bottom right,rgba(0,0,0,${project.darkOverlayIntensity}),rgba(0,0,0,${project.darkOverlayIntensity! + 0.1})),
    rgba(${project.color}, ${project.colorOverlayIntensity})
`
    }
    const backgroundImageStyle = { backgroundImage: `url(${project.backgroundImage.src})` }

    return <>
        <div className="w-full dotted-bg-dimmed rounded-lg"
        // onClick={() => { setModalIsOpen(true) }}
        >
            <div className="relative h-full"
                style={project.featured ? {
                    boxShadow: `0 0 10px rgb(${project.color}, 1), 0 0 30px rgb(${project.color}, 0.4), 0 0 80px rgb(${project.color}, 0.4)`
                } : {}}
            >
                <div className="absolute w-full h-full rounded-lg"
                    style={overlayStyle}>
                </div>
                <div className="absolute h-full w-full -z-10 blur-sm bg-cover bg-center" style={backgroundImageStyle}></div>

                <div className="relative h-full">
                    <div className={`${project.featured ? "md:p-16" : "md:p-8"} p-8 h-full flex flex-col justify-center`}>
                        <p className={`${project.featured ? "md:text-xl md:mb-4" : "md:text-base"}
                        mb-2 text-xs italic font-semibold lowercase text-white tracking-widest text-left`}>
                            {">"} {project.type} | {project.date}</p>
                        <p className={`${project.featured ? "md:text-4xl md:mb-4" : "md:text-3xl"} mb-2 text-xl font-semibold text-white`}
                            style={{
                                color: `rgb(${project.color})`,
                                textShadow: `0 0 10px rgba(${project.color}, 0.6)`
                            }}>
                            {project.name}
                        </p>
                        <p className={`${project.featured ? "md:text-lg" : "md:text-base"} text-white mb-4 text-sm leading-6 md:leading-normal text-left md:text-justify`}>{project.description}</p>
                        {project.tags && <div className="mb-2">
                            <p className={`text-xs uppercase text-white font-bold text-left ${project.featured ? "md:text-base" : "md:text-sm"}`}>{project.tags}</p>
                        </div>}
                        <div className="flex">
                            {project.links?.map((item, idx) => (
                                <div key={idx}>
                                    <a href={item.href}
                                        target="_blank"
                                        style={{ color: `rgb(${project.color})` }}
                                        className="text-sm md:text-base font-bold">
                                        {item.text}
                                    </a>
                                    {idx < project.links!.length - 1 &&
                                        <span className="text-sm md:text-base font-bold mr-1"
                                            style={{ color: `rgb(${project.color})` }}>,</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* TODO: Remove content.position: absolute on mobile */}
        {/* <Modal isOpen={modalIsOpen} style={{ content: { position: "static", margin: 0, padding: 0, zIndex: 10, border: "none", height: "fit-content", width: "85%", }, overlay: { overflowY: "auto", display: "flex", justifyContent: "center", alignItems: "center" } }}
            onRequestClose={() => { setModalIsOpen(false) }}>
            <div className="w-full dotted-bg-dimmed relative">
                <IoCloseCircle
                    size={46}
                    className="right-0 top-0 p-4 absolute box-content text-white cursor-pointer z-50"
                    onClick={() => { setModalIsOpen(false) }} />
                <div className="relative h-full">
                    <div className="absolute w-full h-full"
                        style={overlayStyle}>
                    </div>
                    <div className="absolute h-full w-full -z-40 blur-sm bg-cover bg-center" style={backgroundImageStyle}></div>

                    <div className="relative h-full text-white p-12">
                        <p className="text-xl mb-2 italic font-semibold lowercase text-white tracking-widest">
                            {">"} {project.type} | {project.date}</p>
                        <p className="text-6xl font-semibold text-white mb-4"
                            style={{
                                color: `rgb(${project.color})`,
                                textShadow: `0 0 10px rgba(${project.color}, 0.6)`
                            }}>
                            {project.name}
                        </p>
                        <p className="text-lg text-white mb-4">{project.detailedDescription}</p>

                    </div>
                </div>
            </div>
        </Modal> */}
    </>
}