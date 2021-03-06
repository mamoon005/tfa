import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="landing-about">
        <div className="hero-container">
          <div className="row">
            <div className="small-12">
              <h2 style={{ paddingLeft: 0, paddingRight: 0 }}>
                “Crafted specially, giving attention to detail, this is a
                  celebration of creativity with guaranteed smoothness in UI/UX”
                </h2>
            </div>
          </div>
        </div>
        <div className="container" style={{ padding: "0 1.5625rem" }}>
          <div className="row" style={{ marginTop: "4rem", marginBottom: "3rem" }}>
            <div className="small-12">
              <p style={{ marginTop: "3rem" }}>
                The Fellowship App was founded in 2015 by two young men,
                  Austin Queen and Deus Duke, who both migrated to San Francisco from the
                  southeast to pursue careers in technology.After settling in the Bay Area,
                  they both realized how difficult it was to find a familiar church home in a
                  an area where they knew very few people.This challenge is what eventually
                  led to the creation of The Fellowship App.
                  <br />
                <br />
                The Fellowship App is the smartest way to find, connect and worship with
                  churches in your area.Whether you are new to a city, traveling for work,
                  or simply looking for a new place to call home, The Fellowship App makes it
                  incredibly easy to find the church that’s right for you.
                  <br />
                <br />
                Found your church home already?Great!Now use The Fellowship App to stay
                  connected with your church both in and out of service with great features
                  like in-app live streaming, digital tithe &amp; offerings, synchronized calendar
                  and much more.
                  <br />
                <br />
                Sign up now to uplift your worship into the digital age!
                </p>
            </div>
            <div className="small-12 medium-6 column text-center medium-text-left">
              <div className="media-object">
                <div className="media-object-section">
                  <div className="thumbnail">
                    <img src="/images/landing/austin-profile.png" alt="Austin profile" />
                  </div>
                </div>
                <div className="media-object-section">
                  <h4>Austin Queen</h4>
                  <p>Founder &amp; CEO</p>
                </div>
              </div>
            </div>
            <div className="small-12 medium-6 column text-center medium-text-left">
              <div className="media-object">
                <div className="media-object-section">
                  <div className="thumbnail">
                    <img src="/images/landing/deus-profile.png" alt="Deus profile" />
                  </div>
                </div>
                <div className="media-object-section">
                  <h4>Deus Duke</h4>
                  <p>Co-Founder &amp; CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
