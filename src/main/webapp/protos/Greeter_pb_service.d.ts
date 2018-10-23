// package: com.minhdtb.demo.protos
// file: protos/Greeter.proto

import * as protos_Greeter_pb from "../protos/Greeter_pb";
import {grpc} from "grpc-web-client";

type GreeterSayHello = {
  readonly methodName: string;
  readonly service: typeof Greeter;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_Greeter_pb.HelloRequest;
  readonly responseType: typeof protos_Greeter_pb.HelloReply;
};

export class Greeter {
  static readonly serviceName: string;
  static readonly SayHello: GreeterSayHello;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<T> {
  write(message: T): BidirectionalStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): BidirectionalStream<T>;
  on(type: 'end', handler: () => void): BidirectionalStream<T>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<T>;
}

export class GreeterClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  sayHello(
    requestMessage: protos_Greeter_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_Greeter_pb.HelloReply|null) => void
  ): void;
  sayHello(
    requestMessage: protos_Greeter_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: protos_Greeter_pb.HelloReply|null) => void
  ): void;
}

