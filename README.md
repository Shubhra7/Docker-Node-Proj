# 🚀 Dockerized Node.js App

This project demonstrates how to build and run a **Node.js Express server** inside a **Docker container**. It includes a sample `/getUsers` API and shows how to containerize, build, and run it efficiently.

[![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)](https://hub.docker.com/r/shubhra5/testapp)
[![Node.js](https://img.shields.io/badge/Node.js-Server-brightgreen?logo=node.js)](https://nodejs.org)
[![GitHub](https://img.shields.io/github/repo-size/Shubhra7/Docker-Node-Proj?label=Repo%20Size&logo=github)](https://github.com/Shubhra7/Docker-Node-Proj)

---

## 🔧 Features

✅ Simple Express server  
✅ Exposes `GET /getUsers` API  
✅ Fully Dockerized  
✅ Published on Docker Hub  

---
## 🛠️ Getting Started

### 🔹 Clone the Repository

```bash
git clone https://github.com/Shubhra7/Docker-Node-Proj.git
cd Docker-Node-Proj
```

### 🔹 Install Node Dependencies (Run Locally)

```bash
npm install
node server.js
```

> The app will be live at: [http://localhost:5050](http://localhost:5050)

---

### 🔹 Run with Docker

#### 1️⃣ Build Docker Image

```bash
docker build -t shubhra5/testapp .
```

#### 2️⃣ Run the Docker Container

```bash
docker run -p 5050:5050 shubhra5/testapp
```

> Visit: [http://localhost:5050/getUsers](http://localhost:5050/getUsers)

---

### 🔹 Pull Prebuilt Image from Docker Hub

```bash
docker pull shubhra5/testapp
docker run -p 5050:5050 shubhra5/testapp
```
