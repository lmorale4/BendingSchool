import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampus } from '../../reducers/campuses';
import StudentCard from '../Student/StudentCard';

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

class Campus extends Component {
  componentDidMount() {
    const { campusId } = this.props.match.params;
    this.props.getCampus(campusId);
  }
  render() {
    const { campus, classes } = this.props;
    return (
      <div className={classes.layout}>
        <Card className={classes.card}>
          <Grid container>
            <Grid item xs={6}>
              <img
                className={`singleImg ${classes.textLeft}`}
                src={campus.imageUrl}
              />
            </Grid>
            <Grid item xs={6}>
              <CardContent className={classes.textHeight}>
                <CardHeader title={campus.name} />
                <div
                  className={`${classes.sectionSpacing} ${classes.textLeft}`}
                >
                  <Typography component="p" className={classes.labelMargin}>
                    <strong className={classes.label}>Address</strong>
                  </Typography>
                  <Typography>{campus.address}</Typography>
                </div>
                <div
                  className={`${classes.sectionSpacing} ${classes.textLeft}`}
                >
                  <Typography component="p" className={classes.labelMargin}>
                    <strong className={classes.label}>Description</strong>
                  </Typography>
                  <Typography>{campus.description}</Typography>
                </div>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
        <h4>Students</h4>
        <Grid container spacing={16}>
          {campus.students && campus.students.length ? (
            campus.students.map(student => (
              <StudentCard key={student.id} student={student} />
            ))
          ) : (
            <Grid item xs={12}>
              <Typography component="p">
                There are no students enrolled at this campus
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

const mapState = state => ({
  campus: state.campuses.selected,
});

const mapDispatch = dispatch => ({
  getCampus: campusId => dispatch(getCampus(campusId)),
});

Campus.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(Campus)
);
