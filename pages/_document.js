import { Html, Head, Main, NextScript } from 'next/document'

export default function DocumentPage(props) {

  return (
    <Html lang='ko'>
      <Head>
      {/* IE 접속시 안내창 띄우고, Edge 브라우저로 오픈 */}
      <script dangerouslySetInnerHTML={{__html: `
      if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        window.location = 'microsoft-edge:' + window.location;
        setTimeout(function() {
          window.location = '/browser/notice.html';
        }, 1);
      }
      `}}/>

<script dangerouslySetInnerHTML={{__html: `
  (function(d) {
    var config = {
      kitId: 'zkd0uol',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
`}}/>

      </Head>
      <body id="body" className='lg:text-base'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}