import { Container } from '@mui/material'
import styles from './style.module.scss'
import { NextArrow } from 'components/UI/Icons'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'

const items = [
  {
    title: 'NEWS',
    values: [
      {
        label: "코넌, '도토리 & 싸이콘 에어드랍' 이벤트로 메타콘 활성화 추진",
        path: 'https://www.breaknews.com/977165',
        iconPath: '/images/sns/speaker.svg'
      }
    ]
  },
  {
    title: 'TWITTER',
    values: [
      {
        label: 'METACON New Installation Event 😀',
        path: 'https://twitter.com/conunkorea/status/1688457290133950465?s=20',
        iconPath: '/images/sns/twitter.svg'
      },
      {
        label: 'Metacon Friend Referral Event If 3 recommended🎉',
        path: 'https://twitter.com/conunkorea/status/1686647589712912384?s=20',
        iconPath: '/images/sns/twitter.svg'
      },
      {
        label: 'Metacon Friend Referral Event If 3 recommended🎉',
        path: 'https://twitter.com/conunkorea/status/1683304819707219968?s=20',
        iconPath: '/images/sns/twitter.svg'
      },
      {
        label: '메타콘 신규 가입 시 500 싸이콘 10 도토리 지급 됩니다.',
        path: 'https://twitter.com/Flowerjae94/status/1683104007987023874?s=20',
        iconPath: '/images/sns/twitter.svg'
      },
      {
        label: '싸이월드 기억하시나요?',
        path: 'https://twitter.com/Flowerjae94/status/1684942129129558017?s=20',
        iconPath: '/images/sns/twitter.svg'
      }
    ]
  },
  {
    title: 'NAVER BLOG',
    values: [
      {
        label: '코넌 뉴스 ㅣ메타콘(METACON) 신규 설치 이벤트',
        path: 'https://blog.naver.com/conuncs/223172934443',
        iconPath: '/images/sns/naver-blog.svg'
      },
      {
        label: '코넌 뉴스 ㅣ메타콘(METACON) 친구 초대 이벤트',
        path: 'https://blog.naver.com/conuncs/223172935517',
        iconPath: '/images/sns/naver-blog.svg'
      },
      {
        label: '코넌 뉴스 ㅣ메타콘(METACON) 신규 설치 이벤트',
        path: 'https://blog.naver.com/conuncs/223164503085',
        iconPath: '/images/sns/naver-blog.svg'
      },
      {
        label: '코넌이 싸이월드 도토리(DTR)와 패밀리 코인인 싸이콘(CYCON)를...',
        path: 'https://blog.naver.com/start2012th/223160257786',
        iconPath: '/images/sns/naver-blog.svg'
      },
      {
        label: '드림시티 싸이월드 도토리 싸이콘 에어드랍 이벤트',
        path: 'https://blog.naver.com/555lavender/223161262089',
        iconPath: '/images/sns/naver-blog.svg'
      }
    ]
  }
]

