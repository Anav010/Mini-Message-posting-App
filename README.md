📨 Mini Message Posting App
A simple Express.js app using MongoDB for storing and viewing public chat messages. Built with Express, EJS, and plain CSS.


## Features

- Submit chat messages via a form (sender, receiver, and message content)
- View all submitted chats on the homepage
- Server-side rendering using EJS templates
- MongoDB used for persistent storage
- Simple and clean UI



## Tech Stack

**Backend:** Node.js, Express.js

**Database:** MongoDB (via Mongoose)

**Styling** CSS

**Dev Tools:** nodemon

**Template Engine:** EJS


## Prerequisites

Make sure you have:
- Node.js (v16 or later)

- MongoDB (local instance or Atlas)

- npm (Node Package Manager)
## Installation

git clone https://github.com/Anav010/Mini-Message-posting-App.git

cd Mini-Message-posting-App

npm install
## Run Locally

Clone the project

```bash
  git clone https://github.com/Anav010/Mini-Message-posting-App.git
```

Go to the project directory

```bash
  cd Mini-Message-posting-App
```

Install dependencies

```bash
  npm install
```



## Running Tests

To run tests, run the following command

```bash
  npm start
```


##  App Structure

Mini-Message-posting-App/

    ├── public/
    └── style.css             # Global stylesheet for the app
    ├── views/
    │   ├── index.ejs             # Home page displaying all chat messages
    │   └── form.ejs              # Form page to create a new message
    ├── routes/
    │   └── chats.js              # Express routes for creating and listing messages
    ├── models/
    │   └── Chat.js               # Mongoose schema/model for chat messages
    ├── app.js                    # Main Express app setup and middleware config
    ├── package.json              # Project metadata and dependencies

## Usage/Examples

    Route	            Description
    GET /chats	       View all chat messages (home page)
    GET /chats/new	   Display form to submit a new chat
    POST /chats	       Save a new chat message to MongoDB


## Feedback

If you have any feedback, please reach out to me at anavsobti@gmail.com

