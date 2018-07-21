var command = require('commander');

var ec2cli = require('./ec2/ec2.js');

command
  .version('0.0.1')
  .option('-l, --list', 'get list instances')
  .parse(process.argv);

if (command.list) {
  ec2cli.describeInstances();
}
