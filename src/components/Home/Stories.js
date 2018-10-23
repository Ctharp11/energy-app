import React from 'react';
import { Fragment } from 'react';
import StoryCard from './StoryCard';

const Stories = (props) => (
    <div id="stories" className="stories"> 
      <div className="stories-head"> Our Success Stories</div> 
      {props.stories.map((story, index) => {
        return <Fragment key={index}> <StoryCard {...story} /> </Fragment>
      })}
    </div>
)

export default Stories