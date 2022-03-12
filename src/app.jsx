import { Typography, CssBaseline, AppBar, Toolbar, Container, Box, Button, Grid, } from '@material-ui/core';
import { PhotoCamera, AddToPhotos } from '@material-ui/icons';
import { Pagination } from '@material-ui/lab'
import { useEffect, useState } from 'react';
import { getAirlinePassengers } from './api/controller';
import PassengerCard from './components/PassengerCard';

import useStyles from './style';
const App = () => {
    let classes = useStyles();
    let [data, setData] = useState([]);
    let [totalPages,setTotalPages] = useState(0);
    let [totalPassengers,setTotalPassengers] = useState(0);

    useEffect(async () => {
        try {
            console.log('fetching data');
            let body = await getAirlinePassengers(0, 10);
            setTotalPages(body.totalPages);
            setTotalPassengers(body.totalPassengers);
            setData(body.data);
            console.log('fetch success: ', body);
        } catch (e) {

        }

    }, []);


    return <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera className={classes.photoIcon} />
                <Typography variant='h4'>Photo Album</Typography>
            </Toolbar>
        </AppBar>

        <main>
            <div>
                <Container maxWidth="md" className={classes.mainTitle}>
                    <Typography variant='h2' color='textPrimary' gutterBottom align='center'>Photo Album</Typography>
                    <Typography variant='h5' align='center' gutterBottom>This is a test project for material ui learn</Typography>
                    <Box justifyContent='space-evenly' display='flex'>
                        <Button variant='contained' color='primary' size='small'>
                            <AddToPhotos /> Add new Image
                        </Button>
                        <Button variant='outlined' color='primary' size='small'>
                            Add new Image
                        </Button>
                    </Box>
                    <Pagination onChange={async (e,pnumber)=>{
                        let body = await getAirlinePassengers(pnumber, 10);
                        setData(body.data);

                    }} className={classes.pagination} count={totalPages} color="secondary" size='large' />

                    <Grid container spacing={2} justifyContent='center'>
                        {data.map((body,i)=>(<Grid item xs={12} sm={6} key={i}>
                            <PassengerCard data={body} />
                        </Grid>))}
                    </Grid>
                </Container>
            </div>
        </main>


    </>
};

export default App;