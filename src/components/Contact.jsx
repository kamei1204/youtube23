import React, { useState } from 'react'
import { styled } from 'styled-components'
import Earth from './Earth'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vw;
  scroll-snap-align: center; //スクロールの位置を中央に

  @media screen and (max-width: 768px) {
    height: 200vw;
    margin-top: 0;
  }
`

const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  gap: 2vw;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 160vw;
    width: 80vw;
    margin-top: 10vw;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

const Form = styled.form`
    width: 30vw;
    display: flex;
    flex-direction: column;
    gap: 1vw;

    @media screen and (max-width: 768px) {
        width: 80vw;
        justify-content: center;
    }
`

const Title = styled.h1`
  font-weight: 200;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

const Input = styled.input`
    font-size: 16px;
    padding: 1vw;
    background-color: #f5f5f5;
    border: none;
    border-radius: 0.5vw;

`

const TextArea = styled.textarea`
    font-size: 16px;
    padding: 1vw;
    background-color: #f5f5f5;
    border: none;
    border-radius: 0.5vw;
`

const Button = styled.button`
  background-color: #FFA500;
  color: #fff;
  border: none;
  border-radius: 0.5vw;
  padding: 1vw;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 0vw;
    width: 80vw;
  }
`

const Contact = () => {
  const ref = useRef();//useRef()を使ってrefを作成

  const [ success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    //preventDefault()でデフォルトの挙動をキャンセル
    e.preventDefault()

    emailjs.sendForm('service_r5uir25', 'template_oos773v', ref.current, 'of_mDgTTxYTItH3FL')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
  };

  return (
    <Section id='contact'>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>お問い合わせ</Title>
            <Input placeholder="お名前" name='name'></Input>
            <Input placeholder="メールアドレス" name='email'></Input>
            <TextArea placeholder="お問い合わせ内容" rows={10} name='message'></TextArea>
            <Button type='submit'>送信する</Button>
            {success === true && <p>送信に成功しました。</p>}
            {success === false && <p>送信に失敗しました。</p>}
          </Form>
        </Left>
        <Right >
          <Earth />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact