import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";

import {GreeterClient} from "./protos/Greeter_pb_service";
import {HelloRequest} from "./protos/Greeter_pb";

const client = new GreeterClient("http://demo2.local:8081");
const request = new HelloRequest();
request.setTest1("hello nha xxx!!!");
client.sayHello(request, (error, responseMessage) => {

});

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React"/>,
    document.getElementById("root")
);