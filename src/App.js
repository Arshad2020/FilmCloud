import React, { useState } from "react";

import { Switch, Route, useHistory } from "react-router-dom";
import RentList from "./RentList";
import Home from "./Home";
import Nav from "./Nav";
import SearchMovies from "./SearchMovies";
import SigninAndSignup from "./Signin-and-Signup";
import Footer from "./Footer";
import PrivateRoute from "./PrivateRoute";

const APIKEY = "03d2fe94d662e5523e71720a226900bb";

function App() {
  const storedData = JSON.parse(localStorage.getItem("rentMovies")) || [];
  const [rentItems, setRentItems] = useState(storedData);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [user, setUser] = useState({});

  function addToRentList(newItem) {
    if (isLogedIn) {
      setRentItems((prevItem) => {
        const newArr = [...prevItem, newItem].reduce((unique, movie) => {
          return unique.includes(movie) ? unique : [...unique, movie];
        }, []);
        localStorage.setItem("rentMovies", JSON.stringify(newArr));
        return newArr;
      });
    }
  }

  function removeFromRentList(id) {
    setRentItems((prevItem) => {
      const afterRemove = prevItem.filter((movie) => movie.id !== id);
      localStorage.setItem("rentMovies", JSON.stringify(afterRemove));

      return afterRemove;
    });
  }
  function emptyRentList() {
    localStorage.setItem("rentMovies", JSON.stringify([]));
    setRentItems([]);
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const history = useHistory();
  const handleChange = (e) => setSearchTerm(e.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => setSearchResult(data.results))
      .then(() => history.push("/searchmovies"))
      .then(setSearchTerm(""));
  };

  return (
    <div>
      <Nav
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
        isLogedIn={isLogedIn}
        setIsLogedIn={setIsLogedIn}
        user={user}
      />

      <Switch>
        <Route path="/home">
          <Home addItem={addToRentList} />
        </Route>
        <Route path="/searchmovies">
          <SearchMovies addItem={addToRentList} searchResult={searchResult} />
        </Route>

        <Route path="/login">
          <SigninAndSignup
            setUser={setUser}
            isLogedIn={isLogedIn}
            setIsLogedIn={setIsLogedIn}
          />
        </Route>
        <PrivateRoute
          path="/rentlist"
          isLogedIn={isLogedIn}
          component={() => (
            <RentList
              rentList={rentItems}
              handleRemove={removeFromRentList}
              emptyRentList={emptyRentList}
            />
          )}
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
