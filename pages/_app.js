import 's/globals.scss'
import LayoutBase from 'layout/Base'
import LayoutHeader from 'layout/Header'
import LayoutFooter from 'layout/Footer'
import CommonHeader from 'layout/CommonHeader'
import LoudService from 'LoudService/service'
import { useEffect } from 'react'

function App({ Component, pageProps }) {
  
  if(LoudService.statusCheck() === false){
    return(
      <>
    <CommonHeader />
      <LayoutBase>
      <LayoutHeader />
      <div className='py-40'>
        <div className='container'>
        <h1 className='text-xl font-bold mb-5'>현재 라우드 서비스 서버와 연결이 되지 않습니다. 잠시 후 다시 시도해주세요.</h1>
        <p className='text-sm'>슈퍼전트는 Loud Service Engine의 접속이 반드시 필요합니다.</p>
        <p className='text-xs text-zinc-400 mt-3'>ERROR CODE : 0000-1001</p>
        </div>
      </div>
      <LayoutFooter />
    </LayoutBase>

      </>
    )
  }

  return (
    <>
    <CommonHeader />
    <LayoutBase>
      <LayoutHeader />
        <Component {...pageProps} />
      <LayoutFooter />
    </LayoutBase>
    </>
  )
}

export default App
