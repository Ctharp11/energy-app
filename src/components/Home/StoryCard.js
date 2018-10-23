import React from 'react';

const feedback = ["Energex helps us save $1300 last year by insulating our windows and finding water efficient faucets. I can't thank them enough!", "Saving money and helping the environment! Energex is great!", "The people at Energex are so nice and made the process so easy and stress free!", "Energex will be honest with you and makes you feel good about home renovation!", "Energex saved us $700 last year and were great to work with!"]

const UserStory = (props) => (
  <div className="stories-card"> 
     <img className="stories-card-image" src={props.picture.large} alt='user' />
     <div>
       <div className="stories-card-name">{props.name.first[0].toUpperCase()}{props.name.first.slice(1, props.name.first.length)} {props.name.last[0].toUpperCase()}{props.name.last.slice(1, props.name.last.length)}</div>
       <div className="stories-card-text"> "{feedback[Math.floor(Math.random()*feedback.length)]}"</div>
     </div>
  </div>
)

export default UserStory;