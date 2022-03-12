import { Typography, CssBaseline, AppBar, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const App = () => {
    return <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera />
                <Typography variant='h3'>Photo Album</Typography>
            </Toolbar>
        </AppBar>
        
    <main>
        <div>
            <Container maxWidth="sm">
                <Typography variant='h2' color='textPrimary' gutterBottom align='center'>Photo Album</Typography>
                <Typography variant='h5' align='center'>This is a test project for material ui learn</Typography>
            </Container>
        </div>
    </main>
    </>
};

export default App;