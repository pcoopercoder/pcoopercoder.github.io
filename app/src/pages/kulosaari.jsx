import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import Typed from "react-typed";

export default function Kulosaari() {
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });
  const [style2, trigger2] = useWiggle({ x: 5, y: 5, scale: 1 });

  return (
    <>
      <div className="box">
        <div className="Typing">
          <Typed
            strings={[
              "Tech in the Finnish Education System",
              "Tekniikka Suomen Koulutusjär -\njestnelmässä",
            ]}
            typeSpeed={100}
            backSpeed={80}
            loop
          />
        </div>

        <img
          src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/newSchoolBanner.png?v=1688270701369"
          className="schoolPic"
          alt=""
        />

        <animated.div onMouseEnter={trigger} style={style}>
          <div className="standOut">
            
            <div className="innerText">
              <h2>Interview with Linda Eklöf 🏫</h2>
            <h3>Monday, May 15, 2023</h3>
            <h4>Lunchroom, Kulosaari Secondary School</h4>
            <p>
              Linda Eklöf, an upper secondary math teacher and the school's
              international coordinator, joined my table for lunch. We discussed
              the role of tech at Kulosaari.
              <br></br>
              <br></br>
              <b>
                Q: Which grade do students begin their compulsory programming
                courses at Kulosaari?
              </b>
              <br></br>
              "In 7th grade, they start programming. But we include logic and
              problem-solving concepts in mathematics and other courses. We also
              offer robotics where students learn Python."
              <br></br>
              <br></br>
              <b>
                Q: How often do your students have laptops in the classroom?
              </b>
              <br></br>
              "All of the upper secondary students use laptops with a lock-down
              browser for tests. And they are used frequently for other work."
              <br></br>
              <br></br>
              <b>
                Q: Does Kulosaari provide laptops? Or do students bring their
                own?
              </b>
              <br></br>
              "Since laptops are required for tests, we provide all upper
              secondary students with school issued laptops. The 7th grade
              students also have school-provided laptops. For anything that is
              compulsory, we are mandated to give all students access to the
              technology/books/tools they need."
              <br></br>
              <br></br>
              <b>
                Q: What is the most recent tech-investment made by the school?
              </b>
              <br></br>
              "Big tech investments for the school are made to adapt to the
              changing climate. During COVID, we bought 400 new laptops for the
              students--we used to have 400 Chromebooks. And to support the
              growing population of our school, we added the new
              building--Building A, which has Artome projectors."
              <br></br>
              <br></br>
              <b>
                Q: Have you experienced issues related to the use of AI to
                complete assignments?
              </b>
              <br></br>
              "Perhaps some of the other teachers have. But it is difficult to
              measure."
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
            <h2>A Grounded Approach to Tech Education🔋</h2>
            <p>
              Despite a focus on technology, the Finnish education system
              emphasizes nature as a learning environment. The Finnish
              government recommends that schools should be no farther than 300
              meters from green areas (Source:{" "}
              <a href="https://otter-project.eu/blog/post/11/education-outside-the-classroom-the-finnish-way">
                The Otter-Project
              </a>
              ). As expected, every school we visited was located near a forest
              or park. Nature in Finland is used to provide learning
              opportunities for math, science, language, art, physical
              education, and even technology.
            </p>
            <div className="centeredVid">
              <iframe
                src="https://www.youtube.com/embed/31riyFYSc8c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="true"
              ></iframe>
              <p>
                Birds singing during visit to Verla UNESCO World Heritage Site on
                May 19, 2023
              </p>
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
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230515_092148.jpg?v=1688243710821"
              alt="Sample photo"
            />
            <p>
              A server room at the Kulosaari Secondary School. The school
              offered high-speed and easily accessible wifi.
            </p>
          </div>

          <div className="cardGroup">
            <img
              className="cardImg"
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230516_104513.jpg?v=1688243699184"
              alt="Image of student projects created at the Turku vocational institute"
            />
            <p>
              Student projects at the Turku Vocational Institute created using a
              CNC machine.
            </p>
          </div>

          <div className="cardGroup">
            <img
              className="cardImg"
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230515_111018.jpg?v=1688243719120"
              alt="Image of one of the Kulosaari Secondary School's Artome projectors"
            />
            <p>
              One of the Kulosaari Secondary School's state-of-the-art Artome
              projectors.
            </p>
          </div>

          <div className="cardGroup">
            <img
              className="cardImg"
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230516_104637.jpg?v=1688246702158"
              alt="Image of 3D modeling software on one of the workshop computers at the Turku
              Vocational School."
            />
            <p>
              3D modeling software on workshop computer at the Turku Vocational
              Institute.
            </p>
          </div>

          <div className="cardGroup">
            <img
              className="cardImg"
              src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/20230517_112403.jpg?v=1688246699508"
              alt="Image of the class laptops for the 6th grade students at the Vikki Teacher Training School."
            />
            <p>
              Class laptops for the 6th grade students at the Vikki Teacher
              Training School.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
