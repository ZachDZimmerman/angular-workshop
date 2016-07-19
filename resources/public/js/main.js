"use strict";

var app = angular.module("TodosApp", []);

app.filter("reverse", [
    function () {
        return function (text, prefix) {
            return prefix + ' ' + text.split(" ").reverse().join(" ");
        };
    }
]);



app.controller("MainCtrl", [
    function () {
        var main = this,
            counter = 0,
            todos = [
              {id:++counter, text: "Learn Angular", done: 1468949854474},
              {id:++counter, text: "Teach it"},
              {id:++counter, text: "Profit"}
            ];
        main.todos = todos;
        main.markDone = function (currentTodo) {
            if (!currentTodo.done) {
                currentTodo.done = new Date().getTime();
            } else {
                delete currentTodo.done;
            }
        };
        main.addNewTodo = function (obj, todos) {
            todos.push({id: ++counter, text: obj.newTodoText});
            obj.newTodoText = '';
        };
    }
]);
