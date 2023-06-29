import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import Widgets from './Widgets';

function App() {
  // We are pulling the user from the redux using the useSelector() hook
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        )
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  });

  return (
    <div className="app">
        <Header />

        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )}
  
    </div>
  );
}

export default App;
