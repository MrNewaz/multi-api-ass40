import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const Post = (props) => {
  const { post } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textPrimary'
            gutterBottom
          >
            Title: {post.title}
          </Typography>

          <Typography variant='body2' component='p' color='textSecondary'>
            {post.body}
          </Typography>
        </CardContent>
        <CardActions align='center'>
          <Link to={`/post/${post.id}`}>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
