var AWS = require('../../node_modules/aws-sdk');

AWS.config.update({region: 'ap-northeast-1'});

var ec2 = new AWS.EC2();


ec2.describeInstances({}, function(err, data) {

  var instance
  var res = 0
  var index = 0

  for(index in data.Reservations){
    var reservation = data.Reservations[index];

    for(res in reservation.Instances){

      instance = reservation.Instances[res];
      console.log(instance.InstanceId)
    }
  }

});
