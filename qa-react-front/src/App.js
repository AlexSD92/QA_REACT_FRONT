import './App.css';
import QuestionList from './components/questions/QuestionList';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/questions' element={<QuestionList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
