var AWS = require('../../node_modules/aws-sdk');

var s3 = new AWS.S3();
var params = {};

exports.listBuckets = function(){
  s3.listBuckets(params, function(err, data) {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
    }
  });
};
