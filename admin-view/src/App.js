import './App.css'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectRoute';

import Login from './Views/Login.js'
import Register from './Views/Register';
import Home from './Views/Home'

import FormAdd from './Views/FormAdd';
import ActionForm from './Views/ActionForm';
import Profile from './Views/Profile';
import EditProfile from './Views/EditProfile';
import Chart from './Components/Charts';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
        <Route path="/addform" element={
          <ProtectedRoute>
            <FormAdd />
          </ProtectedRoute>
        } />
        <Route path="/:id" element={
          <ProtectedRoute>
            <ActionForm />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
         <Route path="/piechart" element={
          <ProtectedRoute>
            <Chart />
          </ProtectedRoute>
        } />
         <Route path="/profile/:id" element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        } />
      </Routes>

    </div>
  )
}

export default App;
