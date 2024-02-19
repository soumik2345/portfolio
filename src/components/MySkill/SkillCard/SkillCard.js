import React from 'react';
import './SkillCard.css'




const SkillCard = ({skillValue, skillName}) => {




const rotateValue =skillValue * 3.6;




  return (

  <div className='card'>

      <div className="circular_progress" style={{background:`conic-gradient( #2773fc ${rotateValue}deg, #cadcff ${rotateValue}deg)`}}>
          <div className="value_container">{skillValue}%</div>
      </div>


      <h1 className='card_text'>{skillName}</h1>

  </div>

  );
};

export default SkillCard;
