import ajax from '../http.js'

export const Navigation=(params)=>ajax('post','/api/Sessions',params);
