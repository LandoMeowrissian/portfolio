import Service from './Service';

const Services = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <Service 
          title="Software Engineering" 
          description="A graduate of BrainStation's Software Development program, I have a strong foundation in OOP, Databases, APIs, experience working with a multidisciplinary team, and cross-collaboration using AGILE methodology. Creative to the core, I’ve enjoyed a long music career employing technology and strong analytical skills to learn quickly on my feet, and my experience in product development pushed me to figure out how to improve processes I proposed."
        />
        <Service 
          title="UX/UI" 
          description="With a solid foundation in research skills honed through my anthropology degree, I am deeply passionate about utilizing technology to enrich user experiences. Possessing a discerning eye for design and a fervent appreciation for innovation, I excel in crafting intuitive interfaces that mesmerize and engage users. Continuously pursuing fresh opportunities to broaden my skill set, I seamlessly integrate a fusion of creativity and technical proficiency into every project."
        />
        <Service 
          title="Audio" 
          description="Long before I was coding, I was making music. I have been playing drums for over 20 years and have over a decade of experience in live production. I am currently at work on the debut full-length album with my band, flossing. I have experience with Ableton Live, Logic Pro, MIDI programming and audio synthesis."
        />
      </div>
      <button className="button">
        <a className="button-link" href="/pages/work.html"> My work</a>
      </button>
    </section>
  );
};

export default Services;
