FROM openjdk:11-jre-slim
WORKDIR usr/src
ADD ./target/ExternalApi-0.0.1-SNAPSHOT.jar /usr/src/ExternalApi-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","ExternalApi-0.0.1-SNAPSHOT.jar"]
