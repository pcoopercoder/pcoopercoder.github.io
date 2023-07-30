import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */

/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /about path in router.jsx
 */

export default function About() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */

  return (
    <>
      <h1>The Team</h1>

      <h2>Faculty and Coordinators</h2>
      <div className="flexContainer">
        <div className="flexItem">
          <img
            src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/paulLePore.jpg?v=1688240620436"
            alt=""
            className="theCrewImg"
          />
          <p>
            Dr. Paul<br></br>LePore
          </p>
        </div>

        <div className="flexItem">
          <img
            src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/jessicaEarly.jpg?v=1688240854324"
            alt=""
            className="theCrewImg"
          />
          <p>Dr. Jessica Early</p>
        </div>

        <div className="flexItem">
          <img
            src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/Lassen-Anne.png?v=1688240855415"
            alt=""
            className="theCrewImg"
          />
          <p>
            Anne<br></br>Lassen
          </p>
        </div>

        <div className="flexItem">
          <img
            src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/guide_karri_sm.jpg?v=1688240614142"
            alt=""
            className="theCrewImg"
          />
          <p>
            Karri<br></br>Korppi
          </p>
        </div>
      </div>

      <img
        src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/triple2.png?v=1688236058390"
        className="tripleStar"
        alt=""
      />

      <h2>Students</h2>
      <div className="flexContainer">
        <ul>
          {" "}
          <li>Portia Cooper</li>
          <li>Astrid Bell</li>
          <li>Andrew Cervantes</li>
          <li>Alicia Salazar Contreras</li>
          <li>Emily Delabarra</li>
          <li>Kaya Dickson</li>
          <li>Yaritza Durazo</li>
          <li>Natasha Kiriluk</li>
          <li>Hannah Lennon</li>
        </ul>

        <ul>
          {" "}
          <li>Karah Mayer</li>
          <li>Samantha Munoz</li>
          <li>Desiree Ngoc-ha Nguyen</li>
          <li>Mia Osmonbekov</li>
          <li>Lydia Pastore</li>
          <li>Bradley David Reece</li>
          <li>Niat Solomon</li>
          <li>Noah Wellman</li>
        </ul>
      </div>

      <img
        id="groupPic"
        src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/PHOTO-2023-05-26-12-57-49.jpg?v=1688275525007"
      />
      <p>Photo shared by Dr. Jessica Early</p>
      <br></br>
      <p></p>
    </>
  );
}
