"use strict";

var app = angular.module("TodosApp", []);

app.filter("reverse", [
    function() {
        return function(text, prefix) {
            return prefix + " " + text.split(" ").reverse().join(" ");
        };
    }
]);

app.factory("factory", [
    function() {
        var counter = 0,
            todos = [{
                id: ++counter,
                text: "Learn Angular",
                done: 1468949854474
            }, {
                id: ++counter,
                text: "Teach it"
            }, {
                id: ++counter,
                text: "Profit"
            }],

            markDone = function(currentTodo) {
                if (!currentTodo.done) {
                    currentTodo.done = new Date().getTime();
                } else {
                    delete currentTodo.done;
                }
            },

            addNewTodo = function(obj, todos) {
                todos.push({
                    id: ++counter,
                    text: obj.newTodoText
                });
            };

        return {
            todos: function () { return todos },
            markDone: markDone,
            addNewTodo: addNewTodo
        };
    }
]);

app.service("service", [
    function() {
        // some obj
    }
]);

app.controller("MainCtrl", [
    "factory",
    function(f) {
        var main = this;
        main.todos = f.todos();
        main.markDone = f.markDone;
        main.addNewTodo = function(obj, todos) {
            f.addNewTodo(obj, todos);
            obj.newTodoText = '';
        };
    }
]);
