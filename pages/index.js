import LoudService from 'LoudService/service'
import Head from 'next/head'
import Logo from 'a/logo_full.svg'
import LogoLEN from 'a/len.svg'
import LogoPALM from 'a/palmtree.svg'
import LogoSUPERGENT from 'a/supergent.svg'

export default function Home({data}) {





  return (
   <>
    <Head>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="description" content="e스포츠 콘텐츠 제작 및 배급, 프로게이머 매니지먼트, 엔터테인먼트 매니지먼트 및 공연 제작 등 각 업계의 깊은 경험과 노하우등을 통해 K-Culture 기업으로서 차별화된 사업을 전개해 나아가고 있습니다"/>
    <link rel="manifest" href="/manifest.json"/>
    <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/> 
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/manifest.json"/>
    <meta name="msapplication-TileColor" content="#000000"/>
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    <meta name="theme-color" content="#000000"/>
    <title>라우드코퍼레이션 - LOUD CORPORATION</title>
    </Head>
    <div className='flex items-center justify-center lg:bg-fixed h-screen bg-main bg-cover bg-center'>
        <div className='-translate-y-20'>
          <Logo className="fill-white w-36 mx-auto lg:w-80" />
          <div className='text-sub lg:text-lg text-center engFont mt-8 tracking-wider'>K-CULTURE ENTERTAINMENT</div>
        </div>
    </div>

    <div id="about" className='min-h-screen relative overflow-hidden bg-cover lg:bg-fixed bg-center'  style={{backgroundImage:`url(${require('a/loud_1.jpg').default.src})`}}>
      <div className='py-20 lg:py-40 relative z-30'>

        <div className='container'>
          <h2 className='text-white text-6xl mb-10'><span className='engFont font-bold'>LIVE OUR DREAMS!</span>
          <small className='block mt-4 opacity-50 text-base lg:text-lg word-fix'>
          라우드는 e스포츠 콘텐츠 제작 및 배급, 프로게이머 매니지먼트, 엔터테인먼트 매니지먼트 및 공연 제작 등
          각 업계의 깊은 경험과 노하우등을 통해 K-Culture 기업으로서 차별화된 사업을 전개해 나아가고 있습니다
          </small>
          </h2>

          <div className='aspect-video'>
          <video src={'/v/loud_logo.mp4'} muted autoPlay playsInline loop className='rounded-2xl' />
          </div>

          <div className='block mt-20 max-w-xl mx-auto text-3xl font-light word-fix text-white text-center'>
          <div className='font-bold engFont mb-4 text-sm tracking-widest text-center inline-block border-b'>WE ARE LOUD / 라우드의 지향점</div>
          <div className=''>라우드는 <b>K-콘텐츠를 전 세계인이 더욱 행복하게 즐길수 있도록</b> 만들고자 합니다.</div>
          <a href={'https://hello.loudcorp.com'} className={`p-2 px-6 border text-sm font-normal transition-all border-white inline-block mt-4 text-white hover:scale-105`}>2022 LOUD SHOWREEL</a>
          </div>



        </div>

      </div>
      <div className='bg-black left-0 top-0 w-full h-full bg-opacity-40 backdrop-blur-sm py-40 absolute z-20' />
    </div>


    <div id="service" className='relative overflow-hidden'>
      <div className='py-20 lg:py-60 relative z-30 '>

        <div className='container'>
          <h2 className='text-white engFont text-6xl mb-16'>OUR SERVICE<small className='block mt-4 opacity-40 text-2xl'>ESPORTS, MANAGEMENT, ENTERTAINMENT</small></h2>
          <ul className='text-white space-y-2 z-50'>

            {[
              {
                id:1,
                title:'LEN : LOUD ESPORTS NETWORK',
                subTitle:'eSPORTS PRODUCTION',
                text:'SPOTV Games의 역사를 토대로 라우드코퍼레이션의 대표적인 e스포츠 리그 제작, e스포츠 콘텐츠 제작, 기획, 운영 서비스입니다.',
                color:'bg-len',
                textColor:'text-white',
                borderColor:'border-white',
                link:'https://len.loudcorp.com',
                logo:<LogoLEN className="fill-white" />
              },

              {
                id:2,
                title:'SUPERGENT',
                subTitle:'eSPORTS MANAGEMENT BRAND',
                text:'슈퍼전트는 e스포츠 선수/코치를 매니지먼트하며 선수 이적, 법률 자문, 세무 관리 등 오로지 e스포츠 선수/코치들을 위한 매니지먼트 서비스 입니다.',
                color:'bg-supergent',
                textColor:'text-black',
                borderColor:'border-black',
                link:'https://supergent.gg',
                logo:<LogoSUPERGENT className="fill-white" />
              },

              {
                id:3,
                title:'PALMTREE ISLAND',
                subTitle:'ENTERTAINMENT',
                text:'팜트리아일랜드는 아티스트와 모든 구성원들이 각자의 자리에서 최고의 역량을 발휘할 수 있도록 서포트하는 안략한 터전을 지향합니다.',
                color:'bg-orange-500',
                textColor:'text-white',
                borderColor:'border-white',
                link:'https://palmtree.is',
                logo:<LogoPALM className="fill-white w-full" />
              },
            ].map(val=>

              <li key={val.id} className={`transition-all p-5 py-10 lg:p-12 bg-opacity-90 backdrop-blur-md word-fix ${val.textColor} ${val.color} left-0 top-0 w-auto h-auto`}>
                <div className='container'>
              <div className='flex flex-wrap md:flex-nowrap md:space-x-14 items-center'>
                <div className='flex-initial w-full mb-12 md:w-3/12 md:mb-0'>
                {val.logo}
                </div>
                <div className='flex-auto w-full md:w-10/12'>
                <h3 className='engFont text-3xl'>{val.title}</h3>
                <small className='block'>{val.subTitle}</small>
                <p className='text-sm opacity-60 mt-2'>{val.text}</p>
                <a href={val.link} className={`p-1.5 px-4 border-2 transition-all ${val.borderColor} inline-block mt-4 ${val.textColor} hover:scale-105`}>바로가기</a>
                </div>
                </div>
                </div>
              </li>
            )}



          </ul>
        </div>

      </div>

        <div className='bg-black left-0 top-0 w-full h-full bg-opacity-50 py-40 absolute z-20' />
        <video src={'/v/loud_1.mp4'} muted autoPlay loop playsInline className='video-full z-10' />
    </div>


    <div id="partner" className='relative overflow-hidden bg-cover bg-fixed bg-center'  style={{backgroundImage:`url(${require('a/loud_1.jpg').default.src})`}}>
      <div className='py-20 lg:py-40 relative z-30'>

        <div className='container'>
          <h2 className='text-white text-6xl mb-16'><span className='engFont'>PARTNER</span></h2>

          
          <ul className='flex items-center flex-wrap -m-10'>
            <li className='w-6/12 lg:w-3/12'>
              <div className='flex flex-col m-10 lg:m-4'>
              <img src={require('a/partner/dunamu.png').default.src} alt="" className='mx-auto' />
              </div>
            </li>

            <li className='w-6/12 lg:w-3/12'>
               <div className='flex flex-col m-10 lg:m-4'>
              <img src={require('a/partner/kakao.png').default.src} alt="" className='mx-auto' />
 
              </div>
            </li>

            <li className='w-6/12 lg:w-3/12'>
            <div className='flex flex-col m-10 lg:m-4'>
              <img src={require('a/partner/murex.png').default.src} alt="" className='mx-auto' />
 
              </div>
            </li>

            <li className='w-6/12 lg:w-3/12'>
            <div className='flex flex-col m-10 lg:m-4'>
              <img src={require('a/partner/neptune.png').default.src} alt="" className='mx-auto' />
 
              </div>
            </li>

            <li className='w-6/12 lg:w-3/12'>
            <div className='flex flex-col m-10 lg:m-4'>
              <img src={require('a/partner/partners.png').default.src} alt="" className='mx-auto' />
 
              </div>
            </li>

            <li className='w-6/12 lg:w-3/12'>
            <div className='flex flex-col m-10 lg:m-4'>
              <img src={require('a/partner/stic.png').default.src} alt="" className='mx-auto' />
 
              </div>
            </li>

            <li className='w-6/12 lg:w-3/12'>
            <div className='flex flex-col m-10 lg:m-4'>
              <img src={require('a/partner/ts.png').default.src} alt="" className='mx-auto' />
 
              </div>
            </li>
          </ul>
          



        </div>

      </div>
      <div className='bg-black left-0 top-0 w-full h-full bg-opacity-90 py-40 absolute z-20' />
        <video src={'/v/loud_3.mp4'} muted autoPlay loop playsInline className='video-full z-10' />
    </div>


    <div id="contact" className=' relative overflow-hidden bg-cover lg:bg-fixed bg-center'  style={{backgroundImage:`url(${require('a/loud_1.jpg').default.src})`}}>
      <div className='py-20 lg:py-40 relative z-30'>

        <div className='container'>
          <h2 className='text-white text-6xl mb-16'><span className='engFont'>CONTACT</span></h2>




          <div className='mt-10 flex flex-wrap -mx-2'>


          <div className='text-white flex-initial mb-10 w-full lg:w-6/12'>
            <div className='mx-2'>
            <iframe className='w-full rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.0318287515033!2d127.06119381832318!3d37.51304930605371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca52e2a8fdd19%3A0xb5745e830311c50c!2zKOyjvCnrnbzsmrDrk5zsvZTtjbzroIjsnbTshZg!5e0!3m2!1sko!2skr!4v1669782813146!5m2!1sko!2skr" width="600" height="500" style={{border:'none'}} allowFullScreen loading="lazy"></iframe>
            <div className='mt-6 font-bold engFont text-xl'>LOUD HQ ADDRESS.</div>
            <div className='text-sm text-zinc-300 word-fix'>서울특별시 강남구 영동대로106길 17(경진빌딩), 6F 라우드코퍼레이션</div>
            <ul className='text-sm mt-2 text-zinc-400'>
              <li>TEL : 02-6356-8632</li>
              <li>FAX : 02-6356-8633</li>
              <li>Email : contact@loudcorp.com</li>
            </ul>
            </div>
          </div>

          <div className='text-white flex-initial w-full lg:w-6/12'>
            <div className='mx-2'>
            <iframe className='w-full rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7656576964305!2d127.10158617664358!3d37.51344487205249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca549fac09e6b%3A0xa0ec687335566f8!2z7Yyc7Yq466as7JWE7J28656c65OcKFBBTE1UUkVFIElTTEFORCk!5e0!3m2!1sko!2skr!4v1669782745140!5m2!1sko!2skr" width="600" height="500" style={{border:'none'}} allowFullScreen loading="lazy"></iframe>
            <div className='mt-6 font-bold engFont text-xl'>PALMTREE ISLAND ADDRESS.</div>
            <div className='text-sm text-zinc-300 word-fix'>서울특별시 송파구 올림픽로 300 (롯데월드타워), 30F 팜트리아일랜드</div>
            <ul className='text-sm mt-2 text-zinc-400'>
              <li>Email : front@palmtree.is</li>
            </ul>
            </div>
          </div>
          </div>
          

          
          
        </div>

      </div>
      <div className='bg-black left-0 top-0 w-full h-full backdrop-blur-sm bg-opacity-30 py-40 absolute z-20' />
  
    </div>




    
   </>
  )
}


export async function getStaticProps() {

  const data = await LoudService.getContentList()

  return {
      props: { data }
  }
}
