import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCampuses } from '../reducers/campuses';
import { getStudents } from '../reducers/students';

import Navbar from './Navbar';
import Home from './Home';
import CampusList from './Campus/CampusList';
import Campus from './Campus/Campus';
import StudentList from './Student/StudentList';
import Student from './Student/Student';

import 'bootstrap';

class Root extends Component {
  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudents();
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/campuses" component={CampusList} />
              <Route path="/campuses/:campusId" component={Campus} />
              <Route exact path="/students" component={StudentList} />
              <Route path="/students/:studentId" component={Student} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

const mapDispatch = dispatch => ({
  getCampuses: () => dispatch(getCampuses()),
  getStudents: () => dispatch(getStudents()),
});

export default connect(
  null,
  mapDispatch
)(Root);
