import Header from "@/sections/header/header";
import Projects from "@/sections/projects/projects";
import About from "./sections/about/about";


export default function Home() {
    return <>
        <Header />
        <About />
        <Projects />
        <div className="h-8"></div>
    </>
}