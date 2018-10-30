import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCampuses } from '../reducers/campuses';
import { getStudents } from '../reducers/students';

import Navbar from './Navbar';
import { Home } from './Home/';
import { Campus, CampusList } from './Campus';
import { Student, StudentList } from './Student';

import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f8f9fa',
    },
    secondary: {
      light: '#ef8f3c',
      main: '#65a0b3',
      contrastText: '#ffcc00',
    },
  },
});

const styles = {
  textCenter: {
    textAlign: 'center',
  },
};

class Root extends Component {
  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudents();
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className={classes.textCenter}>
            <Navbar handleSearchChange={this.handleSearchChange} />
            <main>
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
      </MuiThemeProvider>
    );
  }
}

const mapDispatch = dispatch => ({
  getCampuses: () => dispatch(getCampuses()),
  getStudents: () => dispatch(getStudents()),
});

Root.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  connect(
    null,
    mapDispatch
  )(Root)
);
