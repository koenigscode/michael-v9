import Section from "@/components/common/section/section"

export default function About() {
  return (
    <Section title="About me">
      <p className="text-lg md:text-xl leading-6 md:leading-normal text-left md:text-justify">
        I'm Michael, a Bsc graduate in Software Engineering and Management from
        the{" "}
        <a
          target="_blank"
          href="https://www.gu.se/en/study-gothenburg/software-engineering-and-management-bachelors-programme-n1sof"
        >
          University of Gothenburg, Sweden
        </a>{" "}
        (2022-2025) with a strong passion for Informatics.
        <br />I also hold a degree in Informatics from the{" "}
        <a
          target="_blank"
          href="https://www.htlstp.ac.at/abteilungen/informatik"
        >
          HTL St. Pölten, Austria
        </a>{" "}
        (2016-2021) , with a strong focus on software engineering, database
        design, and network technologies.
        <br /> <br />
        My coding journey began in 2016, and by 2017, I discovered an interest
        in web development, a passion I followed for several years
        (Vue/React/Next). Over the years, I have explored various other fields
        of software development, leading me to shift my main interest from
        frontend to backend development.
        <br /> <br />
        Apart from Software Engineering, I enjoy language learning (currently
        Swedish ~B2 and Russian ~A2), brewing beer/kombucha/mead/etc, and making
        espresso.
      </p>
    </Section>
  )
}
