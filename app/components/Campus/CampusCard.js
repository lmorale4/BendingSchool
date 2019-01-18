import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { postCampus } from '../../reducers/campuses';

import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  textLeft: {
    textAlign: 'left',
  },
};

const CampusCard = props => {
  const { campus, classes } = props;
  return (
    <Grid item>
      <Link to={`/campuses/${campus.id}`}>
        <Card>
          <CardHeader title={campus.name} />
          <img
            className="card-img-top img-thumbnail"
            src={campus.imageUrl || '/img/defaultCampus.jpg'}
          />
          <CardContent>
            <Typography component="p" className={classes.textLeft}>
              {campus.shortDescription}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

const mapDispatchToProps = dispatch => ({
  createCampus: campus => dispatch(postCampus(campus)),
});

CampusCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(CampusCard)
);
