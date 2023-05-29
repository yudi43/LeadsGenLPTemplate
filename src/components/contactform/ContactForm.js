import React, { useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';

const styles = {
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
  dialogOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  dialogContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '4px',
    textAlign: 'center',
  },
};

const ContactForm = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    const email = event.target.elements.email.value;

    console.log("Submit clicked, this was filled:", name, phone, email);

    const database = getDatabase(); // Access the Firebase Realtime Database instance

    // Save the form data to the Firebase Realtime Database
    const leadsRef = ref(database, 'leads');
    const newLeadRef = push(leadsRef);

    try {
      await set(newLeadRef, {
        name,
        phone,
        email,
      });
      setSubmissionStatus('success');
    } catch (error) {
      console.log('Error submitting form:', error);
      setSubmissionStatus('error');
    }

    // Reset the form fields
    event.target.reset();

    // Open the dialog
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setDialogOpen(false);
    // Reset the submission status
    setSubmissionStatus(null);
  };

  const renderDialog = () => {
    if (!isDialogOpen) {
      return null;
    }

    let dialogContent;

    if (submissionStatus === 'success') {
      dialogContent = (
        <div>
          <h2>Thank you for your submission!</h2>
          <p>We appreciate your interest and will get back to you soon.</p>
        </div>
      );
    } else if (submissionStatus === 'error') {
      dialogContent = (
        <div>
          <h2>An error occurred</h2>
          <p>Sorry, there was a problem submitting the form. Please try again later.</p>
        </div>
      );
    }

    return (
      <div style={styles.dialogOverlay}>
        <div style={styles.dialogContent}>
          {dialogContent}
          <button onClick={handleCloseDialog}>Close</button>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.contactForm}>
      <h2 style={styles.heading}>
        Reach out to us to inquire about this and many more colleges
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          style={styles.formField}
          type="text"
          placeholder="Name"
          required
          name="name"
        />
        <input
          style={styles.formField}
          type="tel"
          placeholder="Phone"
          required
          name="phone"
        />
        <input
          style={styles.formField}
          type="email"
          placeholder="Email"
          required
          name="email"
        />
        <button style={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
      {renderDialog()}
    </div>
  );
};

export default ContactForm;
