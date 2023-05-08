import { IoLogoInstagram } from "@react-icons/all-files/io5/IoLogoInstagram"
import { IoLogoGithub } from "@react-icons/all-files/io5/IoLogoGithub"
import { IoLogoLinkedin } from "@react-icons/all-files/io5/IoLogoLinkedin"
import styles from "./header.module.css"
import sectionStyles from "../section.module.css"
import Image from "next/image"
import HeaderPicture from "@/res/images/header.jpg"


export default function Header() {
    return (
        <header className={`${sectionStyles.section} h-screen flex justify-center items-center header`}>
            <div className="flex flex-row w-[85%] h-full">
                <div className='flex flex-col items-center justify-center h-full w-1/2'>
                    <h1 className="text-7xl font-semibold font-dancing-script">Michael König</h1>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <h2 className='text-4xl font-semibold mb-4 font-dancing-script'>// koenigscode</h2>
                    <div className='flex'>
                        <a href="" ><IoLogoInstagram className='p-3 box-content' size={40} /></a>
                        <a href=""><IoLogoLinkedin className='p-3 box-content' size={40} /></a>
                        <a href=""><IoLogoGithub className="p-3 box-content" size={40} /></a>
                    </div>
                </div>
                <div className="flex justify-center items-center h-full w-1/2 relative">
                    <Image
                        className="rounded-[2rem] w-1/2 absolute z-10"
                        src={HeaderPicture}
                        alt="Picture of me"
                    />
                    <Image
                        className={`${styles.headerImageBlurred} rounded-[2rem] w-[55%] absolute`}
                        src={HeaderPicture}
                        alt="Picture of me"
                    />
                </div>
            </div>
        </header>
    )
}