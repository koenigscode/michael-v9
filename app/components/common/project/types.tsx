import { StaticImageData } from "next/image"

export interface IProjectLink {
    text: string
    href: string
}

export interface IProject {
    type: string
    date: string
    name: string
    description: string
    detailedDescription: React.ReactNode
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