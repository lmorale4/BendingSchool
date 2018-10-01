import React from 'react';
import { connect } from 'react-redux';
import CampusCard from './CampusCard';

import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 15,
    marginRight: theme.spacing.unit * 15,
    marginTop: theme.spacing.unit * 9,
    marginBottom: theme.spacing.unit * 9,
  },
});

const CampusList = props => {
  const { campuses, classes } = props;
  return (
    <div className={classes.layout}>
      <h2>All Campuses</h2>
      <Grid container className={classes.root} spacing={16}>
        {campuses.map(campus => (
          <Grid key={campus.id} item xs={4}>
            <CampusCard campus={campus} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapState = state => ({
  campuses: state.campuses.all,
});

CampusList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapState)(CampusList));
