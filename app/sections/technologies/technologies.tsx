import Section from "@/components/common/section/section"
import SpringLogo from "@/res/images/spring.svg"
import Image from "next/image"
import NextLogo from "@/res/images/nextjs.svg"
import DockerLogo from "@/res/images/docker-logo-blue.svg"
import PythonLogo from "@/res/images/python-logo-generic.svg"
import FlutterLogo from "@/res/images/flutter.svg"
import { StaticImageData } from "next/image"
import React from "react"

interface ITechnology {
  image: StaticImageData
  altText: string
  content: React.ReactNode
}

const technologies = [
  {
    image: PythonLogo,
    altText: "Python Logo",
    content: (
      <>
        I started using Python around 2018, immediately liked it and decided to
        give a 4h crash course on it at my High School, back in 2019. Since then
        I have mostly been using it for general-purpose programming and ML,
        including scikit-learn.
      </>
    ),
  },
  {
    image: SpringLogo,
    altText: "Spring Logo",
    content: (
      <>
        I've been using Spring Boot (Java) since I learnt it in school, and I've
        learnt to love it over the years - the ecosystem is huge, and it's easy
        to get started with.
      </>
    ),
  },
  {
    image: DockerLogo,
    altText: "Docker Logo",
    content: (
      <>
        In university project teams, I'm usually the one who dockerizes
        everything, especially in larger teams and when working with new
        technologies – it can be a time saver when it comes to locally setting
        up projects on everyone's machine. I'm also running over 15 Docker
        containers for various services on my "home server" (euphemism for "my
        old laptop"), since I believe it makes (re-)deployment easier.
      </>
    ),
  },
]
export default function Technologies() {
  return (
    <Section title="Technologies I'm using">
      <div className="grid md:grid-cols-2 gap-4 gap-y-8 md:gap-y-20">
        {technologies.map((technology: ITechnology, idx: number) => (
          <React.Fragment key={idx}>
            <div className="flex justify-center items-center">
              <Image
                src={technology.image}
                alt={technology.altText}
                className="max-w-[50%]"
              />
            </div>
            <div className="flex justify-center items-center w-full text-lg mb-12 md:mb-0 leading-6">
              <p>{technology.content}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Section>
  )
}
