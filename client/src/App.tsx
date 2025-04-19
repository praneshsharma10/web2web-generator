
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Builder } from './pages/Builder';

import { parseXml } from './steps';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// function App(){
//   return (
//     <div className="bg-purple-500 text-white text-xl p-4 rounded">
//   Tailwind is now working! 🎉
// </div>

//   )
// }


// export default App;