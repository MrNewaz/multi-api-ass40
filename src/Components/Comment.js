import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import { Avatar, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 351,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const Comment = (props) => {
  const { comment } = props;

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card className={classes.root}>
        <Box ml={1}>
          <Avatar
            alt='Remy Sharp'
            src={`https://randomuser.me/api/portraits/men/${comment.id}.jpg`}
            className={classes.large}
          />
        </Box>
        <div align='left' className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant='h6'>Name: {comment.name}</Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              email: {comment.email}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {comment.body}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};

export default Comment;
