var program = require('commander');
var ec2cli  = require('./ec2/ec2.js');
var s3cli   = require('./s3/s3.js');

// define commands
program
  .version('0.0.1')
  .option('-l, --list', 'get list instances')
  .arguments('<cmd>')
  .action(function (cmd){
    cmdValue = cmd;
  });
  program.parse(process.argv);

  // ec2コマンド
  if (cmdValue === 'ec2') {
    if (program.list) {
      ec2cli.describeInstances();
    }
  }

  // s3コマンド
  if (cmdValue === 's3') {
    if (program.list){
        s3cli.listBuckets();
    }
  }
