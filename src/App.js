import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import LostItemForm from './LostItemForm';
import FoundItemForm from './FoundItemForm';
import ItemCard from './ItemCard';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/lostitem">Report Lost Item</Link>
              </li>
              <li>
                <Link to="/founditem">Report Found Item</Link>
              </li>
              <li>
                <Link to="/itemcard">Item Card</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/lostitem" component={LostItemForm} />
        <Route path="/founditem" component={FoundItemForm} />
        <Route path="/itemcard" component={ItemCard} />
      </div>
    </Router>
  );
}

export default App;
