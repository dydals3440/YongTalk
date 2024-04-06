import { useState } from 'react';
import * as S from './LeftSection.style';

const LeftSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // 로그인 성공 시 필요한 처리를 여기에 추가하세요
        console.log('로그인 성공');
      } else {
        // 로그인 실패 시 필요한 처리를 여기에 추가하세요
        console.error('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
    }
  };

  return (
    <S.Container>
      <S.LoginBox id='join-form' onSubmit={handleSubmit}>
        <S.InputGroup>
          <S.InputLabel htmlFor='join-email'>이메일</S.InputLabel>
          <S.Input
            id='join-email'
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputGroup>
        <S.InputGroup>
          <S.InputLabel htmlFor='join-password'>비밀번호</S.InputLabel>
          <S.Input
            id='join-password'
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputGroup>
        <S.ButtonContainer>
          <S.LoginContainer>
            <S.Button id='join-btn' type='submit'>
              로그인
            </S.Button>
            <S.Button id='join-btn' type='button'>
              카카오톡
            </S.Button>
          </S.LoginContainer>
          <S.Button>회원가입</S.Button>
        </S.ButtonContainer>
      </S.LoginBox>
    </S.Container>
  );
};

export default LeftSection;
