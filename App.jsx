import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<nav>

<div className="container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
    </div>
</nav>
<div id="home">
    <img src="./src/sarthak bansal.jpg" className="img1 "alt="" />
    <div className="info1">
        <div className="hey">Hello there I'am</div>
        <div className="name">SARTHAK BANSAL</div>
        <div className="bio">Web Developer | Data Science | Software Engineer </div>
    </div>
</div>
  <div id="about">
    <div className="info2">
    I am a seasoned web developer, data scientist, and software engineer with 6 years of professional experience, including a successful tenure at Amazon. Known for my expertise in building scalable web applications, crafting intuitive user interfaces, and leveraging data-driven insights,I also involves in in blending technical innovation with practical problem-solving. My skillset spans a range of technologies, including React, Java, Python, and machine learning frameworks, enabling to create impactful solutions that drive business growth. Passionate about innovation and coding excellence, I always thrives in dynamic environments, delivering results that exceed expectations.
    </div>
    <img src="./src/computer2.jpg" className='img2' alt="" />
   </div>
   
   <div id="experience">
    <div className="main">
        <div className="box">
            <img src="./src/chatbot.jpg" className='bimg' alt="" />
            <p className='p1'>Chatbot</p>
            <p className='p2'>Speak recognition chatbot for medical</p>
        </div>
        <div className="box">
            <img src="./src/e commerece website.jpg" className='bimg' alt="" />
            <p className='p1'>E-Commerce</p>
            <p className='p2'>Dynamic E-commerce shopping website</p>
        </div>
        <div className="box">
            <img src="./src/music.jpg" className='bimg' alt="" />
            <p className='p1'>Musify</p>
            <p className='p2'>Streaming songs platform</p>
        </div>
        <div className="box">
            <img src="./src/sales.jpg" className='bimg' alt="" />
        <p className='p1'>Marketing</p>
        <p className='p2'>Predicts the sales </p>
            </div>
        <div className="box">
            <img src="./src/recogniser.jpg" className='bimg' alt="" />
            <p className='p1'>AI or Real</p>
            <p className='p2'>Image reacogniser fir AI and Real image</p>

        </div>
        <div className="box">
            <img src="./src/stock.jpg" className='bimg
            ' alt="" />
            <p className='p1'>Stocks</p>
            <p className='p2'>Stock Marketing sales prediction</p>
        </div>
    </div>
    </div>
     <div id="skills">
        <div className="main2">
           <div className="web">
            <div className="web1">
                <div className="web2"><div className="web21"></div></div>
                <div className="web3">
                    <span className="web4">HTML</span>
                    <span className="web4">90%</span>
                </div>
            </div>
            <div className="web1">
                <div className="web2"><div className="web21"></div></div>
                <div className="web3">
                    <span className="web4">CSS</span>
                    <span className="web4">90%</span>
                </div>
            </div>
            <div className="web1">
                <div className="web2"><div className="web22"></div></div>
                <div className="web3">
                    <span className="web4">JS</span>
                    <span className="web4">60%</span>
                </div>
            </div>
            <div className="web1">
                <div className="web2"><div className="web23"></div></div>
                <div className="web3">
                    <span className="web4">REACT</span>
                    <span className="web4">80%</span>
                </div>
            </div>
            <div className="web1">
                <div className="web2"><div className="web24"></div></div>
                <div className="web3">
                    <span className="web4">NODE</span>
                    <span className="web4">70%</span>
                </div>
            </div>

           </div>
           <div className="data">
            <div className="data1">
                <div className="data2"><div className="data21"></div></div>
                <div className="data3">
                    <div className="data4">PYTHON</div>
                    <div className="data4">85%</div>
                </div>
            </div>
            <div className="data1">
                <div className="data2"><div className="data22"></div></div>
                <div className="data3">
                    <div className="data4">SQL</div>
                    <div className="data4">80%</div>
                </div>
            </div>
            <div className="data1">
                <div className="data2"><div className="data23"></div></div>
                <div className="data3">
                    <div className="data4">ML</div>
                    <div className="data4">75%</div>
                </div>
            </div>
           </div>
         </div>
     </div>
     <div id='contact'>
        <div className="last">
            <div className="mail">
                <a href="https://mail.google.com"><img src="./src/mail.jpg"  className='a1' alt="" /></a>
               
            </div>
            <div className="linkedin">
                <a href="https://in.linkedin.com"><img src="./src/linkedin.jpg"  className='a1' alt="" /></a>
            </div>
            <div className="github">
                <a href="https://github.com"><img src="./src/github.jpg"  className='a1' alt="" /></a>
            </div>
            <div className="facebook">
                <a href="https://www.facebook.com"><img src="./src/facebook.jpg"  className='a1' alt="" /></a>
            </div>
            <div className="instragram">
                <a href="https://www.instagram.com"><img src="./src/instagram.jpg"  className='a1' alt="" /></a>
            </div>
        </div>
     </div>
       
    </>
  )
}

export default App
