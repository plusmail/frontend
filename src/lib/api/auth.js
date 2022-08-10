import client from './client';
import { useCookies } from "react-cookie";

// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password })
    .then(res => {
      console.log("**********:", res);
      console.log("**********2:", res.data.status);
        if(res.data.status) {
          this.setState({
            isNormal: true,
            username: res.data.result.data.user.username
          })
        } else {
          this.setState({
            isNormal: false,
          });
          console.log("cannot validate access token. try...." );
          this.requestAccessToken();
                  }
    }).catch(e => {
      this.setState({
        isNormal: false,
      });
      console.log(e);
    })

// 회원가입
export const register = ({ username, password }) =>
  client.post('/api/auth/signup', { username, password });

// 로그인 상태 확인
export const check = () =>
  client.post('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
