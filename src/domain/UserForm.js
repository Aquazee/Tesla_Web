import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  Label,
  FormFeedback
} from 'reactstrap';

import { Regex } from '../utils';

const UserForm = ({ formLabel, onSubmitUserForm }) => {
  const { emailReg } = Regex;

  const initialState = {
    role: '',
    brand_name: '',
    first_name: '',
    last_name: '',
    email: '',
    password: 'hello123',
    mobile: '',
    gender: 'Male',
    city: ''
  };

  const [error, setError] = useState(initialState);

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    e.target.classList.remove('is-invalid');
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    delete formData.mobile;

    try {
      console.log(formData);
      const result = await onSubmitUserForm(formData);
      console.log(result);
      if (result.status === 201) setFormData(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <Row>
          <Col className="pr-md-1" md="10">
            <CardTitle tag="h4">{formLabel}</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <form id="user-form">
          <Row>
            <Col sm="4">
              <FormGroup>
                <label>First Name</label>
                <Input
                  className="mb-0"
                  placeholder="First Name"
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                />
                <FormFeedback>{error.first_name || 'First Name is mandatory'}</FormFeedback>
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Last Name</label>
                <Input
                  className="mb-0"
                  placeholder="Last Name"
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                />
                <FormFeedback>{error.first_name || 'Last Name is mandatory'}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm="4">
              <FormGroup>
                <label>Email *</label>
                <Input
                  className="mb-0"
                  placeholder="Email"
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <FormFeedback>{error.email || 'Email is mandatory'}</FormFeedback>
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Mobile</label>
                <Input
                  className="mb-0"
                  placeholder="Mobile"
                  type="number"
                  name="mobile"
                  id="mobile"
                  max={10}
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
                <FormFeedback>{error.mobile || 'Mobile Number is mandatory'}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm="4">
              <FormGroup>
                <label>Select Role</label>
                <Input
                  className="mb-0"
                  type="select"
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option />
                  <option>Admin</option>
                  <option>Brand</option>
                  <option>User</option>
                </Input>
                <FormFeedback>{error.role || 'Role is mandatory'}</FormFeedback>
              </FormGroup>
            </Col>
            {formData.role === 'Brand' && (
              <Col sm="4">
                <FormGroup>
                  <label>Brand Name</label>
                  <Input
                    className="mb-0"
                    placeholder="Brand Name"
                    type="text"
                    name="brand_name"
                    id="brand_name"
                    value={formData.brand_name}
                    onChange={handleInputChange}
                    required
                  />
                  <FormFeedback>{error.brand_name || 'Brand Name is mandatory'}</FormFeedback>
                </FormGroup>
              </Col>
            )}
          </Row>
          <Row>
            <Col sm="4">
              <Label>Gender</Label>
              <FormGroup check>
                <Label check className="me-5">
                  <Input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleInputChange}
                  />
                  Male
                </Label>
                <Label check>
                  <Input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleInputChange}
                  />
                  Female
                </Label>
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>City</label>
                <Input
                  className="mb-0"
                  placeholder="City"
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <FormFeedback>{error.city || 'City is mandatory'}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>

          <Button className="mb-3" onClick={() => setFormData(initialState)}>
            Reset
          </Button>
          <Button className="mb-3" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}

export default UserForm;
