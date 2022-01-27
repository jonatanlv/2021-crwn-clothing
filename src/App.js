import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

//TODO Utilizar next.js para el sitio
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import ShopPage from "./pages/shop/shop.component";
import { auth, createUserProfileDocument } from "./config/firebase";

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  //TODO Actualizar react-router-dom a la última versión (6.0.0)
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
