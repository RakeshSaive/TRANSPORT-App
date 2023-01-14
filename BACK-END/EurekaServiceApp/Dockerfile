FROM openjdk:11-jre-slim
WORKDIR usr/src
ADD ./target/EurekaServiceApp-0.0.1-SNAPSHOT.jar /usr/src/EurekaServiceApp-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","EurekaServiceApp-0.0.1-SNAPSHOT.jar"]
