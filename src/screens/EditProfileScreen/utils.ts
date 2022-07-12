export const URL_REGEX =
  /[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/gi;

export const RULES = {
  name: {
    required: 'Name is required',
    minLength: {
      value: 3,
      message: 'Name should be more that 3 characters',
    },
  },
  userName: {
    required: 'Username is required',
    minLength: {
      value: 3,
      message: 'Username should be more that 3 characters',
    },
  },
  website: {
    required: 'Website is required',
    pattern: {
      value: URL_REGEX,
      message: 'Website has an invalid link',
    },
  },
  bio: {
    maxLength: {
      value: 200,
      message: 'Bio should be less that 200 characters',
    },
  },
};
