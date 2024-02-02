import "./contact.css";

export const Contact = () => {
  return (
    <section className="container section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Get in touch with me anytime</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div>
            <i className="uil uil-map contact__icon"></i>
            <h3 className="contact__title">Location</h3>
          </div>
          <span className="contact__button">Bangalore, India</span>
        </div>
        <div className="contact__content">
          <div>
            <i className="uil uil-at contact__icon"></i>
            <h3 className="contact__title">Gmail</h3>
          </div>
          <span className="contact__button">
            jameel.webdev
            <i className="uil uil-external-link-alt"></i>
          </span>
        </div>
        <div className="contact__content">
          <div>
            <i className="uil uil-linkedin-alt contact__icon"></i>
            <h3 className="contact__title">LinkedIn</h3>
          </div>
          <span>
            <a
              className="contact__button"
              href="https://www.linkedin.com/in/jameel-webdev/"
              target="_black"
              rel="noreferrer"
            >
              jameel-webdev
              <i className="uil uil-external-link-alt"></i>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};
