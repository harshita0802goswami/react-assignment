import { Form, Button } from "react-bootstrap";

import { useState } from "react";

const AddForm = () => {
  const initialValues = { name: "", dob: "", phone: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          maxLength={50}
          required
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="date"
          id="dob"
          name="dob"
          value={formValues.dob}
          required
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="tel"
          id="phone"
          name="phone"
          value={formValues.phone}
          required
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          required
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Update Data
      </Button>
    </Form>
  );
};

export default AddForm;
