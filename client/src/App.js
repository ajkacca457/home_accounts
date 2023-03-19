import Home from './pages/Home';
import Auth from './pages/Auth';
import Stats from './pages/Stats';
import IncomeList from './pages/IncomeList';
import ExpenseList from './pages/ExpenseList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/stats' element={<Stats/>}/>
          <Route path='/incomes' element={<IncomeList/>}/>
          <Route path='/expenses' element={<ExpenseList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
