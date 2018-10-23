import React from 'react';
import { Fragment } from 'react';

const Stories = (props) => (
    <div id="stories" className="stories"> 
    {props.stories.map((story, index) => {
      {console.log(story)}
      return <Fragment key={index}> {story.name.first} </Fragment>
    })}
    </div>
)

export default Stories