import { useState } from 'react';
import { BrowserRouter, Routes,Route } from'react-router-dom';

import Start from './pages/start/Start';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import Main from './pages/Main/Main';
import Signin from './pages/SignIn/Signin';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import AuthLayout from './components/AuthLayout/AuthLayout';
import MainLayout from './components/MainLayout/MainLayout';
import ReservationFinish from './pages/ReservationFinish/ReservationFinish';
import Mileage from './pages/Mileage/Mileage';
import Setting from './pages/Setting/Setting';
import More from './pages/More/More';
import Detail from './pages/Detail/Detail';
import Quest from './pages/Quest/Quest';
import Reservation from './pages/Reservation/Reservation';
import ReviewFinish from './pages/ReviewFinish/ReviewFinish';
import Review from './pages/Review/Review';
import ReservationList from './pages/ReservationList/ReservationList'
import Test from './pages/Test/Test';


function App() {
  const [role, setRole] = useState("");
  const [page, setPage] = useState(1);
  const [ischeck, setIscheck] = useState(false);

  console.log(role == 'user');
  console.log(page);
  return (
    <>
    <Global styles={reset}/>
    <Routes>
      <Route path='/main/*' element={
      <MainLayout>
        <Routes>
          <Route path='/home' element={<Home page={page} setPage={setPage}/>}/>
          <Route path='/more' element={<More/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='/detail/reservation' element={<Reservation/>}/>
          <Route path='/quest' element={<Quest page={page} setPage={setPage} />} />
          <Route path='/ReservationFinish' element={<ReservationFinish page={page} setPage={setPage} />} />
          <Route path='/reservation' element={<ReservationList page={page} setPage={setPage} />} />
          <Route path='/mileage' element={<Mileage page={page} setPage={setPage} />} />
          <Route path='/my' element={<Setting page={page} setPage={setPage} />} />
          <Route path='/reviewFinish' element={<ReviewFinish page={page} setPage={setPage} />} />
          <Route path='/review' element={<Review page={page} setPage={setPage} />} />
        </Routes>
        </MainLayout>
      }/>
      <Route path='/*' element={
      <AuthLayout>
        <Routes>
          <Route path='/' element={<Start role={role} setRole={setRole}/>} />
          <Route path='/eodiga' element={<Main role={role} ischeck={ischeck} setIscheck={setIscheck}/>}/>
          <Route path='/signin' element={<Signin page={page} setPage={setPage}/>}/>
          <Route path='/signup' element={<Signup page={page} setPage={setPage} role={role}/>}/>
        </Routes>
        </AuthLayout>
      }/>

      </Routes>
      </>
  )
}

export default App
