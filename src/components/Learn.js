import React from 'react';
import LearnCard from './LearnCard';

const Learn = () => (
    <div className="learn" id="learn">
      <div className="learn-head"> Over 20 years experience in saving people money! </div>
      <div className="learn-grid"> 
        <LearnCard 
            image='https://www.greenmountainenergy.com/wp-content/uploads/2018/10/solar-rebate-2x.jpg'
            head='Over 1000 turned to solar power'
            text='You can save thousands per year going to solar! Call us to get more info! 555-555-5555'
        />
        <LearnCard 
            image='https://www.greenmountainenergy.com/wp-content/uploads/2018/10/conserve-2x.jpg'
            head='Tax returns for recycling'
            text='Yes, you can actually get money back for recycling, depending on your location.'
        />
        <LearnCard 
            image='https://www.greenmountainenergy.com/wp-content/uploads/2018/10/bathtub-icon-2x.jpg'
            head='Free water diagnostic'
            text='Let us look to see if you can save water. Free consulation!'
        />
      </div>
    </div>
)

export default Learn