import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
mainTitle:{
    marginTop:'100px'
},
photoIcon:{
    fontSize:'84px',
    marginRight:"20px"
},
pagination:{
    width:'100%',
    margin:'80px 0px',
    justifyContent:'center',
    display:'flex'
}
}));

export default useStyles;