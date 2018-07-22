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
  // 引数が一つの場合
  //.option('-s, --start <instance>', 'instance')
  // 引数が2つ以上指定する場合
  .option('-ss, --starts <instances>', 'instances', list)
  .option('-stop', 'stop ec2 instance')
//  .option('-id, --instance <instance>', 'instance')
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
    if (program.starts) {
      console.log(program.starts)
      // 引数が一つの場合
      //ec2cli.startInstance(program.start);

      // 引数が2つ以上の場合
      for(index in program.starts){
          ec2cli.startInstance(program.starts[index]);
      }
    }
  }

  // s3 commands9
  if (cmdValue === 's3') {
    if (program.list){
        s3cli.listBuckets();
    }
  }
