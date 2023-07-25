import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';

const Home = () => {
  const { user,logOut } = useUserAuth();
  console.log(user);

  const handleLogOut = async() => {
    try {
      await logOut();

    } catch (err) {
      console.log(err.massage);

  }
  }
  return (
    <div>
      <h1>Wellcom </h1>
      <br />
      {user && user.email}
      <div>
         <Button onClick={handleLogOut}>Log out</Button>
      </div>

    </div>
  )
}

export default Home
