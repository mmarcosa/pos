const fs = require('fs');
const chalk = require('chalk');

const addTask = (name, description) => {
    
    debugger
    
    const tasks = loadAllTasks();

    const duplicatedTask = tasks.find(function(task){
        return task.name === name
    })

    if(!duplicatedTask){        
        const newTask = {
            name,
            description,
            status : 'BACKLOG'
        }
        tasks.push(newTask);
        saveTask(tasks);
        const successMessage = chalk.green.bold(`Task with name [${name}] created`);
        console.log(successMessage);
        console.log(tasks);
    }
    else{
        const errorMessage = chalk.red.bold(`Task with name [${name}] already taken`);
        console.log(errorMessage);
        console.log(tasks);
    }
}

const removeTask = (name) => {
    const tasks = loadAllTasks();
//    const tasksToKeep = tasks.filter(function(task){
//        return task.name !== name;
//    })

    const tasksToKeep = tasks.filter((task) => task,name !== name)

    console.log(tasksToKeep);

    saveTask(tasksToKeep);
    const successMessage = chalk.green.bold(`Task with name [${name}] removed`);
    console.log(successMessage);
}

const saveTask = (task) => {
    const tasksJSON = JSON.stringify(task);
    fs.writeFileSync('tasks.json',tasksJSON);
}

const loadAllTasks = () => {
    try{
        const tasksBuffer =  fs.readFileSync('tasks.json');
        return JSON.parse(tasksBuffer);
    }catch (error) {
        return [];
    }
}

const findTask = (name) => {
    const tasks = loadAllTasks();

    const task = tasks.filter((task) => task,name === name)

    if(task !== undefined){
        return task;
    }
    else{
        return [];
    }
}

const updateTask = (name, status) => {
    const tasks = loadAllTasks();

    tasks.map(function(task){
        if(task.name === name){
            task.status = status;
        }
    })


    saveTask(tasks);
}

module.exports = {
    addTask,
    removeTask,
    loadAllTasks,
    findTask,
    updateTask
}

//fazer o remove

//fazer o update

/*ou
module.exports = {
    addTasks : addTasks
}

*/
/*

{
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

    }

    */