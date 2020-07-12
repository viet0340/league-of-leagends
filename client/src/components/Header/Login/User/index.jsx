import { IsLogout } from 'components/redux/actionCreator';
import React from 'react';
import { useDispatch } from 'react-redux';
import './index.scss';
import { useHistory } from 'react-router-dom';
User.propTypes = {};

function User() {
  const dispatch = useDispatch();
  const history = useHistory();
  function handleLogout() {
    let a = document.getElementsByClassName('login_logout');
    a[0].style.display = 'block';
    localStorage.removeItem('user');
    dispatch(IsLogout());
    history.push('/');
    window.location.reload();
  }
  return (
    <div className='user'>
      <div className='user_image'>
        <img src='/logo.png' alt='' />
      </div>
      <div className='user_logout' onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}

export default User;
