import Home from './pages/Home';
import Auth from './pages/Auth';
import Stats from './pages/Stats';
import IncomeList from './pages/IncomeList';
import ExpenseList from './pages/ExpenseList';
import Error from './pages/Error';
import AddTransaction from './pages/AddTransaction';
import EditForm from './components/EditForm';
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
            <Route path='add-transaction' element={<AddTransaction/>}/>
            <Route path='edit-income/:id' element={<EditForm/>}/>
            <Route path='edit-expense/:id' element={<EditForm/>}/>    
            
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
