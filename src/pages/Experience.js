import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";


function Experience() {
  return (
    <div className="experience" >  

        <VerticalTimeline lineColor="#3e497a">

             <VerticalTimelineElement
             className="vertical-timeline-element--education"
             date="2010-2016"
             iconStyle={{ background:"#3e497a",color:"#fff"}}
             icon={<SchoolIcon/>}
             >

              <h3 className="vertical-timeline-element-title">Saket MGM Sr Sec School,Affiliated to
                 Central Board of Secondary Education (CBSE),New Delhi India</h3>
              
              <p>High School Diploma(Class 10th) </p>
              <p>Grade:10 CGPA</p>

             </VerticalTimelineElement>

               <VerticalTimelineElement
             className="vertical-timeline-element--education"
             date="2017-2019"
             iconStyle={{ background:"#3e497a",color:"#fff"}}
             icon={<SchoolIcon/>}
             >

              <h3 className="vertical-timeline-element-title">SSR Higher Secondary School
              ,Affiliated to State Education Board of MP(MPBSE) India</h3>
              
              <p>High Secondary(Class 12th) </p>
              <p>Grade:9.01 CGPA</p>

             </VerticalTimelineElement>

               <VerticalTimelineElement
             className="vertical-timeline-element--education"
             date="2020-2024"
             iconStyle={{ background:"#3e497a",color:"#fff"}}
             icon={<SchoolIcon/>}
             >

              <h3 className="vertical-timeline-element-title">Institute of Engineering and Technology (IET-DAVV)
              ,Indore(M.P) India</h3>

              <h4 className="verticcal-timeline-element-subtitle">
                Bachelor of Engineering (BE) in Computer Science
              </h4>
              
             </VerticalTimelineElement>

               <VerticalTimelineElement
             className="vertical-timeline-element--work"
             date="2023-current"
             iconStyle={{ background:"#3e497a",color:"#fff"}}
             icon={<WorkIcon/>}
             >

              <h3 className="vertical-timeline-element-title">
                Looking for an incredible SDE opportunity
              </h3>
              
             </VerticalTimelineElement>

        </VerticalTimeline>

    </div>
  )
}

export default Experience