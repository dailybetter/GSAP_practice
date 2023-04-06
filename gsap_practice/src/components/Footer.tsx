import ConfettiExplosion from 'react-confetti-explosion';
import { Footer } from './body/styled';
import { FadeInOpacity } from './gsap/FadeinOpacity';
import { useState } from 'react';
export const MainFooter = () => {
  const [isExploding, setIsExploding] = useState(false);
  const EmailClick = () => {
    setIsExploding(!isExploding);
  };
  const tinyExplodeProps = {
    force: 0.4,
    duration: 5000,
    particlecount: 30,
    floorheight: 500,
    floorwidth: 300,
  };
  return (
    <FadeInOpacity delay={0.3}>
      <Footer>
        {isExploding && <ConfettiExplosion {...tinyExplodeProps} />}
        관심으로 읽어주셔서 감사합니다. 연락주신다면 24시간 내로 답변 드리겠습니다.
        <br />
        <a href="mailto:rth634@naver.com" onClick={EmailClick}>
          rth634@naver.com
        </a>
      </Footer>
    </FadeInOpacity>
  );
};
