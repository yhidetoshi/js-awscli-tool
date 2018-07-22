var AWS = require('../../node_modules/aws-sdk');

AWS.config.update({region: 'ap-northeast-1'});
var ec2 = new AWS.EC2();

// describe instance
exports.describeInstances = function(){
  ec2.describeInstances({}, function(err, data) {
    var instance, reservation, name
    var res, index, tag = 0

    for(index in data.Reservations){
      var reservation = data.Reservations[index];

      // loop for number of instances
      for(res in reservation.Instances){
        instance = reservation.Instances[res];
        console.log(instance.InstanceId)

        // get instance name
        for (tag in instance.Tags){
          if(instance.Tags[tag].Key === 'Name'){
              name = instance.Tags[tag].Value;
            }
            console.log(name);
          }
        }
      }
    });
};

// start instance
var instanceId

//exports.startInstance = function(params) {
exports.startInstance = function(instanceId) {
  var index, instance
  ec2.startInstances({ InstanceIds: [instanceId]}, function(err, data){
    if(err) {
      console.error(err.toString());
    }else{
      for(index in data.StartingInstances){
          instance = data.StartingInstances[index];
          console.log('start!!');
      }
    }
  });
};


// stop instance
function stopInstance(instanceId) {
  var index, instance
  ec2.stopInstances({ InstanceIds: [instanceId]}, function(err, data){
    if(err){
      console.error(err.toString());
    }else{
      for(index in data.StoppingInstances){
        instance = data.StoppingInstances[index];
        console.log('stop!!');
      }
    }
  });
}
