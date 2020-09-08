import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import {Link} from 'gatsby'

import Paper from '@material-ui/core/Paper';
import ArrowRightAltSharpIcon from '@material-ui/icons/ArrowRightAltSharp';
import Button from '@material-ui/core/Button';

import Img from 'gatsby-image'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom:50,
  },
  button: {
    margin: theme.spacing(1),
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'rgb(163, 155, 134)',
  },
}));

export default function Test({fluid,title,author,date,path}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Paper  elevation={8}>
    <Card  className= "card-img1">
      <CardHeader style={{textTransform:'capitalize'}}
        avatar={
          <Avatar  className={classes.avatar} >
       
          </Avatar>
        }
       
        
        title={author}
        subheader={date}
      />
      
    
     <Link to={path}> <Img fluid={fluid} ></Img></Link>
     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{textTransform:'capitalize'}}>
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Paper elevation={0}>
      <Link to={path}><Button
        variant="contained"
        color="inherit"
        edge="false"
        className={classes.button}
      startIcon={<ArrowRightAltSharpIcon/>}

      >
        Read More
      </Button>
      </Link>
      </Paper>
      
      </CardActions>
      
    </Card>
    </Paper>
  
  );
}
