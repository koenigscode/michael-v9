import { IoLogoInstagram } from "@react-icons/all-files/io5/IoLogoInstagram"
import { IoLogoGithub } from "@react-icons/all-files/io5/IoLogoGithub"
import { IoLogoLinkedin } from "@react-icons/all-files/io5/IoLogoLinkedin"
import styles from "./header.module.css"
import Image from "next/image"
import HeaderPicture from "@/res/images/header.jpg"
import Section from "@/components/common/section/section"


export default function Header() {
    return <div className="h-screen">
        <Section>
            <div className="flex flex-col-reverse md:flex-row items-center h-full w-full">
                <div className='flex flex-col items-center justify-start md:justify-center h-full md:w-1/2'>
                    <h1 className="text-5xl lg:text-7xl font-semibold font-dancing-script">Michael König</h1>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <h2 className='text-4xl font-semibold mb-4 font-dancing-script'>// koenigscode</h2>
                    <div className='flex'>
                        <a target="_blank" href="https://www.linkedin.com/in/koenig-michael/"><IoLogoLinkedin className='p-3 box-content text-[#0077b5]' size={40} /></a>
                        <a target="_blank" href="https://github.com/koenigscode"><IoLogoGithub className="p-3 box-content mainTextColor" size={40} /></a>
                        <a target="_blank" href="https://www.instagram.com/koenigscode/"><IoLogoInstagram className='p-3 box-content text-[#e4405f]' size={40} /></a>
                    </div>
                </div>
                <div className="flex justify-center items-center h-full w-full md:w-7/12">
                    <div className="relative w-7/12 max-w-[12rem] md:max-w-none md:w-1/2 flex justify-start md:justify-center items-start md:items-center hoverable-twist">
                        <Image
                            className="rounded-[2rem] w-[95%] absolute z-10"
                            src={HeaderPicture}
                            alt="Picture of me"
                        />
                        <Image
                            className={`${styles.headerImageBlurred} rounded-[2rem] w-full absolute`}
                            src={HeaderPicture}
                            alt="Picture of me"
                        />
                    </div>
                </div>
            </div>
        </Section>
    </div>

}