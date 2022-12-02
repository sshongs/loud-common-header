import axios from "axios"
import moment from 'moment'
import CONFIG from "./config"

const edjsHTML = require("editorjs-html");
const edjsParser = edjsHTML();



function replaceTags(html) {
 const regExp = /<\/?[^>]+>/gi;
 const text = html.replace(regExp,"");
 return text;
}

const LoudService = {

    //라우드 서비스 서버 상태 체크
    statusCheck : () => {
        return true
    },
    
    //에이전시 멤버 리스트 호출
    getAgencyMemberList : async () => {
        //에이전시 멤버 데이터 가져오기
        const getData = await axios(`${CONFIG.server}/api/agency-members?populate=*`,{headers:{'Authorization' : `bearer ${CONFIG.token}`}})

        //팀정보 데이터 가져오기
        const getTeam = await axios(`${CONFIG.server}/api/agency-teams?populate=*`,{headers:{'Authorization' : `bearer ${CONFIG.token}`}})

        //사용 변수 지정
        const result = getData.data.data
        const teamList = getTeam.data.data
        let array = []

        //만약 에이전시 멤버 정보가 없다면, null 리턴
        if(!result) return null

        //가져온 정보를 가공처리
        result.map(val=>{

            //팀의 소속리그 정보 filter
            const region = teamList.filter(s=>s.attributes.shortName === val.attributes.agency_team.data.attributes.shortName)[0]

            //최종 출력 데이터 배열 push
            array.push({
                name: val.attributes.name, 
                nickName: val.attributes.nickName, 
                url: val.attributes.url, 
                isFA: val.attributes.isFA,
                profileImageSmall: (val.attributes.profileImage.data === null) ? `${CONFIG.cdn}/cms/data/noimage.jpg` : val.attributes.profileImage.data.attributes.formats.small.url,
                profileImageOrigin: (val.attributes.profileImage.data === null) ? `${CONFIG.cdn}/cms/data/noimage.jpg` : val.attributes.profileImage.data.attributes.url,
                game: val.attributes.agency_game.data.attributes.name,
                role: val.attributes.agency_role.data.attributes.name,
                team: val.attributes.agency_team.data.attributes.shortName,
                region: region.attributes.agency_region.data.attributes.name,
                nation: region.attributes.agency_region.data.attributes.nation,
                updatedAt: val.attributes.updatedAt
            })
        })
       
        return array

    
    },

    //에이전시 멤버 상세정보 호출
    getAgencyMember : async (id) => {

        const getData = await axios(`${CONFIG.server}/api/agency-members?filters[url][$eq]=${id}&populate=*`,{headers:{'Authorization' : `bearer ${CONFIG.token}`}})
        const result = getData.data.data[0]

        if(!result) return null       
     
        //팀정보 데이터 가져오기
        const getTeam = await axios(`${CONFIG.server}/api/agency-teams?filters[id][$eq]=${result.attributes.agency_team.data.id}&populate=*`,{headers:{'Authorization' : `bearer ${CONFIG.token}`}})
        const team = getTeam.data.data[0]

        if(!team) return null       
 

        return {

                updatedAt : result.attributes.updatedAt,
                name : result.attributes.name,
                nickName : result.attributes.nickName,
                description : result.attributes.description,
                team : {
                    name : team.attributes.name,
                    shortName : team.attributes.shortName,
                    region : team.attributes.agency_region.data.attributes.name,
                    nation : team.attributes.agency_region.data.attributes.nation
                },
                profileImage : {
                    origin : result.attributes.profileImage.data === null ? `${CONFIG.cdn}/cms/data/noimage.jpg` : result.attributes.profileImage.data.attributes.url,
                    thumb : result.attributes.profileImage.data === null ? `${CONFIG.cdn}/cms/data/noimage.jpg` : result.attributes.profileImage.data.attributes.formats.small.url,
                },
                history : result.attributes.history,
                teamHistory : result.attributes.teamHistory,
                role : result.attributes.agency_role.data.attributes.name,
                game : result.attributes.agency_game.data.attributes.name



        }
    },
    getContentList : async (limit) => {

        if(!limit) limit = 10
         
         let array = []
         const getData = await axios(`${CONFIG.server}/api/contents?populate=*&filters[content_places][id][$eq]=2&sort[0]=publishedAt:desc&pagination[start]=0&pagination[limit]=${limit}`,{headers:{'Authorization' : `bearer ${CONFIG.token}`}})
         const result = getData.data.data
         if(!result) return null   

         result.map(val=>{
            const articleToHtml = edjsParser.parse(JSON.parse(val.attributes.article))
            const extractImage = articleToHtml.join('').match(/<img\s+[^>]*src="([^"]*)"[^>]*>/)
     
            array.push({
                id: val.id,
                title: val.attributes.title,
                subTitle: val.attributes.subTitle,
                thumb: !extractImage ? `${CONFIG.cdn}/cms/data/noimage.jpg`:`${extractImage[1]}`,
                publishedAt: moment(val.attributes.publishedAt).format('YYYY.MM.DD'),
                category: val.attributes.content_category.data.attributes.name,
                shortArticle: (replaceTags(articleToHtml.join(''))).substr(0,80)+'...'
            })
         })

        return array
    },

    getContent : async (id) => {

         let array = {}
         const getData = await axios(`${CONFIG.server}/api/contents/${id}?populate=*`,{headers:{'Authorization' : `bearer ${CONFIG.token}`}})
         const result = getData.data.data
  
         if(!result) return null   

   

         const articleToHtml = edjsParser.parse(JSON.parse(result.attributes.article))
         const extractImage = articleToHtml.join('').match(/<img\s+[^>]*src="([^"]*)"[^>]*>/)
         

        array = {
            id: result.id,
            title: result.attributes.title,
            subTitle: result.attributes.subTitle,
            thumb: !extractImage ? `${CONFIG.cdn}/cms/data/noimage.jpg`:`${extractImage[1]}`,
            publishedAt: moment(result.attributes.publishedAt).format('YYYY.MM.DD'),
            category: result.attributes.content_category.data.attributes.name,
            article: articleToHtml,
        }
 


        return array

        
    },

}





export default LoudService