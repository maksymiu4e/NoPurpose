import React from 'react'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();

  // console error solution
  // defaultProps will be removed from function components in a future major release.
  // Use JavaScript default parameters instead.
  const error = console.error;
  console.error = (...args) => {
      if (/defaultProps/.test(args[0])) return;
      error(...args);
  };

  return (
    <>
      <ToastContainer position='bottom-right' theme='colored' />
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  )
}

export default observer(App);
