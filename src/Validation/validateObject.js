var validateObject = {
  firstname: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your first name.'
    },
    length: {
      minimum: 3,
      message: '^Your name must be at least 3 characters.'
    }
  },
  lastname: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your last name.'
    },
    length: {
      minimum: 3,
      message: '^Your last name must be at least 3 characters.'
    }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your email.'
    },
    email: {
      message: '^Please enter a valid email.'
    }
  },
  password: {
    presence: {
      allowEmpty: false,
      message: '^Please enter a password.'
    },
    length: {
      minimum: 4,
      message: '^Your password must be at least 4 characters.'
    }
  },
  bio: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your biography.'
    }
  },
  city: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your city.'
    },
    length: {
      minimum: 3,
      message: '^Your city must be valid.'
    }
  },
  name: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your name.'
    },
    length: {
      minimum: 3,
      message: '^Your name must be at least 3 characters.'
    }
  },
  number: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your mobile number.'
    },
    length: {
      minimum: 3,
      message: '^Your mobile number must be at least 8 numbers.'
    }
  },
  address: {
    presence: {
      allowEmpty: false,
      message: '^Please enter your address.'
    }
  }
}

export default validateObject
