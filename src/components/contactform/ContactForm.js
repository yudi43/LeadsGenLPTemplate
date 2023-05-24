import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '20px',
    backgroundColor: '#f2f2f2',
  },
  formField: {
    width: '100%',
    marginBottom: '16px',
  },
  submitButton: {
    marginTop: '16px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'normal',
  },
});

const ContactForm = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={classes.contactForm}>
      <h2 className={classes.heading}>
        Reach out to us to inquire about this and many more colleges
      </h2>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.formField}
          label="Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.formField}
          label="Phone"
          variant="outlined"
          type="tel"
          fullWidth
          required
        />
        <TextField
          className={classes.formField}
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          required
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
