import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampusCard from './CampusCard';
import CampusForm from './CampusForm';

import PropTypes from 'prop-types';
import { Button, Grid, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    display: 'flex',
    overflowY: 'scroll',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 15,
    marginRight: theme.spacing.unit * 15,
    marginTop: theme.spacing.unit * 9,
    marginBottom: theme.spacing.unit * 9,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  contentRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  contentLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  contentCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  addButton: {
    backgroundColor: theme.palette.primary.main,
  },
});

class CampusList extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      showingForm: false,
    };

    this.campusEnd = null;

    this.setCampusEnd = this.setCampusEnd.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddCampus = this.handleAddCampus.bind(this);
  }

  setCampusEnd(element) {
    this.campusEnd = element;
  }

  scrollToBottom() {
    this.campusEnd.scrollIntoView({ behaviour: 'smooth' });
  }

  handleAddCampus() {
    this.scrollToBottom();
    this.setState(prevState => ({
      showingForm: !prevState.showingForm,
    }));
  }

  handleSearchChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    const { campuses, classes } = this.props;
    const { search, showingForm } = this.state;
    return (
      <div className={classes.layout}>
        <Grid
          container
          spacing={16}
          className={`${classes.flex} ${classes.root}`}
        >
          <Grid item xs={4} className={classes.contentCenter}>
            <div className={classes.search}>
              <TextField
                id="search"
                placeholder="Search…"
                onChange={this.handleSearchChange}
                // className={`${classes.inputRoot} ${classes.inputInput}`}
                value={search}
              />
              {/* <div className={classes.searchIcon}>
                <Search />
              </div> */}
            </div>
          </Grid>
          <Grid item xs={4}>
            <h2>All Campuses</h2>
          </Grid>
          <Grid
            item
            xs={4}
            className={`${classes.contentRight} ${classes.contentCenter}
            `}
          >
            <Button
              variant="contained"
              className={classes.addButton}
              onClick={this.handleAddCampus}
            >
              <Add className={classes.leftIcon} />
              Add Campus
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.root} spacing={16}>
          {campuses.map(campus => (
            <Grid key={campus.id} item xs={4}>
              <CampusCard campus={campus} />
            </Grid>
          ))}
          {showingForm && (
            <Grid item xs={4}>
              <CampusForm handleAddCampus={this.handleAddCampus} />
            </Grid>
          )}
          <div ref={this.setCampusEnd} />
        </Grid>
      </div>
    );
  }
}

const mapState = state => ({
  campuses: state.campuses.all,
});

CampusList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapState)(CampusList));
