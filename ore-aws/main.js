var program = require('commander');
var ec2cli  = require('./ec2/ec2.js');
var s3cli   = require('./s3/s3.js');

function list(val) {
  return val.split(',');
}

// define commands
program
  .version('0.0.1')
  .option('-l, --list', 'get ec2 list instances')
  .option('-instance, --instance <instance>', 'ctl ec2 instances', list)
  .option('-imagename, --imagename <imagename>', 'set image name')
  .option('-instanceid, --instanceid <instanceid>', 'set instance-id')
  .option('-amiid --imageid <imageid>', 'set ami-id')
  .arguments('<firstcmd> [secondcmd]')
  .action(function (firstcmd, secondcmd){
    firstcmdValue = firstcmd;
    secondcmdValue = secondcmd;
  });
  program.parse(process.argv);


  // ec2 instance commands
  if(firstcmdValue === 'ec2') {

    // describe instance
    var index = 0
    if (program.list) {
      ec2cli.describeInstances();
    }
    // start instances
    if(secondcmdValue === 'start'){
      for(index in program.instance){
          ec2cli.startInstance(program.instance[index]);
      }
    }
    // stop instances
    if(secondcmdValue === 'stop'){
      if (program.instance) {
        for(index in program.instance){
            ec2cli.stopInstance(program.instance[index]);
        }
      }
    }
  }

  // ami commands
  if (firstcmdValue === 'ami') {
    if (program.list) {
      ec2cli.describeImages();
    }
    // image name and instance-id
    if(secondcmdValue === 'create'){
      // input data
      var params = {
        Name: program.imagename,
        InstanceId: program.instanceid
      };
      ec2cli.createImage(params);
      }


    //if (program.imageid){
    if (secondcmdValue === 'delete'){
      var params = {
         ImageId: program.imageid
       };
       ec2cli.deregisterImage(params);
    }
  }


  // s3 commands
  if (firstcmdValue === 's3') {
    if (program.list){
        s3cli.listBuckets();
    }
  }
