# Laser Tag System

Laser tag system prepared by Team 9 for Software Engineering in Spring 2023

Implements a laser tag game interface with two screens, one for player entry, and one for game progress.

\*Make sure that you have Python and Node.js installed

## Python Virtual Environment Instructions:

Application can be ran locally using the python virtual environment
First, locate the Backend directory in the command prompt using 'cd'.

Open terminal

$ cd Backend

Next, create a virtual environment:
$ python -m venv venv

Activate the environment:

windows-
$ venv\Scripts\activate.bat

linux-
$ venv\Scripts\activate

mac -
$ source venv/bin/activate

If successful, the environment should be activated and you can now run the application

To run ws:

If haven't run a virtual environment before install below using pip-

$ pip install supabase flask -U flask-cors

Run Main.py and now application can hit endponts.

$ python Main.py

## Run Frontend:

### Run Web Server:

Open a new terminal

$ cd Frontend

$ npm install

$ npm run ws

### Run Application:

To run application open index.html using your preferred browser.

## Player Entry Instructions:

There are two teams, red and green, with up to 8 players in each.

Each player enters their ID and codename (up to 8 players MAX per team).

Use tab to cycle through entry areas to autofill your codename for a returning player, and store your ID and codename if you are a new player.

If the user is a new player, then they will be allowed to enter a codename after entering their ID. If the user is a returning player, then their codename will be automatically set.

New player's information will be stored in the database for when they return.

Before starting the game, make sure to press the TAB key to automatically set the codenames for existing players or insert new players into the database.

After entering players, click START GAME to begin playing.

Before the game starts there is a 30 second warning to prepare.

Click countdown button to pause countdown if needed. Click again to resume countdown.

## Play Action Instructions:

\*In order to get the music to start playing, randomly click anywhere on the screen. This is needed due to browser restrictions needing user interaction before auto playing any audio

Players will fill up in the green and red team windows.

Player scores and teams scores will update when players hit other players(10 points per hit). The winning team score will flash.

The Current Game Action will show who hits who and the color of the team points are awarded.

### Run Traffic Generator:

Open another terminal

$ cd Frontend

$ npm run tg

Follow prompts in console to generate traffic.
