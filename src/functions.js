import api from './utils/api'

export const getAllNews = async cb => {
    const newsId = await api.get("/v0/newstories.json")
    const limitedIds = newsId.data.slice(0, 20)
    
    const promises = limitedIds.map(item => {
      let url = `/v0/item/${item}.json`
      return api.get(url)
    })

    const results = await Promise.all(promises);

    cb(results.map(result => result.data)) 
}