const items2 = [
  {
    title: 'YOUTUBE',
    values: [
      {
        label: '싸이콘(CYCON) X 도토리(DTR) 에어드랍 듀얼 이벤트',
        path: 'https://www.youtube.com/watch?v=dt-81wcbpFg',
        iconPath: '/images/sns/youtube.svg'
      },
      {
        label: '코넌 뉴스 ㅣ메타콘(METACON) 친구 추천 이벤트',
        path: 'https://www.youtube.com/watch?v=Hno4kOeVMpY',
        iconPath: '/images/sns/youtube.svg'
      },
      {
        label: '참가자 전원 도토리토큰 에어드랍',
        path: 'https://www.youtube.com/watch?v=n2at4Tv0fqQ',
        iconPath: '/images/sns/youtube.svg'
      },
      {
        label:
          '5분컷! 누구나 32000원상당 도토리[DTR]코인 20개 바로 받아가세요.',
        path: 'https://www.youtube.com/watch?v=anA19HnpFbE',
        iconPath: '/images/sns/youtube.svg'
      },
      {
        label:
          '무료코인 에어드랍 1분컷 이래도 안받으실거에요 ? 도토리 싸이콘 받아가세요!',
        path: 'https://www.youtube.com/watch?v=0YcrA_fLi_8',
        iconPath: '/images/sns/youtube.svg'
      }
    ]
  },
  {
    title: 'FACEBOOK',
    values: [
      {
        label: 'CONUN - 안녕하세요. 코넌코리아입니다. .​',
        path: 'https://www.youtube.com/watch?v=0YcrA_fLi_8',
        iconPath: '/images/sns/facebook.svg'
      },
      {
        label: 'CONUN - 안녕하세요. 코넌코리아입니다. .​',
        path: 'https://www.facebook.com/conunglobal/posts/pfbid0QTQt1oTbyGuhxTRfhJ8KjbLxD4KNeizr2NFPTkYM1S579LLmcwyRpYEaBs3Hswe5l',
        iconPath: '/images/sns/facebook.svg'
      },
      {
        label: 'CONUN - 안녕하세요. 코넌코리아입니다. .​',
        path: 'https://www.facebook.com/conunglobal/posts/pfbid0SWEUWJcQ366vd1uiQhQw5VwxG2g8mqzWpCLYvP2MqMPN69H7q3NPQmxZaRirsn5hl',
        iconPath: '/images/sns/facebook.svg'
      },
      {
        label: '싸이월드 도토리x싸이콘 코넌코리아​',
        path: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02uKiEKgQFNbkAp1H6q8E9oH8w7rn4JQUMvQLVqxBnE7FCdQUYy1cgzNxjYd2d4uaYl&id=100092721660313',
        iconPath: '/images/sns/facebook.svg'
      },
      {
        label: '코넌코리아에서 메타콘 지갑 이벤트를 합니다.​',
        path: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0JQQq7fP42jDiybH5n1RFJszEZzb2rV1KjTYw7LtdQMr67o3E6ScE9wd3fhCQqpbkl&id=100092721660313',
        iconPath: '/images/sns/facebook.svg'
      }
    ]
  },
  {
    title: 'INSTAGRAM',
    values: [
      {
        label: '메타콘(METACON) 신규설치 이벤트😀',
        path: 'https://www.instagram.com/p/CvdouoIvbJs/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D',
        iconPath: '/images/sns/instagram.svg'
      },
      {
        label: '메타콘(METACON) 신규설치 이벤트😀',
        path: 'https://www.instagram.com/p/CvbpHwlL_g1/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D',
        iconPath: '/images/sns/instagram.svg'
      },
      {
        label: '메타콘(METACON) 친구 추천 이벤트😀',
        path: 'https://www.instagram.com/p/Cvojd2Grh1Q/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D',
        iconPath: '/images/sns/instagram.svg'
      },
      {
        label: '메타콘(METACON) 친구 추천 이벤트😀',
        path: 'https://www.instagram.com/p/CveH5QCLj7f/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D',
        iconPath: '/images/sns/instagram.svg'
      },
      {
        label: '메타콘(METACON) 친구 추천 이벤트에 참여해보세요‼️',
        path: 'https://www.instagram.com/p/CvrJwmXL8ym/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D',
        iconPath: '/images/sns/instagram.svg'
      }
    ]
  }
]

export default function UserGuide() {
  const { t } = useTranslation('common')
  const [expandedSections, setExpandedSections] = useState({})

  function toggleSection(title) {
    setExpandedSections({
      ...expandedSections,
      [title]: !expandedSections[title]
    })
  }

  return (
    <Container>
      <h1 className={styles.snsTitle}>sns</h1>
      <div className={styles.guide}>
        <div className={styles.list}>
          <div className={styles.items}>
            {items.map((item) => (
              <div className={styles.item} key={item.title}>
                <h2>{item.title}</h2>
                <div className={styles.itemValues}>
                  {(expandedSections[item.title]
                    ? item.values
                    : item.values.slice(0, 5)
                  ).map((data) => (
                    <a
                      href={data.path}
                      target='_blank'
                      key={data.label}
                      rel='noreferrer'
                    >
                      <span className={styles.labelSpan}>
                        <img src={data.iconPath} alt='' /> {data.label}
                      </span>{' '}
                      <NextArrow />
                    </a>
                  ))}
                </div>
                <div className={styles.moreDiv}>
                  {item.values.length > 5 && (
                    <p
                      className={styles.more}
                      onClick={() => toggleSection(item.title)}
                    >
                      {expandedSections[item.title] ? '-' : 'More'}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.items}>
            {items2.map((item) => (
              <div className={styles.item} key={item.title}>
                <h2>{item.title}</h2>
                <div className={styles.itemValues}>
                  {(expandedSections[item.title]
                    ? item.values
                    : item.values.slice(0, 5)
                  ).map((data) => (
                    <a
                      href={data.path}
                      target='_blank'
                      key={data.label}
                      rel='noreferrer'
                    >
                      <span className={styles.labelSpan}>
                        <img src={data.iconPath} alt='' /> {data.label}
                      </span>{' '}
                      <NextArrow />
                    </a>
                  ))}
                </div>
                <div className={styles.moreDiv}>
                  {item.values.length > 5 && (
                    <p
                      className={styles.more}
                      onClick={() => toggleSection(item.title)}
                    >
                      {expandedSections[item.title] ? 'Close' : 'More'}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
