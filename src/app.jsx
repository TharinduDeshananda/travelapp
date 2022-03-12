import { Typography, CssBaseline, AppBar, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './style';
const App = () => { 
    let classes = useStyles();
    return <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera className={classes.photoIcon}/>
                <Typography variant='h4'>Photo Album</Typography>
            </Toolbar>
        </AppBar>
        
    <main>
        <div>
            <Container maxWidth="sm" className={classes.mainTitle}>
                <Typography variant='h2' color='textPrimary' gutterBottom align='center'>Photo Album</Typography>
                <Typography variant='h5' align='center'>This is a test project for material ui learn</Typography>
            </Container>
        </div>
    </main>
    </>
};

export default App;