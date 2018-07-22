var program = require('commander');
var ec2cli  = require('./ec2/ec2.js');
var s3cli   = require('./s3/s3.js');

function list(val) {
  return val.split(',');
}

// define commands
program
  .version('0.0.1')
  .option('-l, --list', 'get list instances')
  .option('-s, --start <instances>', 'instances', list)
  .option('-stop', 'stop ec2 instance')
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
    // start instance
    if (program.start) {
      //console.log(program.start)

      for(index in program.start){
          ec2cli.startInstance(program.start[index]);
      }
    }
  }

  // s3 commands9
  if (cmdValue === 's3') {
    if (program.list){
        s3cli.listBuckets();
    }
  }
