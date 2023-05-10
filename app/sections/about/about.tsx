import Section from "@/components/common/section/section"

export default function About() {
    return <Section title="About me">
        <p className="text-xl">
            I'm Michael, a software engineering student (BSc) at the
            {" "}<a target="_blank" href="https://www.gu.se/en/study-gothenburg/software-engineering-and-management-bachelors-programme-n1sof">University of Gothenburg</a>{" "}
            with a strong passion for informatics.
            <br />
            I also hold a degree in Informatics from the
            {" "}<a target="_blank" href="https://www.htlstp.ac.at/abteilungen/informatik">HTL St. Pölten</a>{" "}
            in Austria, with a strong focus on software engineering, database design, and network technologies.
            <br /> <br />
            Having a passion for web development, I have experience with modern JavaScript frameworks like <b>Next and React</b>, and I am constantly learning and exploring new technologies, especially since web development is a fast-paced field.
            <br /> <br />
            In my free time, I enjoy working on personal coding projects to enhance my skills.
        </p>
    </Section>
}