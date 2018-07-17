var AWS = require('../../node_modules/aws-sdk');

var ec2 = new AWS.EC2();
var params = {};

ec2.describeInstances(params, function(err, data) {
  for (var index in data.Reservations){
    var instances = data.Reservations[index];
    console.log(instances);
  }
});
