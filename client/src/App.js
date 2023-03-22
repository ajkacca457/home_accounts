import Home from './pages/Home';
import Auth from './pages/Auth';
import Stats from './pages/Stats';
import IncomeList from './pages/IncomeList';
import ExpenseList from './pages/ExpenseList';
import Error from './pages/Error';
import SharedLayout from './components/SharedLayout';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' 
          element={
          <ProtectedRoute>
            <SharedLayout/>
          </ProtectedRoute>}
          > 
            <Route index element={<Stats/>}/>
            <Route path='incomes' element={<IncomeList/>}/>
            <Route path='expenses' element={<ExpenseList/>}/>    
          </Route>
          <Route path="/" index element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
