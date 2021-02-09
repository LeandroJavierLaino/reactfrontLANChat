const session = (
  state: { logged: boolean; username: string } = {
    logged: false,
    username: '',
  },
  action: { type: string; username: string }
) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(`reducer - username${action.username}`);
      return {
        ...state,
        logged: true,
        username: action.username,
      };
    case 'LOGOUT':
      console.log('Loggin out');
      return {
        logged: false,
        username: '',
      };
    default:
      return state;
  }
};

export default session;
