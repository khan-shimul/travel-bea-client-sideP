import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackage from './components/AddPackage/AddPackage';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import SignUp from './components/Login/SignUp/SignUp';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import PackageDetails from './components/PackageDetails/PackageDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="Font-link">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute exact path="/package-details/:id">
            <PackageDetails />
          </PrivateRoute>
          <Route path="/my-orders">
            <MyOrders />
          </Route>
          <Route path="/manage-orders">
            <ManageOrders />
          </Route>
          <PrivateRoute path="/add-package">
            <AddPackage />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
