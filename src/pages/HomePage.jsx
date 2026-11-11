import './HomePage.css'
import { PrimaryButton } from '../components/Button'
import aboutPhoto from '../assets/aboutphoto.png'

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            <span className="minneplenka"> MINNEPLENKA </span>
            <br />
            <span>PHOTOGRAPHY</span>
          </h1>

          <div className="hero-title hero-title-blend" aria-hidden="true">
            <span className="minneplenka"> MINNEPLENKA </span>
            <br />
            <span>PHOTOGRAPHY</span>
          </div>
        </div>

        <div className="hero-description-wrap">
          <p className="hero-description">
            Minnesota Creative Studio
          </p>
        </div>

        <div className="cta-box">
          <PrimaryButton
            text={'View Portfolio'}
            primaryColor={'#000'}
            primaryColorAlt={'#fff'}
            textColorAlt={'#000'}
          />
          <PrimaryButton text={'Book a Session'} blur={'5px'} primaryColor={'#c9c8c880'} textColor={'#000'} />
        </div>

        <div className="hero-backdrop">
          <img
            loading="eager"
            src="..\src\assets\project-photos\backdrop.png"
            alt="Modern lakeside residence"
            draggable="false"
          />
        </div>
      </section>
      <section className="selected-works">
        <div className="services-wrap">
          <div className="services-container">
            <h2 className="selected-title">About Minneplenka</h2>
            <div className="selected-container">
              <div className="photo-container">
                <img className="about-photo" src={aboutPhoto} />
              </div>
              <div className="paragraph-container">
                <h3 className="selected-subtitle">
                  Creativity is something I thrive on.
                </h3>
                <p className="selected-paragraph">
                  Architecture is more than an arrangement of brick, steel, and glass; it is the physical manifestation of how a space feels, breathes, and interacts with the natural world. At minneplenka, our work centers on capturing that precise interaction—translating the heavy, grounded permanence of structural design into clean visual narratives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        hello
      </section>
    </main>
  )
}