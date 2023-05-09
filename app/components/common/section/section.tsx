import sectionStyles from "./section.module.css";

interface ISectionProps {
    children: React.ReactNode
    title?: string
}

export default function Section({ children, title }: ISectionProps) {
    return <div className={`${sectionStyles.section} w-full h-full flex justify-center`}>
        <div className="w-[80%] max-w-5xl h-full">
            {title && <h1 className="text-6xl font-bold my-16">{title}</h1>}
            {children && children}
        </div>
    </div >
}