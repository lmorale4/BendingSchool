import React from 'react';
import { connect } from 'react-redux';
import StudentCard from './StudentCard';

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

const StudentList = props => {
  const { students, classes } = props;
  return (
    <div className={classes.layout}>
      <h2>All Students</h2>
      <Grid container className={classes.root} spacing={16}>
        {students.map(student => (
          <Grid key={student.id} item xs={4}>
            <StudentCard student={student} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapState = state => ({
  students: state.students.all,
});

StudentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapState)(StudentList));
