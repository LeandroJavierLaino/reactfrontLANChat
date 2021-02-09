export const getUsername = (state: { logged: boolean; username: string }) => {
  return { username: state.username };
};

export const getLogged = (state: { logged: boolean; username: string }) => {
  return { logged: state.logged };
};

export const getSession = (state: { logged: boolean; username: string }) => {
  return state;
};
