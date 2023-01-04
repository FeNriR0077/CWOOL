import { Button, makeStyles, TextField, Typography } from "@mui/material";
// import { lightBlue } from "@mui/material/colors";
import SearchIcon from '@mui/icons-material/Search';


// const useStyles = makeStyles({
//   text: {
//     // fontSize: 60,
//     backgroundColor: "white",
//   }
// })


const Products = () => {

    // const classes = useStyles()

    return (
        <>
            <div className="productone">
            <Typography 
                // className= {classes.text}
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
            


            
        </>
    );
}
 
export default Products;