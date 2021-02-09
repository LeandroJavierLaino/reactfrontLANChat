export const login = (username: string) => ({
  type: 'LOGIN',
  username,
});

export const logout = () => ({
  type: 'LOGOUT',
});
