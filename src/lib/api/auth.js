import client from './client';

// 로그인
export const login = ({ email, password }) =>{
  client.post('/api/auth/login', { email, password });
}

// 회원가입
export const register = ({ email, password, nickname, username }) =>
{
  const userData = JSON.stringify({ email, password, nickname, username });

  client.post('/api/sign-up', userData,{
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.status);
      }
    })
    .catch((error) => console.log(error.response));
};

// 로그인 상태 확인
export const check = () => client.get('/api/login-check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
