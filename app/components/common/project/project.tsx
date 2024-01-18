"use client"

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DEFAULT_PROJECT, IProject } from "./types"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"

export default function Project(project: IProject) {
  project = { ...DEFAULT_PROJECT, ...project }
  const overlayStyle = {
    background: `
    linear-gradient(to bottom right,rgba(0,0,0,${
      project.darkOverlayIntensity
    }),rgba(0,0,0,${project.darkOverlayIntensity! + 0.1})),
    rgba(${project.color}, ${project.colorOverlayIntensity})
`,
  }
  const backgroundImageStyle = {
    backgroundImage: `url(${project.backgroundImage.src})`,
  }

  return (
    <Dialog>
      <DialogContent
        className={"lg:max-w-screen-lg overflow-y-scroll max-h-screen"}
      >
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.detailedDescription}</DialogDescription>
        </DialogHeader>
      </DialogContent>
      <DialogTrigger>
        <div className="w-full h-full dotted-bg-dimmed rounded-lg">
          <div
            className="relative h-full"
            style={
              project.featured
                ? {
                    boxShadow: `0 0 10px rgb(${project.color}, 1), 0 0 30px rgb(${project.color}, 0.4), 0 0 80px rgb(${project.color}, 0.4)`,
                  }
                : {}
            }
          >
            <div
              className="absolute w-full h-full rounded-lg"
              style={overlayStyle}
            ></div>
            <div
              className="absolute h-full w-full -z-10 blur-sm bg-cover bg-center"
              style={backgroundImageStyle}
            ></div>

            <div className="relative h-full">
              <div
                className={`${
                  project.featured ? "md:p-16" : "md:p-8"
                } p-8 h-full flex flex-col justify-center`}
              >
                <p
                  className={`${
                    project.featured ? "md:text-xl md:mb-4" : "md:text-base"
                  }
                        mb-2 text-xs italic font-semibold lowercase text-white tracking-widest text-left`}
                >
                  {">"} {project.type} | {project.date}
                </p>
                <p
                  className={`${
                    project.featured ? "md:text-4xl md:mb-4" : "md:text-3xl"
                  } mb-2 text-xl font-semibold text-white text-left`}
                  style={{
                    color: `rgb(${project.color})`,
                    textShadow: `0 0 10px rgba(${project.color}, 0.6)`,
                  }}
                >
                  {project.name}
                </p>
                <p
                  className={`${
                    project.featured ? "md:text-lg" : "md:text-base"
                  } text-white mb-4 text-sm leading-6 md:leading-normal text-left md:text-justify`}
                >
                  {project.description}
                </p>
                {project.tags && (
                  <div className="mb-2">
                    <p
                      className={`text-xs uppercase text-white font-bold text-left ${
                        project.featured ? "md:text-base" : "md:text-sm"
                      }`}
                    >
                      {project.tags}
                    </p>
                  </div>
                )}
                <div className="flex">
                  {project.links?.map((item, idx) => (
                    <div key={idx}>
                      <a
                        href={item.href}
                        target="_blank"
                        style={{ color: `rgb(${project.color})` }}
                        className="text-sm md:text-base font-bold"
                      >
                        {item.text}
                      </a>
                      {idx < project.links!.length - 1 && (
                        <span
                          className="text-sm md:text-base font-bold mr-1"
                          style={{ color: `rgb(${project.color})` }}
                        >
                          ,
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
    </Dialog>
  )
}
