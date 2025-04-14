// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import ConstructionList from './pages/ConstructionList';
// import ConstructionInfo from './pages/ConstructionInfo';

// function App() {
//   return (
//       <Router>
//         <Routes>
          
//       <Route path='/constructionList' element={<ConstructionList/>}/>
//       <Route path='/constructionInfo' element={<ConstructionInfo/>}/>

   
//         </Routes>
//       </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConstructionList from './pages/ConstructionList';
import ConstructionInfo from './pages/ConstructionInfo';

function App() {
 return (
   <Router>
     <Routes>
       {/* Render ConstructionList directly at the root path */}
       <Route path='/' element={<ConstructionList />} />
       <Route path='/constructionList' element={<ConstructionList />} />
       <Route path='/constructionInfo' element={<ConstructionInfo />} />
     </Routes>
   </Router>
 );
}

export default App;
