import { Button, TextField, Typography } from "@mui/material";
// import { lightBlue } from "@mui/material/colors";
import SearchIcon from '@mui/icons-material/Search';
import Productlist from "./Productlist";
import Dots from "./Dots";
import Summer from "./Summer";
import { useState } from "react";


// const useStyles = makeStyles({
//   text: {
//     // fontSize: 60,
//     backgroundColor: "white",
//   }
// })


const Products = () => {

    // const classes = useStyles()

    const [currentIndex, setCurrentIndex] = useState(0)

    const clothingProducts = [
        {name:"down jackets", url: "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {name:"trousers", url: "https://images.pexels.com/photos/6974943/pexels-photo-6974943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {name:"hats", url: "https://images.pexels.com/photos/206481/pexels-photo-206481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {name:"mufflers", url: "https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {name:"boots", url: "https://images.pexels.com/photos/320570/pexels-photo-320570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {name:"dog clothes", url: "https://images.pexels.com/photos/4062187/pexels-photo-4062187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {name:"Climbing Gears", url: "https://images.pexels.com/photos/13449839/pexels-photo-13449839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    ]

    const summerProducts = [
        {name:"tshirts", url: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {name:"shorts", url: "https://images.pexels.com/photos/3228855/pexels-photo-3228855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {name:"Skirts & Frocks", url: "https://images.pexels.com/photos/1140907/pexels-photo-1140907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {name:"Sun Hats", url: "https://images.pexels.com/photos/755023/pexels-photo-755023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    ]

    const handleLeftArrow =  () => {
        const firstimage = currentIndex === 0
        const newIndex = firstimage ? summerProducts.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const handleRightArrow = () => {
        const lastimage = currentIndex === summerProducts.length - 1
        const newIndex = lastimage ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const handleDot = (imageindex) => {
        setCurrentIndex(imageindex)
    }

    return (
        <div className="productcontainer">
            <div className="productone ">
            <Typography 
                // className= ""
                variant="h1"
                component={"h2"}
                fontSize='4em'
            >
                OUR PRODUCTS
            </Typography>

            <div className="search">
                <TextField 
                    variant='standard'
                    label='Search Products'
                    className="searchbox"
                    autoComplete="false"
                />
                    {/* <SearchIcon
                        className="searchicon"
                        color="primary" 
                    /> */}
                    <Button
                        style={{
                            backgroundColor: 'rgb(226,233,240)',
                            color: 'black',
                            borderColor: 'black'
                            
                        }}
                        variant="outlined"
                        className="searchbutton"
                        startIcon={<SearchIcon />}
                    >
                    Search
                    </Button>
            </div>
            </div>

            <div className="clothinglists relative">

                
                {clothingProducts.map((item,itemIndex) => {
                    return (
                        <Productlist key={itemIndex} item={item} itemIndex={itemIndex} oddeven={itemIndex%2 === 0}/>
                    )
                })}
                
                <h1 className="summerProductsTitle">Our Summer Products</h1>
                
                <div className="summercarousel">
                    <div className="flex justify-between relative">
                        <div onClick={handleLeftArrow} className="leftarrow inline absolute z-10 left-[10rem] top-64 bg-slate-300 bg-opacity-10 hover:bg-opacity-40 hover:cursor-pointer rounded-full text-align-center text-white text-5xl p-6">
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                        <div onClick={handleRightArrow} className="rightarrow  inline absolute z-10 top-64 right-[10rem] text-end bg-slate-300 rounded-full bg-opacity-10 hover:bg-opacity-40 hover:cursor-pointer text-align-center text-white text-5xl p-6">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="summerlist" style={{backgroundImage: `url(${summerProducts[currentIndex].url})`}}>
                        <div className="w-full h-full flex flex-col-reverse items-left align-bottom">
                            <h1 className=" w-[35%] text-center p-2 font-bold text-6xl capitalize text-black bg-white bg-opacity-70 rounded-xl m-2">{summerProducts[currentIndex].name}</h1>
                        </div>
                       
                    </div>

                    <div className="dots flex justify-center gap-5 mt-[-2em] mb-9 text-slate-400">
                        {summerProducts.map((image, imageIndex) => (
                            <Dots
                                imageIndex={imageIndex}
                                handleDot={handleDot}
                                active={imageIndex === currentIndex}
                            />
                        ))}
                    </div>

                    <p className=" text-center text-teal-500  text-5xl p-9  bg-red-300 bg-opacity-30 ml-3 mr-3 rounded-xl mb-9" >Our Summer products will be launching soon on our official store. Launch date and time will be updated via our social media.</p>

                </div>
                

            </div>
            


            
        </div>
    );
}
 
export default Products;