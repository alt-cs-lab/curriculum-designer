This project is for creating curriculum maps from the ACM Curriculum Recommendations. Currently it is using the 2013 recommendations, but we would like to update it to the 2023 set.

[2013 Recommendations](https://www.acm.org/binaries/content/assets/education/cs2013_web_final.pdf)

[2023 Recommendations](https://csed.acm.org/)

This project consists of a React client coupled with a server providing an API for that client to communicate with. In production, the built react client is deployed through the dockerized API server.

## Development

It is recommended to take advantage of the dockerized development setup. On a machine with docker-compose installed, from the top level project directory, run:

`$ docker-compose build`
`$ docker-compose up`

This will launch a docker container running the React client in development mode, and the server using nodemon.  The React client is already configured to proxy to the API.  Both client and server use hot code reloading, so you can simply edit and save files, and both server and app will relaunch with the new code automatically.

To stop the server, use `Ctrl + C`

**Windows Notes** If you are using Windows 10 or 11, it is recommended you use Docker Desktop + Windows Subsystem for Linux. You will also want to shut down Docker Desktop completely between development sessions, as it has a known memory leak and if left running will eventually crash the WSL Linux instance, requiring a reboot.

