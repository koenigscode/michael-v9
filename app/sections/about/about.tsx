import Section from "@/components/common/section/section"

export default function About() {
  return (
    <Section title="About me">
      <p className="text-lg md:text-xl leading-6 md:leading-normal text-left md:text-justify">
        I'm Michael, a BSc graduate in Software Engineering and Management from
        the{" "}
        <a
          target="_blank"
          href="https://www.gu.se/en/study-gothenburg/software-engineering-and-management-bachelors-programme-n1sof"
        >
          University of Gothenburg, Sweden
        </a>{" "}
        (2022-2025) and also hold a degree in Informatics from{" "}
        <a
          target="_blank"
          href="https://www.htlstp.ac.at/abteilungen/informatik"
        >
          HTL St. Pölten, Austria
        </a>{" "}(2016-2021).
        <br /> <br />
        My coding journey started in 2016 with my main interested back then in web development (Vue/React/Next), and over the years I've explored various fields of software development, both as part of formal education and in my free time.
        <br /> <br />
        I currently work at Teachiq AB on{" "}
        <a
          target="_blank"
          href="https://exam.net"
        >
          Exam.net
        </a>         , an online examination platform that enables educators to create and conduct secure digital exams, using Laravel and Vue.js.
        <br /> <br />
      </p>
    </Section>
  )
}
