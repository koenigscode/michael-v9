import Section from "@/components/common/section/section";
import SpringLogo from "@/res/images/spring.svg"
import Image from "next/image"
import NextLogo from "@/res/images/nextjs.svg"
import FlutterLogo from "@/res/images/flutter.svg"
import { StaticImageData } from "next/image"
import React from "react";

interface ITechnology {
    image: StaticImageData
    altText: string
    content: React.ReactNode
}

const technologies = [
    {
        image: SpringLogo,
        altText: "Spring Logo",
        content: <>I've been using <a target="_blank" href="https://spring.io/">Spring</a> since I learnt it in school, and I've learnt to love it over the years
            - the ecosystem is huge, and it's easy to get started with.</>
    },
    {
        image: NextLogo,
        altText: "Next.js Logo",
        content: <>I started my journey into modern web development with Vue.js,
            switched to React.js and now I've been using Next.js for quite a while.
            I love the simplicity of <a target="_blank" href="https://nextjs.org/">Next.js</a>, and how it manages routing, image optimization and more for you.</>
    },
    {
        image: FlutterLogo,
        altText: "Flutter Logo",
        content: <><a target="_blank" href="https://flutter.dev/">Flutter</a> is my framework of choice for building mobile/cross-platform apps.
        </>
    }
]
export default function Technologies() {
    return <Section title="Technologies I'm using">
        <div className="grid md:grid-cols-2 gap-4 gap-y-8 md:gap-y-20">
            {technologies.map((technology: ITechnology, idx: number) =>
                <React.Fragment key={idx}>
                    <div className="flex justify-center items-center">
                        <Image src={technology.image} alt={technology.altText} className="max-w-[50%]" />
                    </div>
                    <div className="flex justify-center items-center w-full text-lg mb-12 md:mb-0 leading-6">
                        <p>{technology.content}</p>
                    </div>
                </React.Fragment>
            )
            }

        </div>
    </Section>
}
