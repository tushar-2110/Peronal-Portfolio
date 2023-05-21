import React from 'react'

import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import GithubIcon from "@mui/icons-material/GitHub"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">

        <div className="about"  >

            <h2>Hi,My Name is Tushar</h2>
            <div className="prompt">

               <p>
                   Driven and ambitious Computer Science undergrad seeking software developer roles. 
               </p>

               <LinkedInIcon/>
               <EmailIcon/>
               <GithubIcon/>
              


            </div>

        </div>

        <div className="skills">

          <h1>Skills</h1>
          <ol className="list">

            <li className="item">
              <h2>Front-End</h2>
              <span>HTML,CSS,JavaScript,React.js,Next.js,Three.js</span>
            </li>
            
            <li className="item">
              <h2>Back-End</h2>
              <span>JavaScript,Node.js,Express.js,MongoDb</span>
            </li>

            
            <li className="item">
              <h2>Languages</h2>
              <span>C,C++,JavaScript,Python,Java</span>
            </li>


          </ol>

        </div>

    </div>
  )
}

export default Home