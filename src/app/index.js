import React, { Component } from 'react';
import { render } from 'react-dom';
//import ContactContainer from './components/contacts/contact-container' // using all smart components and componentWillReceiveProps
import ContactContainerSmart from './components/dumb-contacts/contact-container-smart'// using dumb child components
import styles from '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ParentContainer extends Component {
  render() {
    return (
      <div>
        <h1 className = "parentContainer">Contact List</h1>
         {/* <ContactContainer></ContactContainer> */}
         <ContactContainerSmart></ContactContainerSmart>
      </div>
    );
  }
}

render(<ParentContainer />, document.getElementById('app'));