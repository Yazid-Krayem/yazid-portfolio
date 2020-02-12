import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGeJ7_eI1EELw/profile-displayphoto-shrink_800_800/0?e=1586995200&v=beta&t=Q8B4CpBNaVt0b5CHM-jwRJeJOzwZ11HwuQEeETBxHtI"
              alt=""
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            {/* <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>{resumeData.Tel}</span>
                  <br></br>
                  <span>{resumeData.Email}</span>
                  <br></br>
                  <span>{resumeData.website}</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
