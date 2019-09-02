import Axios from 'axios';

export default {
  getNewsList(params) {
    return Axios.get('/newsTrends/list.json', { params: params })
  }
};