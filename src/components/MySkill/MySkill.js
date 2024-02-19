import React from 'react';
import './MySkill.css'
import SkillCard from './SkillCard/SkillCard';
import skillData from './skillData';

const MySkill = () => {
  return (

  <>

  <div className="my_skill_sec" id='myskill'>

            <h1 className='my_skill_sec_title'>my skill</h1>


              <div className="row">

                
              {
              skillData.map((data)=>(
                
                  <SkillCard key={data.id} skillValue={data.skill_value} skillName={data.skill_name}/>
              ))
              }



              </div>



            
          
  </div>
  
  </>

  );
};
export default MySkill;
