import aboutImg from '../images/about.jpeg';
import Title from './Title';
const About = () => {
  return (
    <section className="section" id="about">
    <Title title="about" subTitle="us" />
      

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
          Hi everyone, and welcome to Christine Travel Tips. I’m an American-Jamaican travel blogger who been traveling part-time since 2018 with my family and friends. I began Christine Travel Tips to share my love for traveling, nature, and culture. I’ve knocked off some extraordinary experiences from my Bucket List since and challenge individuals to get out and do the same.
          </p>
          <p>
          Traveling do not need to be hard or costly for us to explore and enjoy our majestic world. Our world is too excellent and fascinating not to be investigated.
          </p>
          <a href="#about" className="btn">read more</a>
        </article>
      </div>
    </section>
  )
}

export default About
