// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Model = require("./model.bs.js");
var React = require("react");

function Components$Task(Props) {
  var task = Props.task;
  var onDone = Props.onDone;
  var match = task[/* status */2];
  return React.createElement("li", {
              className: match ? "done" : "pending"
            }, React.createElement("button", {
                  title: "done",
                  onClick: (function (param) {
                      return Curry._1(onDone, task[/* id */0]);
                    })
                }), React.createElement("span", undefined, task[/* label */1]));
}

var Task = {
  make: Components$Task
};

function Components$ToDo(Props) {
  var match = React.useReducer(Model.State.reducer, Model.State.initial_state);
  var dispatch = match[1];
  var state = match[0];
  var match$1 = state[/* input */0];
  return React.createElement("div", undefined, React.createElement("form", {
                  onSubmit: (function (e) {
                      e.preventDefault();
                      return Curry._1(dispatch, /* Add_task */0);
                    })
                }, React.createElement("input", {
                      placeholder: "What do you need to do?",
                      value: match$1 !== undefined ? match$1 : "",
                      onChange: (function (e) {
                          var text = e.target.value;
                          return Curry._1(dispatch, /* Write */Block.__(0, [text]));
                        })
                    }), React.createElement("button", {
                      title: "add",
                      type: "submit"
                    })), React.createElement("ul", undefined, $$Array.of_list(List.map((function (task) {
                            return React.createElement(Components$Task, {
                                        task: task,
                                        onDone: (function (task_id) {
                                            return Curry._1(dispatch, /* Complete_task */Block.__(1, [task_id]));
                                          }),
                                        key: task[/* id */0]
                                      });
                          }), state[/* tasks */1]))));
}

var ToDo = {
  make: Components$ToDo
};

exports.Task = Task;
exports.ToDo = ToDo;
/* Model Not a pure module */
