import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/ArticleHome";
import SavedArticles from "./pages/SavedArticles";



const App = () => (
  
  
  
  <Router>
    <div>
     
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/savedarticles" component={SavedArticles}/>
        
      </Switch>
    </div>
  </Router>
);

export default App;