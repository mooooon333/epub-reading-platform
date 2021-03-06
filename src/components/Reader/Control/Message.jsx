import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.toggleMessage(false);
  }

  render() {
    let {open} = this.props;

    return (
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        open={open}
        autoHideDuration={4000}
        onRequestClose={this.handleClose}
        SnackbarContentProps={{
          'aria-describedby': 'message',
        }}
        message={<span id="message">成功添加书签.</span>}
        action={[
          <Button key="dismiss" color="accent" dense onClick={this.handleClose}>
            关闭
          </Button>,
        ]}
      />
    );
  }
}

export default Message;
