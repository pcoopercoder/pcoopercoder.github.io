import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import Typewriter from "typewriter-effect";
import Typed from "react-typed";

// Strings for the header
// const strings = ["Technology in Finland", "Tekniikka Suomessa"];

export default function Home() {
  //   const [hello, setHello] = React.useState(strings[0]);

  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  //   const handleChangeHello = () => {
  //     let newHello;

  //     // Choose a new Hello
  //     if (hello == strings[0]) {
  //       newHello = strings[1];
  //     } else {
  //       newHello = strings[0];
  //     }
  //     setHello(newHello);
  //   };

  return (
    <>
      <div className="box">
        <div className="Typing">
          <Typed
            strings={["Technology in Finland", "Tekniikka Suomessa"]}
            typeSpeed={120}
            backSpeed={100}
            loop
          />
        </div>

        <div className="parent">
          <div className="relImg">
            <img
              src="https://cdn.glitch.global/c11491e2-c8a6-444d-b036-423c85411f05/HomeBanner.png?v=1690218547067"
              className="schoolPic"
              alt=""
            />
          </div>
          <div className="child">
            <img
              src="https://cdn.glitch.global/c11491e2-c8a6-444d-b036-423c85411f05/HOMEBannerGIFlayer.gif?v=1690217587123"
              className="schoolPic"
              alt=""
            />
          </div>
        </div>

        <div className="instructions">
          <h2>Flinn Scholar Study Abroad Seminar ✨ Helsinki, Finland</h2>
          <h3>Portia Cooper, University of Arizona</h3>
          <img
            src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/singleStar.png?v=1688236052818"
            className="tripleStar"
            alt=""
          />
          <p>
            During May 2023, I conducted a two-week study investigating the use
            of technology in the Finnish education system and society. I chose
            this topic because I am passionate about computer science education.
            On Saturdays, I teach Python to middle school students at UArizona
            Girls Who Code. Technology is a compulsory subject in Finland that
            is taught in 100% of secondary schools. Conversely, in the United
            States, only 53% of public high schools offer computer science
            according to the{" "}
            <a href="https://advocacy.code.org/stateofcs">
              2022 State of Computer Science Education report
            </a>
            . And only 36% of public high schools in Arizona offer computer
            science (Image 1).
          </p>

          <div className="mapAndCaption">
            <animated.div onMouseEnter={trigger} style={style}>
              <img
                src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/access-map-2022.png?v=1688339366226"
                className="mapPic"
              ></img>
            </animated.div>
            <p>
              Image 1: Percentage of public high schools by U.S. state that
              offer computer science courses (Source:{" "}
              <a href="https://advocacy.code.org/stateofcs">
                2022 State of CS Report
              </a>
              )
            </p>
          </div>
          <h2>Methods</h2>
          <p>
            Data collection methods included in-depth interviews and participant
            observation.
            <i>
              <a href="https://www.fhi360.org/sites/default/files/media/documents/Qualitative%20Research%20Methods%20-%20A%20Data%20Collector%27s%20Field%20Guide.pdf">
                Qualitative Research Methods: A Data Collector's Filed Guide
              </a>
            </i>{" "}
            by Mack et. al. was used as a methods resource. Prior to departure,
            a literature review was performed and included the following
            sources:
            <ul>
              <li>
                <i>
                  <a href="https://scholar.lib.vt.edu/ejournals/JTS/Winter-Spring-2000/pdf/alamaki.pdf">
                    Current Trends in Technology Education in Finland
                  </a>
                </i>{" "}
                by Ari Alamäki
              </li>
              <li>
                <i>
                  <a href="https://www.politico.com/story/2014/05/finland-school-system-107137">
                    Finland’s Low-Tech Take on Education
                  </a>
                </i>{" "}
                by Caitlin Emma
              </li>
              <li>
                <i>
                  <a href="https://medium.com/edtechx360/spotlight-finlands-education-system-and-their-unique-approach-to-edtech-product-development-83df87c71a93">
                    Spotlight: Finland’s Education System and their Unique
                    Approach to EdTech Product Development
                  </a>
                </i>{" "}
                by EdTechX
              </li>
              <li>
                <i>
                  <a href="https://www.amazon.com/Smartest-Kids-World-They-That/dp/145165443X">
                    The Smartest Kids in the World and How They Got That Way
                  </a>
                </i>{" "}
                by Amanda Ripley
              </li>

              <li>
                <i>
                  <a href="https://www.diva-portal.org/smash/get/diva2:1624307/FULLTEXT01.pdf">
                    Utilizing Digital Technology in Teaching Practices in
                    Kindergarten in Finland
                  </a>
                </i>{" "}
                by Manthoula Bountri
              </li>
            </ul>
          </p>

          <img
            src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/singleStar.png?v=1688236052818"
            className="tripleStar"
            alt=""
          />

          <h2>Site Visit Locations and Dates</h2>
          <h3>Kulosaari Secondary School - 05/15/2023</h3>
          <h3>Turku Vocational Institute (TAI) - 05/16/2023</h3>
          <h3>Viikki Teacher Training School - 05/17/2023</h3>
          <h3>Oodi Helsinki Central Library - 05/22/2023</h3>
          <h3>Kaisaniemi Elementary School - 05/23/2023</h3>
          <h3>Helsinki Education Hub - 05/24/2023</h3>
          <h3>The Finnish Lifelong Learning Foundation - 05/25/2023</h3>
          <h3>Jaala Daycare Center - 05/26/2023</h3>
        </div>
      </div>
    </>
  );
}
