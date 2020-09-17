import React from 'react';
import './App.css';


const Header = () => {
  return (
    <div className="homeContainer">
      <div className="homeSlogan">Helping Pets Find Their Forever Home</div>
      <div className="homeMission">
        Our Mission<br/>
        <span className="homeMissionDetail">"Our intent is to provide a safe and secure environment for animals in our care. To analyze their health and enhance behavior where needed. To seek ultimate placement in a forever home which supports each animals unique requirements."</span>
      </div>
      <div className="homeAbout">The Otter Creek Animal Shelter (formerly the Buchanan County Animal Shelter) was formed by a group of dedicated volunteers who professionally and passionately were concerned about what to do with pets in need.  Our initial goal was to build a no-kill animal shelter to take in pets who had owners that were no longer able or willing to care for them in Buchanan County. Also, we needed a place for our residents to take animals who had been abandoned by the owners in rural areas. 
      The shelter became a 501c 3 on April 22,2011 and the project took off with the donation of 10 acres of land that same year. The shelter is located at 400 North Main Street in Hazleton, Iowa on Hwy 150.
      The board has been overwhelmed by the support we have received in Buchanan County. Our location is just miles from the Buchanan-Fayette County Line and due to the outpouring of support from Fayette County the shelter grew to serve residents from both counties.
      In 2017,the name was officially changed to the Otter Creek Animal Shelter. Otter Creek not only runs through Buchanan and Fayette Counties, but also through the woods near our shelter.
      The Otter Creek Animal Shelter is the result of many residents donating their time, talent and financial resources. The shelter is owned by all the volunteers that have worked so hard to make this dream a reality
      </div>
      <div className="homeImage">
        <img src="../animals/rightsidecat.jpg" alt="" />
      </div>
    </div>
  )
}

export default Header;