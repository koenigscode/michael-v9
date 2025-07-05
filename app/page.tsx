import Header from "@/sections/header/header";
import Projects from "@/sections/projects/projects";
import About from "./sections/about/about";
import Technologies from "./sections/technologies/technologies";


export default function Home() {
    return <>
        <Header />
        <About />
        <div className="h-16"></div>
        <Projects />
        <div className="h-16"></div>
        <Technologies />
        <div className="h-16"></div>
    </>
}