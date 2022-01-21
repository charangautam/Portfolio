import './intro.css';
import me from '../../img/profile.png'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-greeting">Greetings, my name is</h2>
                    <h1 className="i-name">Charan Gautam</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Full-Stack Developer</div>
                            <div className="i-title-item">MERN Developer</div>
                            <div className="i-title-item">MEAN Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                        I am a passionate web developer living in Calgary, Alberta. At the moment, I am focusing on building and honing my personal brand in order to break into the tech industry. I love tech as it continues to influence our lives around us as well as build on top of the greatest innovation in the last century, the internet!
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;