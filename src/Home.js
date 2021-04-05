import { Box, Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from './Components/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container align='center'>
      <Box my={3}>
        <Typography variant='h3'>All Posts</Typography>
      </Box>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
