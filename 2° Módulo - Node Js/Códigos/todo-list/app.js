const _ = require('lodash');
const chalk = require('chalk');
const yargs = require('yargs');
const task = require('./task')

//alterando a versão do CLI
yargs.version('1.0.1')


//add -> adicionar uma nova task
//remove ->remover a task
//list -> listar as tasks
//read -> ler uma task


yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
    builder:{
        name:{
            describe : 'Task name',
            demandOption : true,
            type : 'string',
        },
        description:{
            describe : 'Description task',
            demandOption : true,
            type : 'string'
        }

    },
    handler: function(argv){
        const info = chalk.green.bold.inverse('Creating nes task');
        console.log(info);
        task.addTask(argv.name, argv.description);
        //console.log(`Name: ${argv.name}`);
        //console.log(`Description: ${argv.description}`);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a task from ToDo list',
    builder:{
        name:{
            describe : 'Task name',
            demandOption : true,
            type : 'string',
        }
    },
    handler: function(argv){
        task.removeTask(argv.name)
        console.log(chalk.red('Removing a task'))
    }
})

yargs.command({
    command: 'list',
    describe: 'List all tasks',
    handler: function(){
        console.log(chalk.gray('Taking all tasks'))
        const allTasks =  task.loadAllTasks();
        const allTasksJSON = JSON.stringify(allTasks, null, 2);
        console.log(allTasksJSON);
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a task of ToDo list',
    builder: {
        name:{
            describe : 'Task name',
            demandOption : true,
            type : 'string',
        }
    },    
    handler: function(argv){
        console.log(chalk.yellow('Reading a task'))
        const taskFound = task.findTask(argv.name);
        console.log(JSON.stringify(taskFound, null, 2));
    }
})

//console.log(process.argv)
//console.log(yargs.argv)



yargs.command({
    command: 'update',
    describe: 'Update a task of ToDo list',
    builder: {
        name:{
            describe : 'Task name',
            demandOption : true,
            type : 'string'
        },
        status:{
            describe : 'status to update the task',
            demandOption : true,
            type : 'string'
        }
    },    
    handler: function(argv){
        console.log(chalk.white.bold.inverse('Updating a task'))
        task.updateTask(argv.name, argv.status);
    }
})

yargs.parse();
