// darkMode context
import { useContext } from 'react';
import { ThemeContext } from '../../context';
// css file
import './about.css';
// magnifying lense and achievement imgs
import about from '../../img/about.jpg';
import achievement from '../../img/achievement.png';

const About = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="about">
            <div className="a-left">
                <div className="a-card bg" style={{ backgroundColor: darkMode && "#C7BEA2" }}></div>
                <div className="a-card">
                    <img src={about} alt="Magnifying lense to represent About Me section" className="a-about-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I pursued Kinesiology in my undergrad because of an innate drive to empower others to experience the physical, social and mental wellness benefits associated with healthy living.
                </p>
                <p className="a-desc">
                    When I started programming, a few years ago, I was very invested in exploring how technology enables and advances healthcare. My purpose is to utilize the knowledge acquired through my Kinesiology degree and apply it to write software that works to make a difference and improve lives of users as tech continues to drive the world forward.
                </p>
                <div className="a-achievement">
                    <img src={achievement} alt="Past achievements" className="a-acheivement-img" />
                    <div className="a-achievement-texts">
                        <h4 className="a-achievement-title" style={{ color: darkMode && "#F2E1C1" }}>Bachelor's of Kinesiology</h4>
                        <p className="a-achievement-date">2017-2021</p>
                        <p className="a-achievement-desc">
                            3.74 GPA across degree. Acquired extensive knowledge related to health, wellness, nutrition, exercise and performance psychology.
                        </p>
                    </div>
                </div>
                <div className="a-achievement">
                    <img src={achievement} alt="Past achievements" className="a-acheivement-img" />
                    <div className="a-achievement-texts">
                        <h4 className="a-achievement-title" style={{ color: darkMode && "#F2E1C1" }}>CareerFoundry Web Development Bootcamp</h4>
                        <p className="a-achievement-date">2021-2022</p>
                        <p className="a-achievement-desc">
                            Acquired knowledge in a range of techologies spanning from MongoDB, NodeJS and ExpressJS on the backend to React and Angular on the frontend to build functional websites. Also learnt and implemented React Native and testing/debugging tools.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About