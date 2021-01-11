FROM ubuntu:18.04
RUN echo "hello"
ENV NG_CLI_ANALYTICS=ci
RUN apt-get update -y \
    && apt-get install curl zip -y \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \ 
    && curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh \
    && chmod +x nodesource_setup.sh && ./nodesource_setup.sh \
    && apt-get install nodejs -y \
    && npm install -g @angular/cli \
    && unzip awscliv2.zip \
    && ./aws/install \
    && apt-get remove curl zip -y \
    && rm -rf /var/lib/apt/lists/*
ENTRYPOINT /bin/bash
