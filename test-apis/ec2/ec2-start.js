var AWS = require('../../node_modules/aws-sdk');

AWS.config.update({region: 'ap-northeast-1'});

var ec2 = new AWS.EC2();

startInstance('i-0b844e0326b458427');

function startInstance(instanceId) {
  var index, instance
  ec2.startInstances({ InstanceIds: [instanceId]}, function(err, data){
    if(err) {
      console.error(err.toString());
    }else{
      for(index in data.StartingInstances){
          instance = data.StartingInstances[index];
          console.log('start!!')
      }
    }
  });
}
