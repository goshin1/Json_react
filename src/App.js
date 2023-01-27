import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day  from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  const name = "Tom";

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<DayList></DayList>}/>
          <Route exact path='/day/:day' element={<Day></Day>}/>
          <Route exact path='/create_word' element={<CreateWord></CreateWord>}/>
          <Route path='' element={<EmptyPage></EmptyPage>}/>
          <Route path='/create_day' element={<CreateDay></CreateDay>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
