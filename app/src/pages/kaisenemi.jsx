import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import Typed from "react-typed";

// Our language strings for the header
const strings = [
  "Tech in Everyday Finnish Life",
  "Tekniikka Suomalaisessa\nArjessa",
];

export default function Kaisenemi() {
  const [hello, setHello] = React.useState(strings[0]);

  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });
  const [style2, trigger2] = useWiggle({ x: 5, y: 5, scale: 1 });

  // When the user clicks, change the header language
  const handleChangeHello = () => {
    let newHello;

    // Swap strings
    if (hello == strings[0]) {
      newHello = strings[1];
    } else {
      newHello = strings[0];
    }
    setHello(newHello);
  };

  return (
    <>
      <div className="box">
        <div className="Typing">
          <Typed
            strings={[
              "Tech in Everyday Finnish Life",
              "Tekniikka Suomalaisessa\nArjessa",
            ]}
            typeSpeed={100}
            backSpeed={80}
            loop
          />
        </div>

        <img
          src="https://cdn.glitch.global/c11491e2-c8a6-444d-b036-423c85411f05/societybanner.png?v=1690246644494"
          className="schoolPic"
          alt=""
        />

        <animated.div onMouseEnter={trigger} style={style}>
          <div className="standOut">
            
            <div className="innerText">
              <h2>Conversations with Karri Korrpi 🇫🇮</h2>
            <p>
              During the two-week seminar, I had multiple discussions with Karri
              Korppi (our guide) on tech and it's role in Finnish society.
              <br></br>
              <br></br>
              <b>First Piece of Personal Tech</b>
              <br></br>
              Children in Finland seem to have more personal agency than those
              in the United States. By age seven, many Finnish children walk to
              school by themselves. According to Karri, most parents will give
              limited feature smart watches to their children to support their
              morning treks. These smart watches hold three phone numbers and
              have a tracking feature. I received several advertisements for
              this product while browsing Finnish YouTube.
              <br></br>
              <br></br>
              <b>Working from Home</b>
              <br></br>
              Karri reported that Finns had a strong culture of working from
              home, even before the COVID-19 pandemic. Nearly all professionals
              in Finland spend at least one day a week working from home. These
              virtual workspaces are mostly supported by video conferencing
              technology, such as Google Meet and Zoom.
              <br></br>
              <br></br>
              <b>Internet for All</b>
              <br></br>
              In 2010, Finland declared broadband internet access as a legal
              right for all citizens (Source:{" "}
              <a href="https://www.loc.gov/item/global-legal-monitor/2010-07-06/finland-legal-right-to-broadband-for-all-citizens/">
                Library of Congress
              </a>
              ). As a result, Finland has one of the highest rates of household
              internet assess in the world.
              <br></br>
              <br></br>
              <b>A Car-Free City</b>
              <br></br>
              Karri noted that Helsinki is committed to being car-free in eight
              years. During our visit, Karri pointed out several sites
              undergoing major public transportation upgrades. At the center of
              Helsinki's car-free plan is their public transportation app, which
              will serve as both a journey planner and payment platform.
              <br></br>
            </p>
            </div>
          </div>
        </animated.div>

        <img
          src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/singleStar.png?v=1688236052818"
          className="tripleStar"
          alt=""
        />

        <animated.div onMouseEnter={trigger2} style={style2}>
          <div className="standOut">
            
            <div className="innerText">
              <h2>Exploring Oodi 📖</h2>
            <p>
              On May 22, 2023, we visited the Oodi Library, which is referred to
              as "the living room of Helsinki." The Oodi Library hosts a robust
              collection of tech for public use. The second floor is devoted to
              3D printers, an extensive makerspace, professional digital art
              tablets, a line of high quality computers, and multiple tech rooms
              containing VR headsets.
            </p>

            <img
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/Oodi_verkkosivut_3krs_kirjataivas_iso_Tuomas-Uusheimo03.jpg?v=1688238284024"
              className="schoolPic"
              alt=""
            />
            <p>
              Oodi Library (Image Source:{" "}
              <a href="https://oodihelsinki.fi/en/">Oodi Website</a>).
            </p>
          </div>
          </div>
        </animated.div>

        <img
          src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/singleStar.png?v=1688236052818"
          className="tripleStar"
          alt=""
        />

        <animated.div onMouseEnter={trigger} style={style}>
          <div className="standOut">
            
            <div className="innerText">
            <h2>Ed-Tech Industry🔌</h2>
            <p>
              We visited the Helsinki Education Hub on May 24, 2023. The main
              goal of the Hub is to "promote EdTech entrepreneurship and new
              businesses" (Source:{" "}
              <a href="https://educationhubhelsinki.fi/">
                Helsinki Education Hub
              </a>
              ). The Hub, which is only one and a half years old, is already
              supporting numerous ed-tech startups and has a community of over
              400 members. Ed-tech is a big business sector in Helsinki and
              recieves extensive funding from the Helsinki Education Division.
              According to Miikka Neuvonen, the community manager at the
              Helsinki Education Hub, 70,000€ are granted to all qualifying
              EdTech startups.
            </p>

            <div className="cards">
              <div className="cardGroup">
                <img
                  className="cardImg"
                  src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/PHOTO-2023-05-24-06-33-12.jpg?v=1688357354260"
                  alt="Sample photo"
                />
                <p>
                  Seminar team at the Helskinki Education Hub. Photo shared by
                  Anne Lassen.
                </p>
              </div>

              <img
                src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/double.png?v=1688236044569"
                alt=""
                id="doubleStar"
              />

              <div className="cardGroup">
                <img
                  className="cardImg"
                  src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230524_092318.jpg?v=1688358443088"
                  alt="Sample photo"
                />
                <p>
                  Poster for Loru Games, one of the Helsinki Education Hub's
                  startups.
                </p>
              </div>
            </div>
            </div>
          </div>
        </animated.div>

        <img
          src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/singleStar.png?v=1688236052818"
          className="tripleStar"
          alt=""
        />

        <h2>Photo Gallery</h2>

        <div className="cards">
          <div className="cardGroup">
            <img
              className="cardImg"
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230522_141412.jpg?v=1688246779929"
              alt="Sample photo"
            />
            <p>A Nintendo Entertainment System setup at Oodi Library.</p>
          </div>

          <div className="cardGroup">
            <img
              className="cardImg"
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230522_141115.jpg?v=1688246767134"
              alt="Sample photo"
            />
            <p>Public 3D printers at Oodi Library.</p>
          </div>

          <div className="cardGroup">
            <img
              className="cardImg"
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230522_141140.jpg?v=1688246773415"
              alt="Sample photo"
            />
            <p>Oodi Library Makerspace.</p>
          </div>

          <div className="cardGroup">
            <img
              className="cardImg"
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230522_153122.jpg?v=1688246790091"
              alt="Sample photo"
            />
            <p>Urban Workshop digital flyer at Oodi Library.</p>
          </div>

          <div className="cardGroup">
            <img
              className="cardImg"
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230515_155046.jpg?v=1688247173854"
              alt="The class laptops for the 6th grade students at the Vikki Teacher Training School."
            />
            <p>
              Codemate's office space in central Helsinki. Codemate is a
              creative tech agency founded in Finland.
            </p>
          </div>

          <div className="cardGroup">
            <img
              className="cardImg"
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230526_090224.jpg?v=1688271648113"
              alt="The class laptops for the 6th grade students at the Vikki Teacher Training School."
            />
            <p>
              Office building containing several international tech companies
              including<br></br>Sony, HP
              -, LG, Razer, Apple, and Samsung.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
