import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudent } from '../../reducers/students';
import CampusCard from '../Campus/CampusCard';

import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 15,
    marginRight: theme.spacing.unit * 15,
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 9,
  },
  card: {
    display: 'flex',
  },
  textLeft: {
    textAlign: 'left',
  },
  sectionSpacing: {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  label: {
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
    paddingBottom: '3px',
    paddingRight: '5px',
  },
  labelMargin: {
    marginBottom: '5px',
  },
});

class Student extends Component {
  componentDidMount() {
    const { studentId } = this.props.match.params;
    this.props.getStudent(studentId);
  }

  render() {
    const { student, classes } = this.props;
    return (
      <div className={classes.layout}>
        <Card className={classes.card}>
          <Grid container>
            <Grid item xs={6}>
              <img
                className={`singleStudentImg ${classes.textLeft}`}
                src={student.imageUrl}
              />
            </Grid>
            <Grid item xs={6}>
              <CardContent>
                <CardHeader title={student.fullName} />
                <div
                  className={`${classes.sectionSpacing} ${classes.textLeft}`}
                >
                  <Typography component="p" className={classes.labelMargin}>
                    <strong className={classes.label}>Email </strong>
                  </Typography>
                  <Typography component="p">{student.email}</Typography>
                </div>
                <div
                  className={`${classes.sectionSpacing} ${classes.textLeft}`}
                >
                  <Typography component="p" className={classes.labelMargin}>
                    <strong className={classes.label}>GPA</strong>
                  </Typography>
                  <Typography component="p">
                    {student.gpa && student.gpa.toFixed(1)}
                  </Typography>
                </div>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
        <h4>Campus</h4>
        <Grid container spacing={16}>
          {student.campus ? (
            <CampusCard campus={student.campus} />
          ) : (
            <Grid item xs={12}>
              <Typography component="p">
                There are no students enrolled at this student
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

const mapState = state => ({
  student: state.students.selected,
});
const mapDispatch = dispatch => ({
  getStudent: campusId => dispatch(getStudent(campusId)),
});

Student.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(Student)
);
