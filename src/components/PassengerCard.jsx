import { Card, CardContent, CardMedia,Typography ,CardActions,Button} from '@material-ui/core';
import useStyles from './style';
const PassengerCard = (props) => {
    const classes = useStyles();
    return <Card>
        <CardMedia image={props.data.airline[0].logo} title={props.data.airline[0].name} className={classes.cardMedia}/>
        <CardContent >
        <Typography gutterBottom variant="h5" component="h2">
            {props.data.airline[0].country} {props.data.airline[0].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.airline[0].slogan}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Goto Site
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
};

export default PassengerCard;