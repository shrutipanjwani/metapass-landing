import { useEffect } from 'react'
import Root from './Components/Root';
import Privacy from "./Components/Privacy";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import splitbee from '@splitbee/web';
import Terms from './Components/Terms';


function App() {
  useEffect(() => {
    splitbee.init("Land")
  })
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Root />}></Route>
        <Route exact path='/privacy' element={<Privacy />} ></Route>
        <Route exact path='/terms' element={<Terms />} ></Route>
      </Routes>
    </Router>
  );
}


export default App;
