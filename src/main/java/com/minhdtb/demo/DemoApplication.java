package com.minhdtb.demo;

import com.minhdtb.demo.protos.GreeterGrpc;
import com.minhdtb.demo.protos.GreeterOuterClass;
import io.grpc.stub.StreamObserver;
import org.lognet.springboot.grpc.GRpcService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @GRpcService
    public class GreeterService extends GreeterGrpc.GreeterImplBase {

        @Override
        public void sayHello(GreeterOuterClass.HelloRequest request, StreamObserver<GreeterOuterClass.HelloReply> responseObserver) {
            String s = request.getTest1();
            System.out.println("sss = " + s);
            final GreeterOuterClass.HelloReply.Builder replyBuilder = GreeterOuterClass.HelloReply.newBuilder();
            responseObserver.onNext(replyBuilder.build());
            responseObserver.onCompleted();
        }
    }
}
