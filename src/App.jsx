import { useState } from 'react';
import { BrowserRouter, Routes,Route } from'react-router-dom';

import Start from './pages/start/Start';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
