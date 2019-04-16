var isPro=process.env.NODE_ENV==='production'

module.exports={
  baseUrl:isPro ? 'http://medicalunion.jianpeicn.com/' : 'http://192.168.1.120:9999/'
}
