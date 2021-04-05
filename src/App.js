import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import PostDetails from './PostDetails';
import Theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/post/:id'>
            <PostDetails />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
