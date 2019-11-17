Express.js & Node.js Course for Beginners

Youtube Link:
https://www.youtube.com/watch?v=G8uL0lFFoN0

Github for tutorial:
https://github.com/buzz-software/expressjs-mvp-landing-page

The script he had:
    "start": "if [[ $NODE_ENV == 'production' ]]; then node ./bin/www; else nodemon ./bin/www; fi"
vs. mine:
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"