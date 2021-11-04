import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import HomePage from "./pages/homePage";
import UpcomingMoviesPage from "./pages/upcomingPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />     
      <Switch>
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));