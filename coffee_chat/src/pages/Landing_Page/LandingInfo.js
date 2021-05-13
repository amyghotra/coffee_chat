import React from 'react';
import { Redirect } from 'react-router-dom';
import './LandingTop.css';
import coffee from '../../images/coffee.jpeg'
import {Link} from 'react-router-dom'

import Fade from 'react-reveal/Fade';

class LandingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      redirect: false,
    }
  }

  handleLogin = () => {
    console.log('redirect');
    this.setState({ redirect: true });
  }

  render () {
    if (this.state.redirect === true) {
      return <Redirect to="/sign-in" />
    }
    return (
      <>
        <div>
          <p className ="landing_coffee_chat" id="coffee_chat_landing">CoffeeChat</p>
          <div id="buttons">
            <Link to='./sign-in'><button id="login_button" onClick={this.handleLogin}>Login/Sign-up</button></Link>
          </div>
          <Fade right cascade>
          <div id="quote_subquote">
            <h1 id="landing_quote">Connecting students with professionals</h1>
            <h3 id="dare">bringing together the minds of today with the minds of tomorrow</h3>
          </div>
          </Fade>
          <Fade>
            <img id="coffee" src={coffee} alt="New York City" /> 
          </Fade>
        </div>
      </>
    );
  }
}


export default LandingInfo;
