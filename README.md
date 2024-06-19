# Leetcode_Type_Platform

# This project is a simple platform where users can submit code for processing, similar to Leetcode.In thie I have used Redis to manage the queue of code submissions and MongoDB to store user submissions and results.

# Express Backend: Manages API endpoints for submitting code and checking submission statuses.
Workers: Processes the code submissions from the queue.

commands to start redis under docker
1. docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
2. docker ps - it returns unique id
3. docker exec -it <id> bash
4. redis-cli ping
