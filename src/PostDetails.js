import { Box, Card, Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from './Components/Comment';

const PostDetails = () => {
  let { id } = useParams();
  const [postdetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPostDetail(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container align='center'>
      <Card>
        <Typography variant='h5'>Post Title: {postdetail.title}</Typography>
        <Typography variant='h6' color='textSecondary'>
          {postdetail.body}
        </Typography>
      </Card>
      <Box my={3}>
        <Typography variant='h3'>Comments</Typography>
      </Box>
      <Grid container spacing={2}>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default PostDetails;
