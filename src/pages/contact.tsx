import Navbar from '@/components/Navbar'
import React from 'react'

function contact() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <header className="site-header site-contact-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 mx-auto">
                <h1 className="text-white">Say Hi</h1>

                <strong className="text-white">
                  We are happy to get in touch with you
                </strong>
              </div>
            </div>
          </div>

          <div className="overlay"></div>
        </header>

        <section className="contact section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-4">Leave a message</h2>
              </div>

              <div className="col-lg-6 col-12">
                <form
                  className="custom-form contact-form row"
                  action="#"
                  method="post"
                  role="form"
                >
                  <div className="col-lg-6 col-6">
                    <label htmlFor="contact-name" className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="contact-name"
                      id="contact-name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-6">
                    <label htmlFor="contact-phone" className="form-label">
                      Phone Number
                    </label>

                    <input
                      type="telephone"
                      name="contact-phone"
                      id="contact-phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      className="form-control"
                      placeholder="123-456-7890"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-email" className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      name="contact-email"
                      id="contact-email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />

                    <label htmlFor="contact-message" className="form-label">
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      rows={5}
                      id="contact-message"
                      name="contact-message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <div className="col-lg-5 col-12 ms-auto">
                    <button type="submit" className="form-control">
                      Send
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-lg-4 col-12 mx-auto mt-lg-5 mt-4">
                <h5>Weekdays</h5>

                <div className="d-flex mb-lg-3">
                  <p>Monday to Friday</p>

                  <p className="ms-5">10:00 AM - 08:00 PM</p>
                </div>

                <h5>Weekends</h5>

                <div className="d-flex">
                  <p>Saturday and Sunday</p>

                  <p className="ms-5">11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="col-12">
                <h4 className="mt-5 mb-4">
                  121 Einstein Loop N, Bronx, NY 10475, United States
                </h4>

                <div className="google-map pt-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14920.891757756479!2d-73.83496372506556!3d40.8623107607295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28cbc17f4a0c3%3A0x9ae0f1e804a817d!2s121%20Einstein%20Loop%20N%2C%20Bronx%2C%20NY%2010475%2C%20USA!5e0!3m2!1sen!2sth!4v1650470337727!5m2!1sen!2sth"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="text-white mb-4 me-5">Crispy Kitchen</h4>
            </div>

            <div className="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
              <h6 className="text-white mb-lg-4 mb-3">Location</h6>

              <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>

              <a
                href="https://goo.gl/maps/wZVGLA7q64uC1s886"
                className="custom-btn btn btn-dark mt-2"
              >
                Directions
              </a>
            </div>

            <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
              <h6 className="text-white mb-lg-4 mb-3">Opening Hours</h6>

              <p className="mb-2">Monday - Friday</p>

              <p>10:00 AM - 08:00 PM</p>

              <p>
                Tel:{' '}
                <a href="tel: 010-02-0340" className="tel-link">
                  010-02-0340
                </a>
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
              <h6 className="text-white mb-lg-4 mb-3">Social</h6>

              <ul className="social-icon">
                <li>
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>

                <li>
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/search?q=tooplate.com&src=typed_query&f=live"
                    target="_blank"
                    className="social-icon-link bi-twitter"
                  ></a>
                </li>

                <li>
                  <a href="#" className="social-icon-link bi-youtube"></a>
                </li>
              </ul>

              <p className="copyright-text tooplate-mt60">
                Copyright © 2022 Crispy Kitchen Co., Ltd.
                <br />
                Design:{' '}
                <a
                  rel="nofollow"
                  href="https://www.tooplate.com/"
                  target="_blank"
                >
                  Tooplate
                </a>
              </p>
            </div>
            {/* < />!-- row ending --> */}
          </div>
          {/* < />!-- container ending --> */}
        </div>
      </footer>
      {/* < />!-- row ending --> */}
      <div
        className="modal fade"
        id="BookingModal"
        tabIndex={-1}
        aria-labelledby="BookingModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="mb-0">Reserve a table</h3>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body d-flex flex-column justify-content-center">
              <div className="booking">
                <form
                  className="booking-form row"
                  role="form"
                  action="#"
                  method="post"
                >
                  <div className="col-lg-6 col-12">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>

                    <input
                      type="telephone"
                      name="phone"
                      id="phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      className="form-control"
                      placeholder="123-456-7890"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="people" className="form-label">
                      Number of persons
                    </label>

                    <input
                      type="text"
                      name="people"
                      id="people"
                      className="form-control"
                      placeholder="12 persons"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>

                    <input
                      type="date"
                      name="date"
                      id="date"
                      defaultValue=""
                      className="form-control"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="time" className="form-label">
                      Time
                    </label>

                    <select
                      className="form-select form-control"
                      name="time"
                      id="time"
                      defaultValue="5"
                    >
                      <option value="5">5:00 PM</option>
                      <option value="6">6:00 PM</option>
                      <option value="7">7:00 PM</option>
                      <option value="8">8:00 PM</option>
                      <option value="9">9:00 PM</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Special Request
                    </label>

                    <textarea
                      className="form-control"
                      rows={4}
                      id="message"
                      name="message"
                      placeholder=""
                    ></textarea>
                  </div>

                  <div className="col-lg-4 col-12 ms-auto">
                    <button type="submit" className="form-control">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
