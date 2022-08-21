import { Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import Main from "./Main";
import Login from './Login';
import Register from './Register';
import mainApi from '../utils/MainApi';
import wellDone from '../images/well-done.svg';
import somethingWrong from '../images/something-wrong.svg';

function App() {

  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [imageToolTip, setImageToolTip] = React.useState('');
  const [isFailed, setIsFailed] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      // проверяем токен пользователя
      mainApi.getUserInfo(jwt).then((res) => {
        if (res.data) {
          setLoggedIn(true);
          setEmail(res.data.email);
        }
        if (res.data.isAdmin) {
          setEmail(res.data.email + ' (Администратор)');
          setIsAdmin(true);
        }
      })
      .catch(error => 
        console.log('ОШИБКА:', error))
    }
  }, [loggedIn]);

  function handleRegistration(formData) {
    mainApi.register(formData.password, formData.email)
    .then((res) => {
        setMessage("Вы успешно зарегистрировались!");
        setImageToolTip(wellDone);
    })
    .catch(err => {
        setMessage(err);
        setImageToolTip(somethingWrong);
    })
    .finally(() => setIsRegistered(true));
  }

  function handleLogin(formData) {
    mainApi.authorize(formData.password, formData.email)
    .then((data) => {
      localStorage.setItem('jwt', data.jwt);
      mainApi["token"] = `Bearer ${localStorage.getItem('jwt')}`;
    })
    .then(() => {
        setLoggedIn(true);
        navigate("/");
    })
    .catch(err => {
        console.log(err);
        setImageToolTip(somethingWrong);
        setIsFailed(true);
    });
  }

  function handleExit() {
    setLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem('jwt');
  }

  function closeSuccessToolTip() {
    setIsRegistered(false);
    navigate("/signin");
  }

  function closeFailedPopup() {
    setIsFailed(false);
  }

  return (
    <>
    <Routes>
      <Route path="/" element={
        <Main 
          email={email}
          loggedIn={loggedIn}
          handleExit={handleExit}
          isAdmin={isAdmin}
        />
      } />
      <Route path="/signin" element={
        <Login 
          onClose={closeFailedPopup}
          isOpen={isFailed}
          handleLogin={handleLogin}
          imageToolTip={imageToolTip}
        />
      } />
      <Route path="/signup" element={
        <Register 
          onClose={closeSuccessToolTip}
          isOpen={isRegistered}
          handleRegistration={handleRegistration}
          message={message}
          imageToolTip={imageToolTip}
        />
      } />
    </Routes>
    </>
  );
}

export default App;
