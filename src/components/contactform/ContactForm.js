import React from 'react';

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
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'normal',
  },
};

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
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
        />
        <input
          style={styles.formField}
          type="tel"
          placeholder="Phone"
          required
        />
        <input
          style={styles.formField}
          type="email"
          placeholder="Email"
          required
        />
        <button style={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
