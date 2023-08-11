import "./app.css";
import latifah from "./assets/latifah.jpg";
import twitter from "./assets/twitter-logojpg.jpg";
import linkedin from "./assets/linkedin-logo.png";
import instagram from "./assets/instagram-logo.png";

function App() {
  return (
    <>
      <div className="portfolio__header">
        <a href="#">Hire Me</a>
        <button>Resume</button>
      </div>
      <section className="main">
        <div className="main-text">
          <h1>
            Hi, I'm Latifah <br /> Kayisime.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
            a. Voluptate tempora rem molestias deleniti fugiat rerum dolore
            quod. Laudantium, optio?
          </p>
          <div className="social-media">
            <a href="#">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, incidunt adipisci! Autem vitae hic iusto rem
              temporibus alias ipsa natus possimus, placeat laborum totam minus
              commodi optio, officiis eum recusandae consectetur! Voluptatum,
              aut. Sit nobis dolores, repellendus natus iure a sequi unde
              laborum corporis quasi beatae excepturi temporibus libero minima?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              maiores officia sit cum iure cupiditate nihil, repellendus,
              nostrum dignissimos ipsa fugiat, explicabo voluptatum officiis
              neque enim quis.
            </p>

            <p className="secondary">
              My Skills include: Lorem, ipsum-dolor, sit-amet,
              consectetur,adipisicing-elit. Numquam-eaque, earum,
              beatae-sapiente, neque- doloremque-quos, quidem-autem-iste, modi!
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
            <span className="talent-name">Lorem, ipsum dolor.</span>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi provident quaerat, assumenda velit quod soluta.
            </p>
          </div>
          <div className="talent two">
            <img src={latifah} alt="talent picture" />
            <br />
            <span className="talent-name">Lorem, ipsum dolor.</span>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi provident quaerat, assumenda velit quod soluta.
            </p>
          </div>
          <div className="talent three">
            <img src={latifah} alt="talent picture" />
            <br />
            <span className="talent-name">Lorem, ipsum dolor.</span>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi provident quaerat, assumenda velit quod soluta.
            </p>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <h2>My Past Experience</h2>
        <div className="experiences">
          <div className="experience one">
            <img src={latifah} alt="Work Picture" />
            <span>Lorem Ipsum</span>
            <a href="#">View Company</a>
          </div>
          <div className="experience one">
            <img src={latifah} alt="Work Picture" />
            <span>Lorem Ipsum</span>
            <a href="#">View Company</a>
          </div>
          <div className="experience one">
            <img src={latifah} alt="Work Picture" />
            <span>Lorem Ipsum</span>
            <a href="#">View Company</a>
          </div>
          <div className="experience one">
            <img src={latifah} alt="Work Picture" />
            <span>Lorem Ipsum</span>
            <a href="#">View Company</a>
          </div>
          <div className="experience one">
            <img src={latifah} alt="Work Picture" />
            <span>Lorem Ipsum</span>
            <a href="#">View Company</a>
          </div>
          <div className="experience one">
            <img src={latifah} alt="Work Picture" />
            <span>Lorem Ipsum</span>
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
