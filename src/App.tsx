import "./app.css";
import latifah from "./assets/latifah.jpg";
import latifah1 from "./assets/latifah_1.jpg";
import latifah2 from "./assets/latifah_2.jpg";
import twitter from "./assets/twitter-logojpg.jpg";
import linkedin from "./assets/linkedin-logo.png";
import instagram from "./assets/instagram-logo.png";

function App() {
  return (
    <>
      <div className="portfolio__header">
        <div className="portfolio__links">
          <a href="Resume.pdf">Resume</a>
          <a href="cover-letter.pdf">Cover Letter</a>
        </div>
        <button>Hire Me</button>
      </div>
      <section className="main">
        <div className="main-text">
          <h1>
            Hi, I'm Latifah <br /> Kayisime.
          </h1>
          <p>
            Throughout my work experience, I have demonstrated high motivation,
            work ethic, and teamwork to achieve my goals. At 22, I am proud of
            my achievements and embrace opportunities that broaden my learning
            perspective to better myself.
          </p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/latifah-kayisime-58b30026b/">
              <img className="logo linkedin" src={linkedin} alt="" />
            </a>
            <a href="#">
              <img className="logo twitter" src={twitter} alt="" />
            </a>
            <a href="#">
              <img className="logo instagram" src={instagram} alt="" />
            </a>
          </div>
          <button className="cta">Text me</button>
        </div>
        <img
          className="latifah-picture"
          src={latifah}
          alt="Picture-of-Latifah"
        />
      </section>

      <section className="about-me">
        <h2>About Me</h2>
        <div className="content">
          <img className="latifah-mini" src={latifah} alt="face" />
          <div className="about-me-text">
            <p className="primary">
              Passionate, driven entrepreneur with a deep-rooted love for
              planetary health. From a strong academic foundation in
              Mathematics, Physics, and Geography to a proactive role as a
              customer care representative at Connexteck, bridging language
              barriers for Canadian clients. Eagerly awaiting the Giants of
              Africa Festival Youth Internship, having previously assisted the
              Africa Soft Power Summit podcast. Prior experience includes
              collaborating with Stanford University on vital data collection
              and enriching sales acumen in a Handcraft Shop. A history
              enthusiast who, in 2018, spearheaded a team at R.A.L.C. to curate
              Rwanda's historical gems into a new library.
            </p>

            <p className="secondary">
              <strong>My Skills include:</strong> Customer Service - Language
              Proficiency - Interpersonal Communication - Project Management -
              Cultural Awareness - Data Collection - Sales and Marketing -
              Research and Analysis - Adaptability - Academic Excellence -
              Leadership - Problem Solving. These skills collectively contribute
              to the individual's well-rounded profile and ability to excel in
              various roles and contexts.
            </p>
          </div>
        </div>
      </section>

      <section className="talent-section">
        <h2>My Talents</h2>
        <div className="talents">
          <div className="talent one">
            <img src={latifah} alt="talent picture" />
            <br />
            <span className="talent-name">Multilingual Proficiency</span>
            <br />
            <p>
              Ability to communicate fluently in both English and French is a
              valuable talent, enabling effective interaction with a diverse
              range of clients and collaborators.
            </p>
          </div>
          <div className="talent two">
            <img src={latifah} alt="talent picture" />
            <br />
            <span className="talent-name">Project Management</span>
            <br />
            <p>
              Experienced in leading a team of interns and organizing historical
              documents for a library demonstrates strong leadership and project
              management skills.
            </p>
          </div>
          <div className="talent three">
            <img src={latifah} alt="talent picture" />
            <br />
            <span className="talent-name">Customer Engagement and Sales</span>
            <br />
            <p>
              Performance as a customer care representative and salesperson,
              along with their capacity to present, promote, and sell products
              and services, highlights a talent for engaging with customers,
              understanding their needs, and driving successful sales outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <h2>My Past Experience</h2>
        <div className="experiences">
          <div className="experience one">
            <img src={latifah} alt="Work Picture" />
            <span>Africa Soft power Summit</span>
            <a href="#">View Company</a>
          </div>
          <div className="experience one">
            <img src={latifah} alt="Work Picture" />
            <span>Stanford data collection project</span>
            <a href="#">View Company</a>
          </div>
          <div className="experience one">
            <img src={latifah} alt="Work Picture" />
            <span>Handcraft Shop as a Salesperson</span>
            <a href="#">View Company</a>
          </div>
          <div className="experience one">
            <img src={latifah} alt="Work Picture" />
            <span>Rwanda Academy of Language and Culture</span>
            <a href="#">View Company</a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact">
          <div className="contact-form">
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Message"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <span>Phone</span>
              <p>+250 789 926 982</p>
            </div>
            <div className="contact-info-item">
              <span>Email</span>
              <p>
                <a href="mailto:lkayisime1002@gmail.com">
                  lkayisime1002@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-info-item">
              <span>Address</span>
              <p>KK 40 Ave</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
