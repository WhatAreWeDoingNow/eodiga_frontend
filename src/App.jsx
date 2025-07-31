import { useState } from 'react';
import { BrowserRouter, Routes,Route } from'react-router-dom';

import Start from './pages/start/Start';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import MainLayout from './components/MainLayout/MainLayout';
import Main from './pages/Main/Main';
import Signin from './pages/SignIn/Signin';
import Signup from './pages/Signup/Signup';

function App() {
  const [role, setRole] = useState("");
  const [page, setPage] = useState(1);

  console.log(role);
  console.log(page);
  return (
    <>
    <Global styles={reset}/>
    <Routes>
      <Route path='/*' element={
      <MainLayout>
        <Routes>
          <Route path='/' element={<Start role={role} setRole={setRole}/>} />
          <Route path='/eodiga' element={<Main/>}/>
          <Route path='/signin' element={<Signin page={page} setPage={setPage}/>}/>
          <Route path='/signup' element={<Signup page={page} setPage={setPage}/>}/>
        </Routes>
        </MainLayout>
      }/>
      </Routes>
      </>
  )
}

export default App
