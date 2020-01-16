#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

FROM node:12

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# The node image includes a non-root user with sudo access. Use the "remoteUser"
# property in devcontainer.json to use it. On Linux, the container user's GID/UIDs
# will be updated to match your local UID/GID (when using the dockerFile property).
# See https://aka.ms/vscode-remote/containers/non-root-user for details.
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Configure apt and install packages
RUN apt-get update \
  && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \ 
  #
  # Verify git and needed tools are installed
  && apt-get -y install git iproute2 procps \
  #
  # Remove outdated yarn from /opt and install via package 
  # so it can be easily updated via apt-get upgrade yarn
  && rm -rf /opt/yarn-* \
  && rm -f /usr/local/bin/yarn \
  && rm -f /usr/local/bin/yarnpkg \
  && apt-get install -y curl apt-transport-https lsb-release \
  && curl -sS https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/pubkey.gpg | apt-key add - 2>/dev/null \
  && echo "deb https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update \
  && apt-get -y install --no-install-recommends yarn \
  #
  # Install eslint globally
  && npm install -g eslint \
  #
  # [Optional] Update a non-root user to UID/GID if needed.
  && if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ]; then \
  groupmod --gid $USER_GID $USERNAME \
  && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
  && chown -R $USER_UID:$USER_GID /home/$USERNAME; \
  fi \
  # [Optional] Add add sudo support for non-root user
  && apt-get install -y sudo \
  && echo node ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
  && chmod 0440 /etc/sudoers.d/$USERNAME

# Switch back to dialog for any ad-hoc use of apt-get
# ENV DEBIAN_FRONTEND=dialog

# Android ENV
ENV ANDROID_HOME=~/Android/Sdk
ENV ANDROID_SDK_HOME=${ANDROID_HOME}
ENV PATH=${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools:/opt/buck/bin/:${PATH}

# install java
RUN apt-get install openjdk-8-jdk -y
RUN update-alternatives --config java
# install unzip
RUN apt-get install unzip -y

# install Android tools
RUN cd ~ && mkdir Android
RUN cd ~/Android && mkdir Sdk
RUN cd ~/Android/Sdk \
  && wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip \
  && wget https://dl.google.com/android/repository/platform-tools-latest-linux.zip \
  && unzip platform-tools-latest-linux.zip \
  && unzip sdk-tools-linux-4333796.zip
RUN yes | ~/Android/Sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-27" "build-tools;27.0.3"
# env bash
RUN echo export ANDROID_HOME=~/Android/Sdk >> ~/.bashrc
RUN echo export PATH=${PATH} >> ~/.bashrc

# Clean up
RUN apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*
