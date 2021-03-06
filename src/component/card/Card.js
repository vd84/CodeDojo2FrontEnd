import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
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
    backgroundColor: red[500],
  },
}));

const CardItem = ({rssItem}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader

        title= {rssItem.entryTitle}
        subheader={rssItem.pubDate}
      />
      <CardContent>
        <a href={rssItem.link}>Link to RSS</a>
        <Typography variant="body2" color="textSecondary" component="p">
          {rssItem.contentSnippet}
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}
export default CardItem;