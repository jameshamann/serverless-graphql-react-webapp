import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';


class EditItem extends Component {

  state = {
    open: false,
    itemName: '',
    itemPrice: '',
    itemDescription: ''
  };

  handleClickOpen = () => {
    console.log("Current Item: " + this.props.currentItem.name)
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


  handleSubmit = (e) => {
    this.setState({ open: false });
    var itemDetails = {
      id: this.props.currentItem.id,
      name: this.state.itemName || this.props.currentItem.name,
      price: this.state.itemPrice || this.props.currentItem.price,
      description: this.state.itemDescription || this.props.currentItem.description
    }
    API.graphql(graphqlOperation(mutations.updateItem, {input: itemDetails}));
    // window.location.reload()
  }

  render() {
      return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Button size='small' color="inherit" aria-label="Edit" onClick={this.handleClickOpen}>
        <EditIcon />
      </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Item: {this.props.currentItem.name}</DialogTitle>
          <DialogContent>

              <TextField
                style={{marginRight: 10}}
                id="itemName"
                placeholder={this.props.currentItem.name}
                label="Name"
                type="string"
                onChange={this.handleChange('itemName')}
              />
              <TextField
                style={{marginRight: 10}}
                id="itemPrice"
                placeholder={"£" + this.props.currentItem.price}
                label="Price"
                type="number"
                onChange={this.handleChange('itemPrice')}
              />
              <TextField
                style={{marginTop: 10}}
                multiline
                id="itemDescription"
                placeholder={this.props.currentItem.description}
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
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default EditItem;
