import { Typography } from "@mui/material";
import tshirt from "../images/tshirt.png"
import pinkbg from '../images/cwoolpinkbg.png'
import cwoolweather from '../images/cwoolweather.png'
import cwoolbook from '../images/cwoolbook.png'
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import cwoolwriting from '../images/cwoolwriting.png'

const Home = () => {
    return (
        <>
            <Typography 
                className="homeheading"
                variant="h1"
                align="center"
                fontFamily={"inherit"}
                fontSize="3em"
            >
                Keep yourself warm this winter <br /> with <span className="cwool">CWOOL</span> clothing.
            </Typography>

            <div className="wintercontainer">
                <h1 className="winterclothing">WINTER CLOTHING <SevereColdIcon fontSize="2em" className="wintericon" /></h1>
                
            </div>
            

            <div className="displayprev">
                <h2>Get Amazing deals on our first launch.</h2>
                <img src={tshirt} alt="cwool tshirt" />
            </div>
            
           

            <div className="displayprev2">
                <h2>Get Upto 30% off on our products.</h2>
            </div>

            <div className="snowbackground">
                <img src={cwoolweather} />
                <h1>
                    Exclusive Gears and Items for mountain climbing. <a href="#">Get Here.</a>
                </h1>
            </div>
            

            <div className="summercontainer">
                <h1 className="summerclothing">SUMMER CLOTHING <WbSunnyIcon fontSize="2em" /></h1>

                <div className="summerprev">
                    <img src={cwoolwriting} />
                    <h2>We have some exciting products planned for next summer.  
                        <a href="#" > Follow Us</a> on socials to get updated.
                    </h2>
                </div>
            </div>

            <div id="AboutIdentity">
                <h1 className="aboutheading">
                    About Us
                </h1>
                <p className="aboutcontent">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus non rem, modi similique enim nihil exercitationem consectetur ipsam! Numquam optio error reprehenderit ex minus ipsam ipsa est consequuntur blanditiis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ab, pariatur nesciunt veritatis quas dolor quasi, facilis, perspiciatis ratione nam quisquam quod voluptas mollitia blanditiis quibusdam nulla perferendis unde sed.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ab, pariatur nesciunt veritatis quas dolor quasi, facilis, perspiciatis ratione nam quisquam quod voluptas mollitia blanditiis quibusdam nulla perferendis unde sed.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ab, pariatur nesciunt veritatis quas dolor quasi, facilis, perspiciatis ratione nam quisquam quod voluptas mollitia blanditiis quibusdam nulla perferendis unde sed.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ab, pariatur nesciunt veritatis quas dolor quasi, facilis, perspiciatis ratione nam quisquam quod voluptas mollitia blanditiis quibusdam nulla perferendis unde sed.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ab, pariatur nesciunt veritatis quas dolor quasi, facilis, perspiciatis ratione nam quisquam quod voluptas mollitia blanditiis quibusdam nulla perferendis unde sed.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ab, pariatur nesciunt veritatis quas dolor quasi, facilis, perspiciatis ratione nam quisquam quod voluptas mollitia blanditiis quibusdam nulla perferendis unde sed.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ab, pariatur nesciunt veritatis quas dolor quasi, facilis, perspiciatis ratione nam quisquam quod voluptas mollitia blanditiis quibusdam nulla perferendis unde sed.
                </p>
            </div>
            
        </>
    );
}
 
export default Home;