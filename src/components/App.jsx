import Profile from './Profile/Profile';
import user from './DataBase/user.json';
import Statistics from './Statistics/Statistics';
import data from './DataBase/data.json';
import FriendsList from './FriendList/FriendList';
import friends from './DataBase/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};
