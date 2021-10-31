import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import AddPackage from './Pages/AddPackage/AddPackage';
import Booking from './Pages/Booking/Booking';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ScrollToTop from './utilities/ScrollToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ScrollToTop>
            <Header></Header>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/booking/:bookingId">
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path="/myOrders">
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute path="/manageOrders">
                <ManageOrders></ManageOrders>
              </PrivateRoute>
              <PrivateRoute path="/addPackage">
                <AddPackage></AddPackage>
              </PrivateRoute>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
