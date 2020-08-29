import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Store from './pages/Store'
import Library from './pages/Library'
import Media from './pages/Media'
import MyGames from './pages/MyGames'
import Settings from './pages/Settings'

import NoMatch from './pages/NoMatch'
import NavigationLink from './components/NavigationLink';
import Navigation from './components/Navigation';
import './App.css';
import Header from './components/Header';


function App() {
  const title = 'gamer'
  const routes = [
    {
      title: 'Store',
      path: '/',
      component: Store,
      exact: true
    }, 
    {
      title: 'My Games',
      path: '/gamecollections',
      component: MyGames
    },
    {
      title: 'Media',
      path: '/media',
      component: Media
    },
    {
      title: 'Library',
      path: '/library',
      component: Library
    },
    {
      title: 'Settings',
      path: '/settings',
      component: Settings
    }
  ]
  return (
    <div className="App my-8">
      <Helmet titleTemplate={`%s - ${title}`}/>
      <Header/>
      <Router>
        <Navigation>
          {routes.map((route, i) => (
            <NavigationLink key={i} {...route} />
          ))}
        </Navigation>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
