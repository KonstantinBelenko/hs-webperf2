import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <main>
      <Navbar></Navbar>
      <main>
        <header className="site-header site-about-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 mx-auto">
                <h1 className="text-white">Kitchen&apos;s Story</h1>

                <strong className="text-white">
                  this is how our kitchen evolved in new digital era
                </strong>
              </div>
            </div>
          </div>

          <div className="overlay"></div>
        </header>

        <section className="about section-padding bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-2">
                <h4 className="mb-3">
                  Crispy Kitchen is the latest Bootstrap 5 HTML template
                  provided by Tooplate website.
                </h4>

                <a href="news.html" className="custom-btn btn btn-dark mt-3">
                  Check out News
                </a>

                <a
                  href="contact.html"
                  className="custom-btn btn btn-danger mt-3 ms-3"
                >
                  Say Hi
                </a>
              </div>

              <div className="col-lg-6 col-12">
                <p>
                  Since this website template is 100% free to use, you can edit
                  and apply it for your commercial restaurant websites. There
                  are 6 HTML pages included in this template. Please{' '}
                  <strong>click &quot;Reservation&quot; button</strong> on the
                  top right to see the pop-up reservation form.
                </p>

                <p>
                  You are NOT allowed to redistribute the template ZIP file on
                  any template donwnload website. Please{' '}
                  <a href="https://www.tooplate.com/contact" target="_blank">
                    contact us
                  </a>{' '}
                  for more information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-5">Team Members</h2>
              </div>

              <div className="col-lg-4 col-12">
                <div className="team-thumb">
                  <Image
                    src="/images/team/matthew-hamilton-tNCH0sKSZbA-unsplash.webp"
                    className="img-fluid team-image"
                    alt=""
                    width={100}
                    height={200}
                  />

                  <div className="team-info">
                    <h4 className="mt-3 mb-0">Sophia</h4>

                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 my-lg-0 my-4">
                <div className="team-thumb">
                  <Image
                    src="/images/team/nicolas-horn-MTZTGvDsHFY-unsplash.webp"
                    className="img-fluid team-image"
                    alt=""
                    width={100}
                    height={200}
                  />

                  <h4 className="mt-3 mb-0">Benjamin W.</h4>

                  <p>Restaurant Manager</p>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="team-thumb">
                  <Image
                    src="/images/team/rc-cf-FMh5o5m5N9E-unsplash.webp"
                    className="img-fluid team-image"
                    alt=""
                    width={100}
                    height={200}
                  />

                  <h4 className="mt-3 mb-0">Muchen Jack</h4>

                  <p>Senior Chef</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter section-padding bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <Image
                  src="/images/charles-deluvio-FdDkfYFHqe4-unsplash.webp"
                  className="img-fluid newsletter-image"
                  alt=""
                  width={100}
                  height={200}
                />
              </div>

              <div className="col-lg-6 col-12 d-flex align-items-center mt-5 mt-lg-0 mx-auto">
                <div className="subscribe-form-wrap">
                  <h4 className="mb-0">Our Newsletter</h4>

                  <p>The food news every day</p>

                  <form className="custom-form subscribe-form mt-4" role="form">
                    <input
                      type="email"
                      name="subscribe-email"
                      id="subscribe-email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Your email address"
                      required
                    />

                    <button
                      type="submit"
                      className="form-control mb-3"
                      id="subscribe"
                    >
                      Subscribe
                    </button>

                    <small>
                      By signing up, you agree to our Privacy Notice and the
                      data policy
                    </small>
                  </form>
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
            {/* <!-- row ending --> */}
          </div>
          {/* <!-- container ending --> */}
        </div>
      </footer>

      {/* <!-- Modal --> */}
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
    </main>
  )
}
