import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Button,
  Input,
  Select,
  MenuItem,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 15,
    marginRight: theme.spacing.unit * 15,
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#ef8f3c', 0.15),
    '&:hover': {
      backgroundColor: fade('#ef8f3c', 0.25),
    },
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
  navLink: {
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: '#fff',
    },
  },
});

const Navbar = props => {
  const { classes } = props;
  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <NavLink
            to="/"
            className={
              classes.grow + ' ' + classes.layout + ' ' + classes.textLeft
            }
          >
            <img className="icon" src="/img/AvatarLogo.png" /> <div />
          </NavLink>
          <div
            className={
              classes.grow + ' ' + classes.layout + ' ' + classes.textRight
            }
          >
            <NavLink to="/">
              <Button className={classes.navLink}>Home</Button>
            </NavLink>
            <NavLink to="/campuses">
              <Button className={classes.navLink}>Campuses</Button>
            </NavLink>
            <NavLink to="/students">
              <Button className={classes.navLink}>Students</Button>
            </NavLink>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                id="search"
                placeholder="Search…"
                value={search}
                onChange={handleSearchChange}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
