FROM aptible/ruby:2.4-ubuntu-16.04

LABEL app-name="tweetch"

RUN apt-get update -qq && apt-get install -y build-essential curl cron vim apt-transport-https

ENV HOME /root
ENV APP_HOME /var/www/app

# Install NVM && Node
ENV NVM_DIR $HOME/.nvm
ENV NODE_VERSION 8.7.0
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash && \
    . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install Yarn
ENV YARN_VERSION 1.3.1
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- -- --version $YARN_VERSION

# Set the working directory
WORKDIR $APP_HOME

# Install Ruby dependencies
ADD Gemfile* $APP_HOME/
RUN bundle install

# Install JS dependencies
ADD package.json yarn.lock $APP_HOME/
RUN $HOME/.yarn/bin/yarn install --production=false

# COPY app to container
COPY . $APP_HOME

# Expose APP port
EXPOSE 8080

# Expose API port
EXPOSE 8081
