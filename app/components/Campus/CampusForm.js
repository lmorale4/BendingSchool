import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Card, CardHeader, CardContent, Input } from '@material-ui/core';

import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
  },
  alignLeft: {
    justifyContent: 'flex-end',
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

  handleSubmit() {}

  render() {
    const { classes } = this.props;
    const { imageUrl } = this.state;
    return (
      <Grid item>
        <form>
          <Card>
            <div>
              <Input
                name="name"
                type="text"
                className="font"
                placeholder="Campus Name"
                onChange={this.handleChange}
              />
              <Close />
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
                type="text"
                placeholder="Campus Description"
                onChange={this.handleChange}
              />
            </CardContent>
          </Card>
        </form>
      </Grid>
    );
  }
}

CampusForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(CampusForm));
