import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


class AddItem extends Component {


  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };



  render() {
      return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Button variant="fab" mini color="inherit" aria-label="Add" onClick={this.handleClickOpen}>
        <AddIcon />
      </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a New Item</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
              <TextField
                style={{marginRight: 10}}
                id="beerName"
                label="Name"
                type="string"
                onChange={this.handleChange('itemName')}
              />
              <TextField
                style={{marginRight: 10}}
                id="beerABV"
                label="ABV%"
                type="number"
                onChange={this.handleChange('itemPrice')}
              />
              <TextField
                style={{marginRight: 10}}
                id="beerRating"
                label="Rating"
                type="number"
                onChange={this.handleChange('itemRating')}
              />
              <TextField
                style={{marginTop: 10}}
                multiline
                id="beerDescription"
                label="Description"
                type="string"
                rows="4"
                fullWidth
                onChange={this.handleChange('itemDescription')}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add Item
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddItem;
