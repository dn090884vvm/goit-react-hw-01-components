import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import Profile from './components/Profile';
// import user from './user.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    /> */}
  </React.StrictMode>
);
