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
  .option('-up, --start <instances>', 'start ec2 instances', list)
  .option('-down, --stop <instances>', 'stop ec2 instances', list)
  .arguments('<cmd>')
  .action(function (cmd){
    cmdValue = cmd;
  });
  program.parse(process.argv);

  // ec2 commands
  if (cmdValue === 'ec2') {
    // describe instance
    var index = 0
    if (program.list) {
      ec2cli.describeInstances();
    }
    // start instances
    if (program.start) {
      for(index in program.start){
          ec2cli.startInstance(program.start[index]);
      }
    }
    // stop instances
    if (program.stop) {
      for(index in program.stop){
          ec2cli.stopInstance(program.stop[index]);
      }
    }
  }
  // s3 commands
  if (cmdValue === 's3') {
    if (program.list){
        s3cli.listBuckets();
    }
  }
