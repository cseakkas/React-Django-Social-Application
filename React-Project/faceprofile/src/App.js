import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
 
function PublicRoute({ children }) {
  const token = localStorage.getItem("access");
  return token ? <Navigate to="/" replace /> : children;
}
 
function PrivateRoute({ children }) {
  const token = localStorage.getItem("access");
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } 
        />
        <Route 
          path="/register" 
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          } 
        />

        
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}