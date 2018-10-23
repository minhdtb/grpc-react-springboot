// package: com.minhdtb.demo.protos
// file: protos/Greeter.proto

var protos_Greeter_pb = require("../protos/Greeter_pb");
var grpc = require("grpc-web-client").grpc;

var Greeter = (function () {
  function Greeter() {}
  Greeter.serviceName = "com.minhdtb.demo.protos.Greeter";
  return Greeter;
}());

Greeter.SayHello = {
  methodName: "SayHello",
  service: Greeter,
  requestStream: false,
  responseStream: false,
  requestType: protos_Greeter_pb.HelloRequest,
  responseType: protos_Greeter_pb.HelloReply
};

exports.Greeter = Greeter;

function GreeterClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GreeterClient.prototype.sayHello = function sayHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Greeter.SayHello, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.GreeterClient = GreeterClient;

