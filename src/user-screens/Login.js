import React, { useState, useReducer, useEffect } from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import NotificationAlert from 'react-notification-alert';
import { AppFunctions, Notification, Regex } from '../utils';
import { useAuth } from '../contexts';
import AuthForm from '../domain/AuthForm/AuthForm';


const { emailReg, nameReg, mobileReg } = Regex;
const initialState = {
  items: [],
  isValid: false
};

const validate = (event) => {
  const { name, value } = event.target;
  const errors = {};

  switch (name) {
    case 'fullName':
      errors.firstName = value.length < 5 ? 'Full Name must be at least 5 characters long!' : '';
      break;
    case 'lastName':
      errors.lastName = value.length < 5 ? 'Last Name must be at least 2 characters long!' : '';
      break;
    case 'email':
      errors.email = emailReg.test(value) ? '' : 'Email is not valid!';
      break;
    case 'mobile':
      errors.email = mobileReg.test(value) ? '' : 'Mobile number is not valid!';
      break;
    default:
      break;
  }
  return errors;
};

const Login = ({ route }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [open, setOpen] = useState(false);
  const { login, register } = useAuth();

  const [formLabel, setFormLabel] = useState('Login');
  const notificationAlertRef = React.useRef(null);

  const onPress = (action, id) => {
    setFormLabel(action, id);
  };

  const onSubmitLoginForm = async (body) => {
    const resp = await login(body)
    Notification({ notificationAlertRef, ...AppFunctions.getMessage(resp) });
  }

  const onSubmitRegisterForm = async (body) => {
    const resp = await register(body)
    Notification({ notificationAlertRef, ...AppFunctions.getMessage(resp) });
  }

  const showNotification = (resp) => {
    
  }

  useEffect(() => {
    pageLoad();
  })

  const pageLoad = () => {
    AppFunctions.setTitle(route.name)
  }

  return (
    <div className="content">
      <NotificationAlert ref={notificationAlertRef} />
      <Row>
        <Col className="offset-3 col-6">
          <LoginForm
            // formLabel={formLabel}
            notificationAlertRef={notificationAlertRef}
            onSubmitRegisterForm={onSubmitRegisterForm}
            onSubmitLoginForm={onSubmitLoginForm}
          />
        </Col>
      </Row>
    </div>
  );
}

const LoginForm = ({ formLabel = 'Login Form', notificationAlertRef, onSubmitLoginForm, onSubmitRegisterForm }) => {
  const resetForm = () => {
    const loginform = document.getElementById('login-form');
    loginform.reset();
  };

  return (
    <AuthForm
      onSubmitRegisterForm={onSubmitRegisterForm}
      onSubmitLoginForm={onSubmitLoginForm}
    />
  );
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setLoginFormData':
      return {
        ...state,
        isTaskCommentsModalVisible: true,
        taskData: payload.item
      };
    default:
      throw new Error();
  }
};

export default Login;