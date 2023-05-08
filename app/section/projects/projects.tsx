import styles from "./projects.module.css";
import sectionStyles from "../section.module.css";
import Project from "@/components/project/project";

export default function Projects() {
    return <div className={`${sectionStyles.section} w-full flex justify-center`}>
        <div className="w-[80%] max-w-5xl">
            <h1 className="text-6xl font-bold mb-12">My projects</h1>
            <Project type="university project" date="2023" name="Plant Stein" color="27, 234, 165" ></Project>
            <div className="h-[50vh]"></div>
        </div>
    </div>
}