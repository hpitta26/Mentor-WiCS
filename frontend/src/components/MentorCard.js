import React from 'react';
import './MentorCard.css'; // Assuming the CSS is in a separate file

import TwIcon from '../icons/TwIcon';
import FbIcon from '../icons/FbIcon';
import LinkIcon from '../icons/LinkIcon';


const MentorCard = (props) => {
    var src = '/images/woman-1.jpg'
    if (props.mentor.user.name == 'Alice Johnson') {
        src = '/images/woman-2.jpg'
    } else if (props.mentor.user.name == 'Bethany Smith') {
        src = '/images/woman-3.jpg'
    } else if (props.mentor.user.name == 'Clara Chen') {
        src = '/images/woman-4.jpg'
    }

    return (
      <div className="mentor-card-container-mc">
        <div className="card-header-mc">
          <img src={src} alt="Mentor 1" className="circular-image-mc" />
        </div>
        <div className="card-body-mc">
          <h3 className="mentor-name-mc">{props.mentor.user.name}</h3>
          <div className="mentor-title-mc">{props.mentor.specialization}</div>
          <div className="mentor-bio-mc">
            {props.mentor.user.bio}
          </div>
        </div>
        <div className="card-footer-mc">
          <FbIcon/>
          <TwIcon/>
          <LinkIcon/>
        </div>
      </div>
    )
  
};

export default MentorCard;