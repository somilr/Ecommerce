import './App.css';
import { Route, Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import About from './container/About/About';
import Blog from './container/Blog/Blog';
import Shope from './container/Shope/Shope';
import Login from './container/Login/Login';
import Category_admin from './container/Admin/Category_admin'
import Product_admin from './container/Admin/Product_admin';
import { Provider } from 'react-redux';
import { persistor, store } from './container/redux/Store';
import ProductDetails from './container/Admin/ProductDetails';
import Addtocart from './container/Admin/Addtocart';
import Placeorder from './container/Admin/Placeorder';
import Order_admin from './container/Admin/Order_admin';
import { SnackbarProvider } from 'notistack';
import { ToastContainer } from 'react-toastify';
import AppRoute from './container/Route/AppRoute';
import { PersistGate } from 'redux-persist/integration/react';



function App() {

  return (
    <div className="App">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <SnackbarProvider maxSnack={3}>
            <Header />
            <AppRoute />
            {/* <Switch>
            <Route exact path={"/Home"} component={Home} />
            <Route exact path={"/About"} component={About} />
            <Route exact path={"/Blog"} component={Blog} />
            <Route exact path={"/Shope"} component={Shope} />
            <Route exact path={"/Login"} component={Login} />
            <Route exact path={"/Category_admin"} component={Category_admin} />
            <Route exact path={"/Product_admin"} component={Product_admin} />
            <Route exact path={"/ProductDetails"} component={ProductDetails} />
            <Route exact path={"/Placeorder"} component={Placeorder} />
            <Route exact path={"/Order_admin"} component={Order_admin} />
            <Route exact path={"/Addtocart"} component={Addtocart} />
          </Switch> */}
            <Footer />
          </SnackbarProvider>
        </Provider>
      </PersistGate>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
