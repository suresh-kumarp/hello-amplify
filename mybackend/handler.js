'use strict';

const todos = [
  {
    id: 1,
    name: "code"
  },
  {
    id: 2,
    name: "build"
  },
  {
    id: 3,
    name: "test"
  },
  {
    id: 4,
    name: "deploy"
  },
  {
    id: 5,
    name: "repeat"
  }
];

module.exports.getTodos = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(todos)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
