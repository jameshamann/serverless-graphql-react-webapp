import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddItem from './addItem'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float: 'right',
  },
  root: {
    flexGrow: 1
  },
  grow: {
   flexGrow: 1,
 },
});

class AppNavBar extends Component {

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Items
            </Typography>
              <AddItem />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavBar);
