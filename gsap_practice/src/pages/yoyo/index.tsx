import gsap from 'gsap';
import React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Yoyo = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;
export const YoyoPage = () => {
  const yoyo = useRef(null);
  useEffect(() => {
    gsap.to('.yoyo', { y: 400, rotation: 720, duration: 3, yoyo: true, repeat: -1 });
  }, []);
  return <Yoyo className="yoyo" src="/starYoyo.png"></Yoyo>;
};
