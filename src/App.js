
//****************************** This App.ja is for Counterapp *********************************** */

//import React, { Component } from "react";
// import NavBar from "./components/navbar";
// import Counters from "./components/counters";
// import "./App.css";

// class App extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 }
//     ]
//   };

//   handleIncrement = counter => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };

//   handleDecrement = counter => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value--;
//     this.setState({ counters });
//   };

//   handleReset = () => {
//     const counters = this.state.counters.map(c => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };

//   handleDelete = counterId => {
//     const counters = this.state.counters.filter(c => c.id !== counterId);
//     this.setState({ counters });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <NavBar
//           totalCounters={this.state.counters.filter(c => c.value > 0).length}
//         />
//         <main className="container">
//           <Counters
//             counters={this.state.counters}
//             onReset={this.handleReset}
//             onIncrement={this.handleIncrement}
//             onDecrement={this.handleDecrement}
//             onDelete={this.handleDelete}
//           />
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;




// *************************************** This App.js is for Moviesapp **********************************************

// import React, { Component } from "react";
// import Movies from "./components/movies";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <main className="container">
//         <Movies />
//       </main>
//     );
//   }
// }

// export default App;


// ************ for navigation*****************

// import React, { Component } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";
// import Movies from "./components/movies";
// import MovieForm from "./components/movieForm";
// import Customers from "./components/customers";
// import Rentals from "./components/rentals";
// import NotFound from "./components/notFound";
// import NavBar from "./components/navBar";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <NavBar />
//         <main className="container">
//           <Switch>
//             <Route path="/movies/:id" component={MovieForm} />
//             <Route path="/movies" component={Movies} />
//             <Route path="/customers" component={Customers} />
//             <Route path="/rentals" component={Rentals} />
//             <Route path="/not-found" component={NotFound} />
//             <Redirect from="/" exact to="/movies" />
//             <Redirect to="/not-found" />
//           </Switch>
//         </main>
//       </React.Fragment>
//     );
//   }
// }

//  export default App;



// *********************************** for Login and Register ************************************

// import React, { Component } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";
// import Movies from "./components/movies";
// import MovieForm from "./components/movieForm";
// import Customers from "./components/customers";
// import Rentals from "./components/rentals";
// import NotFound from "./components/notFound";
// import NavBar from "./components/navBar";
// import LoginForm from "./components/loginForm";
// import RegisterForm from "./components/registerForm";
// import SearchBox from "./components/searchBox";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <NavBar />
//         <main className="container">
//           <Switch>
//             <Route path="/register" component={RegisterForm} />
//             <Route path="/login" component={LoginForm} />
//             <Route path="/movies/:id" component={MovieForm} />
//             <Route path="/movies" component={Movies} />
//             <Route path="/customers" component={Customers} />
//             <Route path="/rentals" component={Rentals} />
//             <Route path="/not-found" component={NotFound} />
//             <Redirect from="/" exact to="/movies" />
//             <Redirect to="/not-found" />
//           </Switch>
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;



//*************************************** for backend services **************************** */
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={props => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
