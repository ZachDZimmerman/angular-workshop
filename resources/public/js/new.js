// use strict;

function bla(name) {
    this.name = name;
}
// {name: 'raju'}

var x1 = new bla('raju');

function bla1(name) {
    return {
        name: name
    };
}
// {name: 'raju'}
var x2 = bla1('raju')
