import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password })
// 회원가입
export const register = ({ username, password }) =>
  client.post('/api/auth/signup', { username, password });


// 로그인 상태 확인
export const check = ({username, accessToken}) =>
  client.post('/api/auth/check', {username, accessToken})

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
