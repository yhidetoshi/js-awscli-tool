/* OK
var AWS = require('aws-sdk');

var s3 = new AWS.S3();
var params = {};
s3.listBuckets(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response  }
});

*/

var AWS = require('../../node_modules/aws-sdk');

var s3 = new AWS.S3();
var params = {};

s3.listBuckets(params, function(err, data) {
  for (var index in data.Buckets) {
    var bucket = data.Buckets[index];
    console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
 }
});
