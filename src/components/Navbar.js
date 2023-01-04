import { Link } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';





const Navbar = () => {

    const handleSub = () => {
        
    }

    return (

        <>
            <div className="navcontainer">
                <div className="submenu">
                    <DensityMediumIcon
                        onClick={handleSub}
                    />
                    <ul className="menucontainer">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="#AboutIdentity">About</Link></li>
                        <li><Link to="#ContactIdentity">Contact</Link></li>
                    </ul>
                </div>
                <div className="navlogo">
                    <Link to="/">CWOOL</Link>
                </div>
                <div className="menu">
                    <ul className="menucontainer">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><a href="#AboutIdentity">About</a></li>
                        <li><a href="#ContactIdentity">Contact</a></li>
                    </ul>
                </div>
                <div className="createacc">
                    <Link>
                        <AddBoxIcon className="createicon" />
                        <Button
                        className="createbtn"
                        endIcon={<AddBoxIcon />}
                        onClick="/create"
                        >
                            Create Account
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;