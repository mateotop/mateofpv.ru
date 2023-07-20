import React from "react";
{
  /*На IOS криво работает тэг video поэтому написал эту петрушку. 
    * На маленких экранах вроде iPhone будет iframe, 
    * который работет без autoplay & mute на IOS, 
    * а на больших экранах как и хотел тег video autoplay muted loop etc.*/
}

export default function VideoChoice() {
  function smallScreens() {
    // return true | false
    return window.innerWidth < 800;
  }

  function ChoiceVideoScreen() {
    return (smallScreens() 
      ? (<iframe 
        src="/DoneSiteClip720_35_mute.mp4" 
        type="video/mp4" 
        autoPlay 
        />) 
      : (<video 
        muted 
        autoPlay 
        loop 
        controls 
        playsInline
      > 
          <source 
            src="/DoneSiteClip720_35.mp4" 
            type="video/mp4" 
        /> 
        </video>))
  }

  return <>{ChoiceVideoScreen()}</>;
}

