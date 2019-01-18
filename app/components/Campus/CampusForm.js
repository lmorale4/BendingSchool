import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postCampus } from '../../reducers/campuses';

import { Button, Card, CardContent, Grid, Input } from '@material-ui/core';

import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
  },
  alignRight: {
    textAlign: 'right',
  },
  contentEnd: {
    justifyContent: 'flex-end',
  },
  grow: {
    flexGrow: 1,
  },
};

class CampusForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    await this.props.addCampus({ ...this.state });
    this.props.handleAddCampus();
    this.setState({
      name: '',
      imageUrl: '',
      address: '',
      description: '',
    });
  }

  render() {
    const { classes } = this.props;
    const { imageUrl } = this.state;
    return (
      <Grid item>
        <form onSubmit={this.handleSubmit}>
          <Card>
            <div className={classes.alignRight}>
              <Close onClick={this.props.handleAddCampus} />
            </div>
            <div>
              <Input
                name="name"
                type="text"
                className="font"
                placeholder="Campus Name"
                onChange={this.handleChange}
              />
            </div>
            <img
              className="card-img-top img-thumbnail"
              src={imageUrl || '/img/defaultCampus.jpg'}
            />
            <Input
              name="imageUrl"
              type="text"
              placeholder="Image Url"
              onChange={this.handleChange}
            />
            <CardContent>
              <Input
                name="address"
                type="text"
                placeholder="Campus Address"
                onChange={this.handleChange}
              />
              <Input
                name="description"
                multiline
                rowsMax="4"
                type="text"
                placeholder="Campus Description"
                onChange={this.handleChange}
              />
              <div className={`${classes.root} ${classes.contentEnd}`}>
                <Button variant="outlined" type="submit">
                  Add Campus
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCampus: campus => dispatch(postCampus(campus)),
});

CampusForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(CampusForm)
);
