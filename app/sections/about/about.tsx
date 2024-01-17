import Section from "@/components/common/section/section"

export default function About() {
  return (
    <Section title="About me">
      <p className="text-lg md:text-xl leading-6 md:leading-normal text-left md:text-justify">
        I'm Michael, a Software Engineering and Management student (BSc) at the{" "}
        <a
          target="_blank"
          href="https://www.gu.se/en/study-gothenburg/software-engineering-and-management-bachelors-programme-n1sof"
        >
          University of Gothenburg, Sweden
        </a>{" "}
        with a strong passion for Informatics.
        <br />I also hold a degree in Informatics from the{" "}
        <a
          target="_blank"
          href="https://www.htlstp.ac.at/abteilungen/informatik"
        >
          HTL St. Pölten, Austria
        </a>{" "}
        , with a strong focus on software engineering, database design, and
        network technologies.
        <br /> <br />
        In my free time, I enjoy working on personal coding projects to enhance
        my skills.
      </p>
    </Section>
  )
}
