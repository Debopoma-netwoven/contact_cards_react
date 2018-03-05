import React, { Component } from 'react';
import { render } from 'react-dom';
import ContactContainer from './components/contacts/contact-container'
import styles from '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ParentContainer extends Component {
  render() {
    return (
      <div>
        <h1 className = "parentContainer">Contact List</h1>
         <ContactContainer></ContactContainer>
      </div>
    );
  }
}

render(<ParentContainer />, document.getElementById('app'));