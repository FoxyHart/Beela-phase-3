import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Pollination: NextPage = () => {
  return (
    <div>
      <Head>
      <title>Beela</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container-fluid p-0 border" id="wrapper">
          <Navbar />

          {/* Welcome */}
          <div className="container-fluid justify-content-center overflow-hidden">
            <div className="row border text-center h-55" id="hero">
              <div className="col d-flex flex-column align-items-center border p-5">
                <div className="p-3">
                  <h1>Pollination Mentoring Programme</h1>
                  <h2>Next Cohort starts: Summer 2022 </h2>
                </div>
                <div className="container">
                <div
                  className="d-flex flex-row align-items-center justify-content-center "
                  id="picture"
                >
                  <div className="m-3">
                    <div className="rectangle"></div>
                  </div>
                  <div className="m-3">
                    <p>
                    <h3>What is Pollination?</h3>
                    Overview of Pollination. To be filled in collab with UX Writing. 
                    <ul id="bullet-list">
                    <li>4 months of one on one support from a Beela approved mentor</li>
                    <li>Support to help you get a job in Tech</li>
                    <li>Special access to Slack groups, events, & more</li>
                    <li>Completely FREE!!!</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>
                <div className="p-3">
                  <button type="button" className="btn btn-dark">
                    Apply for Next Cohort
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="row border text-center" id="steps">
            <div className="col align-items-center border h-25">
              <div className="d-flex flex-column">
                <div className="p-1">
                  <h2>Pollination Programme Timeline</h2>
                </div>
              </div>

              <div className="container" id="container-hex">
                <div className="card-deck d-flex flex-row" id="card-deck-steps-hex">
                  <div className="card m-5 " id="card-m5-steps-hex">
                    <div className="card-body">
                      <p className="card-title">
                        <span>Month 1</span>
                      </p>
                      <p className="card-text">
                        Getting to know your mentor
                      </p>
                    </div>
                  </div>
                  <div className="card m-5 " id="card-m5-steps-hex">
                    <div className="card-body">
                      <p className="card-title">
                        <span>Month 2</span>
                      </p>
                      <p className="card-text">
                        Refining Goals
                      </p>
                    </div>
                  </div>
                  <div className="card m-5 " id="card-m5-steps-hex">
                    <div className="card-body">
                      <p className="card-title">
                        <span>Month 3</span>
                      </p>
                      <p className="card-text">Completing Goals
                      </p>
                  </div>
                </div>
                <div className="card m-5" id="card-m5-steps-hex">
                    <div className="card-body">
                      <p className="card-title">
                        <span>Month 4</span>
                      </p>
                      <p className="card-text">
                       Finishing up
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="container-fluid justify-content-center overflow-hidden">
            <div className="row border text-center h-50" id="FAQ">
              <div className="col d-flex flex-column align-items-center border p-5">
                <div className="p-3">
                  <h1>Frequently Asked Questions</h1>
                  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      How do I join Pollination Mentoring Programme?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Another question for Pollination?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>This is the second items accordion body.</strong>It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      And another question about Pollination?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </div>
    </div>
  </div>
</div>
                  </div>
                  </div>
                  </div>    
          </div>

          {/* Final CTA on page */}
            <div className=" row border text-center h-75" >
              <div className="col d-flex flex-column align-items-center  p-5" id="CTA">
                <div className="p-3">
                  <h1>Join the Pollination Mentor Programme</h1>
                </div>
                <div className="p-3">
                  <p id="header-text">
                  Beela and our team of mentors are happy to help you on your journey into Tech! Apply for the next cohort!
                  </p>
                </div>
                <div className="p-3">
                  <button type="button" className="btn btn-dark">
                    Become a Mentee
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
          <Footer />
          </div>
          </main>
    </div>

  )
}
export default Pollination