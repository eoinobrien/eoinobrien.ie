---
types:
  - post
title: "Using Podman instead of Docker Desktop on WSL2"
authors:
  - name: "Eoin O'Brien"
date: "2022-03-02T20:00:00Z"
categories:
  - Software
tags:
  - Podman
  - Docker
  - WSL2
image:
  path: "/assets/blog/container-ship-jOqJbvo1P9g.jpg"
  alt: "A blue container ship on the water, stacked with containers."
  caption: "Photo by <a href='https://unsplash.com/@carrier_lost?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Ian Taylor</a> on <a href='https://unsplash.com/s/photos/docker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
---

From the end of January 2022, an Enterprise License is required to use Docker Desktop. It remains free for small businesses (fewer than 250 employees AND less than $10 million in annual revenue), personal use, education, and non-commercial open source projects.

As an alternative I looked at using [Podman](https://podman.io/) on Windows Subsystem for Linux 2.

# Setting up WSL 2

- Install WSL 2
  - Open `cmd{:sh}` as Administrator
  - Run `wsl --install{:sh}`
  - Restart Windows
- Install a Linux Distro
  - Open `cmd{:sh}` as Administrator
  - Run `wsl --install -d Ubuntu{:sh}` to install Ubuntu LTS
  - Restart Windows

# Installing Podman

- Add a Repositories which has Podman available
  - If you are using Ubuntu 20.10 or newer Podman is available in the official repositories. And skip to the next part of adding a repository to find Podman.
  - If you are running 20.04 (current LTS), or newer run the below.
  - Open an Ubuntu terminal window, and run the below.
    ```sh
    . /etc/os-release
    echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
    curl -L "https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/Release.key" | sudo apt-key add -
    ```
- Install Podman
  - In an Ubuntu terminal, run the below
    ```sh
    sudo apt-get update
    sudo apt-get -y upgrade
    sudo apt-get -y install podman
    ```

# Using Podman

Podman has a similar CLI to docker, so most, if not all, commands that you use in Docker are supported by Podman.

A full list of supported commands can be found on the [Podman documentations](https://docs.podman.io/en/latest/Commands.html)
