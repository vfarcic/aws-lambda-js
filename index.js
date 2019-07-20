exports.handler =  async function(event, context) {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    return context
}



// Async
// const https = require('https')
// let url = "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"

// exports.handler = async function(event) {
//   const promise = new Promise(function(resolve, reject) {
//     https.get(url, (res) => {
//         resolve(res.statusCode)
//       }).on('error', (e) => {
//         reject(Error(e))
//       })
//     })
//   return promise
// }



// Async
// const AWS = require('aws-sdk')
// const s3 = new AWS.S3()

// exports.handler = async function(event) {
//   return s3.listBuckets().promise()
// }



// Sync
// const https = require('https')
// let url = "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"

// exports.handler =  function(event, context, callback) {
//   https.get(url, (res) => {
//     callback(null, res.statusCode)
//   }).on('error', (e) => {
//     callback(Error(e))
//   })
// }



// Sync
// const AWS = require('aws-sdk')
// const s3 = new AWS.S3()

// exports.handler = function(event, context, callback) {
//   context.callbackWaitsForEmptyEventLoop = false
//   s3.listBuckets(null, callback)
//   setTimeout(function () {
//     console.log('Timeout complete.')
//   }, 5000)
// }