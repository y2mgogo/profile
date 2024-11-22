import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from './style.module.css'

interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
  content: string
  title: string
}

const Page = ({ offset, gradient, onClick, content, title }: PageProps) => (
 
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      
      <span>{offset+1}.&nbsp;{title}<br/>
      <pre>{content}</pre>
      </span>
    </ParallaxLayer>
  </>
)

export default function App() {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  const content1 = `
  2024.04 ~ 2024.08 (주)KB국민카드 KB Pay 고도화 프로젝트 참여

  2023.05 ~ 2023.12 히어로손해사정(주) 시스템 구축
  
  2022.09 ~ 2023.02 (주) 미래에셋생명 마이데이터 구축
  
  2022.02 ~ 2022.08 (주)서브원 SSP몰 구축 및 개편
  
  2021.12 ~ 2022.02 동부화재 TM모바일전자청약 인터페이스 개발
  
  2021.04 ~ 2021.10 국민은행 마이데이터플랫폼단 마케팅hub 형태감지
  
  2021.01 ~ 2021.03 삼성화재 파견 근무
  
  2021.01 삼성생명 카카오페이 인증 개발
  
  2020.04 ~ 2020.06 아데나소프트 API포탈 개발
  
  2019.11 ~ 2020.03 삼성전자 DS부문 Catalog플랫폼 구축
  
  2019.04 ~ 2019.10 효성TNS 그룹정보팀 파견근무
  
  2018.08 ~ 2019.03 국민은행 자산관리 시스템 개발(playasset일부)
  
  2018.01 ~ 2018.05 NH농협생명 스마트 콜센터 구축
  
  2017.10 ~ 2017.12 한살림장보기 개편 유지보수 및 품질관리
  
  2012.12 ~ 2013.03 현대모비스 자사 소프트웨어 2차 도입 프로젝트`

  const content2 = `
  Java, Jsp, Javascript, vue.js, react.js node.js
  
  Oracle, MySql, MsSql, MariDB 등`
  const content3 = `
  2019.04 정보처리기사(한국산업인력공단)
  
  2012.04 CCNA(CISCO)`
  const title1 = '참여 프로젝트'
  const title2 = '보유기술'
  const title3 = '자격사항'
  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} content={content1} title={title1} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} content={content2} title={title2}/>
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} content={content3} title={title3}/>
      </Parallax>
    </div>
  )
}
