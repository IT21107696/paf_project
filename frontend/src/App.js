import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Components/ProfilePage/Profile';
import UserRegistration from './Components/ProfilePage/Register';
import UserProfile from './Components/UserProfile/UserProfile';
import PostPage from './Components/PostPage/PostPage';
import GroupsContainer from './Groups/GroupsContainer';
import CreateAdvertisement from './Components/Advertisement/CreateAdvertisement';
import Notifications from './Components/Notifications/Notifications';
import CreateNotification from './Components/Notifications/CreateNotification';
import Advertisements from './Components/Advertisement/Advertisements';
import Admin from './Components/Admin/Admin';
import AdminDashboard from './Components/Admin/AdminDashboard';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={
            localStorage.getItem("admin") ?
              <AdminDashboard />
              :

              (localStorage.getItem("uid") === undefined || localStorage.getItem("uid") === null) ?
                <LoginPage /> : <Home />
          } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/user-profile/:id" element={<UserProfile />} />
          <Route path="/groups" element={<GroupsContainer />} />

          <Route path="/notifications" element={<Notifications />} />
          {localStorage.getItem("admin") && <Route path="/create-advertisement" element={<CreateAdvertisement />} />}

          {localStorage.getItem("admin") && <Route path="/create-notifications" element={<CreateNotification />} />}
          {localStorage.getItem("admin") && <Route path="/advertisements" element={<Advertisements />} />}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          
          {/*
          <Route path="/users" component={UserList} />
          <Route path="/about" component={About} /> */}
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
