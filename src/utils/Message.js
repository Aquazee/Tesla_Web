const Message = {
  Register: {
    Success: {
      message: 'Account created. Please verify your account.',
      type: 'success',
    },
    UserNotFound: {
      message: 'Email not registered.',
      type: 'danger',
    },
    EmailTaken:  {
      message: 'Email registered. Please login.',
      type: 'danger',
    },
  },
  UserNotFound: '',
  EmailTaken: '',
  UserBlocked: 'Your account is blocked. Please contact support',
  UserInactive: 'Your account is inactve. Please reactivate your account.',
  InvalidToken: 'Please re-login',
  InvalidPassword: 'Wrong Password. Please try again',
  ErrorOccurred:  {
    message: 'Some error occurred. Please try again later',
    type: 'danger',
  },
}

export default Message;
