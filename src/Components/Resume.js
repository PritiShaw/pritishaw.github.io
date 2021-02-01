import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3><a href={work.link}>{work.company}</a></h3>
            <p className="info">{work.title} <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        return <div key={skills.type}><h4>{skills.type}</h4>
            <p className="info">{skills.name}</p>
        </div>
      })
    }

    return (
      <section>
      <div className="row work"  id="resume">
         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
    <div className="row skill"  id="skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">
				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
