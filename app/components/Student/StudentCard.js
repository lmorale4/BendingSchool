import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    display: 'flex',
  },
  textLeft: {
    textAlign: 'left',
  },
  alignContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

const StudentCard = props => {
  const { student, classes } = props;
  return (
    <Grid item>
      <Link to={`/students/${student.id}`}>
        <Card className={classes.card}>
          <img className="img-thumbnail student" src={student.imageUrl} />

          {/* <CardHeader title={student.fullName} /> */}
          <CardContent
            className={`${classes.textLeft} ${classes.alignContent}`}
          >
            <div>
              <Typography component="h3">{student.fullName}</Typography>
            </div>
            <div>
              {student.bending && (
                <img
                  className="bendingSymbol"
                  src={`/img/${student.bending}bending_emblem.png`}
                />
              )}{' '}
              {student.bending}
            </div>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

StudentCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentCard);
