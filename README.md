# Next.js 기반 웹사이트 보일러플레이트

### 주의사항
```
이 보일러플레이트는 Next.js 12.1 기반으로 구축되어 있으며, 추후 Next.js 업데이트시 latest 버전을 상시적으로 따라갑니다.
```

### Specific
이 보일러플레이트에 포함된 상세 내역

- [X] Next.js Based
- [X] Tailwind CSS
    - [ ] word-break: keep-all 커스텀 Tailwind 클래스 적용 (KO)
    - [ ] text-shadow 커스텀 Tailwind 클래스 적용
    - [ ] iframe tag 16:9 ratio 적용
    - [ ] body tag overscroll-behavior-y:contain 적용 (position sticky 대응)
    - [ ] 모든 엘리먼트 box-sizing:border-box 세팅
- [X] Sass 세팅
- [X] PostCSS
- [X] CSS 브라우저별 AutoPrefixer 적용
- [ ] cssnano 적용
- [X] jsconfig.json 세팅
- [ ] graphql-client 세팅
- [x] Components, Layout, Page Split
- [x] SVG 파일 Webpack 포함
- [x] SWC 컴파일러 minify 적용
- [x] 일부 Response Header 제거
- [X] 기본 SEO 세팅 (Meta tag 등)
- [X] build시 기본 sitemap 자동생성 (next-sitemap)
 
### env 세팅
root 디렉토리에서 *env.boilerplate* 파일을 *env.local* 로 복사하여 사용

```bash
$ cp env.boilerplate env.local
```

#### 사용되는 변수
```js
#웹사이트 이름
APP_WEBSITE_NAME=

#웹사이트 Public 주소
APP_WEBISTE_URL=

#graphql endpoint 주소
APP_WEBSITE_GRAPHQL_URL=
```

### jsconfig.json 세팅
이 보일러플레이트는 별도의 jsconfig.json 파일을 사용함

#### 설정된 options

```json
{ 
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "a/*": ["assets/*"],
        "c/*": ["components/*"],
        "s/*": ["styles/*"],
        "l/*": ["layout"] 
      }
    }
}
```
*개발상황에 맞게 paths는 수정가능*

#### 경로 사용
```jsx
/* import Component from '../components/Component'와 동일 */
import Component from 'c/Component'
```