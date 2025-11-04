import React, { useState } from 'react';
import cta4 from '../assets/cta4.png';
import cta5 from '../assets/cta5.png';

const Cta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const stopPropagation = (event) => event.stopPropagation();

  return (
    <>
      <section className="dj-cta">
        <div className="cta-div">
          <button
            type="button"
            className="cta-card cta-1"
            id="dj-comp"
            onClick={openModal}
          >
            <div className="cta-text">
              <h3>DJ COMP</h3>
              <p>
                Freaks of Nature and Merwas have teamed up to give talented DJs the chance to shine
                and perform live at Freaks of Nature
              </p>
            </div>
            <div className="cta-a-img">
              <img src={cta4} alt="Freaks of Nature DJ Competition" className="img-fluid" />
            </div>
          </button>

          <a href="/Event#affiliate" className="cta-2" id="affiliate">
            <div className="cta-text1">
              <h3>Affiliate</h3>
              <p>
                Join our affiliate program and win amazing prizes. We want you to show you off your
                skills, whether on the decks, on the mic or creating a unique mash-up
              </p>
            </div>
            <div className="cta-b-img">
              <img src={cta5} alt="Freaks of Nature Affiliate Program" className="img-fluid" />
            </div>
          </a>
        </div>
      </section>

      {isModalOpen && (
        <div className="dj-modal-backdrop" role="presentation" onClick={closeModal}>
          <div
            className="dj-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dj-modal-title"
            onClick={stopPropagation}
          >
            <button
              type="button"
              className="dj-modal-close no-hover"
              aria-label="Close form"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="dj-modal-header">
              <h2 id="dj-modal-title">DJ Competition - Rule the Stage</h2>
              <p>
                It’s your chance to get up on the Freaks of Nature stage at our February FreakYard
                festival.
              </p>
            </div>
            <form className="dj-modal-form">
              <label>
                Full name
                <input type="text" name="fullName" placeholder="Enter your full name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Enter your email address" />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" placeholder="Enter your phone number" />
              </label>
              <label>
                Link to profile picture
                <input type="url" name="profilePic" placeholder="https://" />
              </label>
              <label>
                Link to your set
                <input type="url" name="setLink" placeholder="https://" />
              </label>
              <label>
                Links to your socials
                <input type="text" name="socials" placeholder="@instagram · soundcloud.com/you" />
              </label>
              <label>
                Tell us about you
                <textarea
                  name="bio"
                  rows="4"
                  placeholder="Share your story and performance style"
                ></textarea>
              </label>
              <button type="submit" className="dj-modal-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .dj-cta {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 100px 0;
          overflow: hidden;
        }

        .cta-div {
          width: 1660px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 50px 0;
        }

        .cta-card {
          width: 800px;
          height: 379px;
          border-radius: 30px;
          border: 2px solid #000;
          box-shadow: 10px 10px 0px 0px #000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffbf00;
          text-align: left;
          padding: 0;
        }

        .cta-card img {
          pointer-events: none;
        }

        .cta-1 {
          background-color: #ffbf00;
        }

        .cta-2 {
          width: 825px;
          height: 379px;
          background-color: #606ddb;
          border-radius: 30px;
          border: 2px solid #000;
          box-shadow: 10px 10px 0px 0px #000;
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cta-text {
          padding: 40px 0 40px 40px;
        }

        .cta-text1 {
          padding: 40px 0 40px 40px;
        }

        .cta-text h3 {
          font-size: 80px;
          color: #000;
          font-weight: bold;
          width: 378px;
          text-align: left;
        }

        .cta-text p {
          font-size: 20px;
          color: #000;
          font-weight: normal;
          width: 378px;
          text-align: left;
        }

        .cta-text1 h3 {
          font-size: 80px;
          color: #fff;
          font-weight: bold;
          width: 400px;
          text-align: left;
        }

        .cta-text1 p {
          font-size: 20px;
          color: #fff;
          font-weight: normal;
          width: 400px;
          text-align: left;
        }

        .cta-a-img,
        .cta-b-img {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cta-b-img {
          position: relative;
          margin-left: -166px;
          margin-top: -60px;
        }

        .cta-b-img .img-fluid {
          max-width: 200%;
        }

        .dj-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1500;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .dj-modal {
          width: min(960px, 100%);
          background: #ffbf00;
          border: 3px solid #000;
          border-radius: 30px;
          box-shadow: 18px 18px 0px 0px #000;
          position: relative;
          padding: 48px 56px 56px;
          color: #000;
          max-height: 90vh;
          overflow-y: auto;
        }

        .dj-modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          border: 2px solid #000;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          background: #fff;
          font-size: 26px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .dj-modal-header h2 {
          font-size: 56px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .dj-modal-header p {
          font-size: 20px;
          max-width: 600px;
        }

        .dj-modal-form {
          margin-top: 36px;
          display: grid;
          gap: 24px;
        }

        .dj-modal-form label {
          display: flex;
          flex-direction: column;
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .dj-modal-form input,
        .dj-modal-form textarea {
          margin-top: 12px;
          border: 2px solid #000;
          border-radius: 16px;
          padding: 16px 20px;
          font-size: 18px;
          background: #fff4c4;
          font-weight: 500;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .dj-modal-form input:focus,
        .dj-modal-form textarea:focus {
          outline: none;
          border-color: #000;
          box-shadow: 6px 6px 0px 0px #000;
          background: #fff;
        }

        .dj-modal-form textarea {
          resize: vertical;
          min-height: 140px;
        }

        .dj-modal-submit {
          justify-self: flex-start;
          background: #ed196f;
          color: #fff;
          border: 2px solid #000;
          border-radius: 16px;
          padding: 16px 48px;
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          box-shadow: 10px 10px 0px 0px #000;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 1500px) {
          .cta-div {
            width: 100%;
            gap: 10px;
            padding: 50px;
          }

          .cta-card {
            width: 640px;
          }

          .cta-2 {
            width: 680px;
          }

          .cta-b-img .img-fluid {
            max-width: 100%;
          }

          .cta-text,
          .cta-text1 {
            width: 36%;
          }

          .cta-text h3,
          .cta-text1 h3 {
            font-size: 64px;
          }

          .cta-text p,
          .cta-text1 p {
            width: 310px;
          }

          .cta-b-img {
            position: relative;
            margin-left: 0;
            margin-right: -85px;
            margin-top: -60px;
          }
        }

        @media (max-width: 1200px) {
          .cta-div {
            flex-direction: column;
            gap: 60px;
          }

          .cta-card,
          .cta-2 {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .dj-modal {
            padding: 36px 28px 44px;
            box-shadow: 14px 14px 0px 0px #000;
          }

          .dj-modal-header h2 {
            font-size: 38px;
            line-height: 1.1;
          }

          .dj-modal-close {
            top: 16px;
            right: 16px;
          }
        }

        @media (max-width: 468px) {
          .dj-cta {
            padding: 50px 0;
          }

          .cta-div {
            flex-direction: column;
            padding: 20px;
            gap: 20px;
          }

          .cta-card,
          .cta-2 {
            width: 100%;
            height: auto;
            border-radius: 15px;
            box-shadow: 5px 5px 0px 0px #000;
            align-items: flex-end;
            overflow: hidden;
          }

          .cta-a-img {
            margin-left: 48px;
            margin-right: -20px;
          }

          .cta-text,
          .cta-text1 {
            padding: 20px 0 20px 20px;
          }

          .cta-text h3,
          .cta-text1 h3 {
            font-size: 36px;
          }

          .cta-text p {
            width: 235px;
            font-size: 14px;
          }

          .cta-text1 h3 {
            width: 191px;
          }

          .cta-text1 p {
            width: 187px;
            font-size: 14px;
          }

          .cta-2 {
            background-image: url(${require('../assets/resmail.png')});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom right;
          }

          .cta-b-img .img-fluid {
            max-width: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Cta;
