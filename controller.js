"use strict";

function TodoController(){
  const vm = this;
  vm.list = [

    {
      task: "Clean bathroom.",
      completed: true
    },

    {
      task: "Mail car payment.",
      completed: false
    },

    {
      task: "Go to the gym.",
      completed: true
    },

    {
      task: "Get groceries.",
      completed: false
    },
  ];
//Adds tasks
  vm.addTask = ()=> {
    vm.list.push({
      task: vm.newTask.name,
      completed: false
    });
    vm.newTask = {};
  }
//Removes tasks from list
  vm.removeTask = (index)=> {
    vm.list.splice(index, 1);
  }
//Marks tasks as complete
  vm.completeTask = (index)=> {
    vm.list[index].completed = true;
  }

}

angular
  .module("todoApp")
  .controller("TodoController", TodoController)
