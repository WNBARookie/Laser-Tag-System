# Laser Tag System
Laser tag system prepared by Team 9 for Software Engineering in Spring 2023

Implements a laser tag game interface with two screens, one for player entry, and one for game progress.

## Python Virtual Environment Instructions:

Application can be ran locally using the python virtual environment
First, locate the Backend directory in the command prompt using 'cd'.
Next, create a virtual environment:
	
$ python -m venv venv

Activate the environment:

windows-
$ venv\Scripts\activate.bat

linux-
$ venv\Scripts\activate

If successful, the environment should be activated and you can now run the application

To run ws:

If haven't run a virtual environment before install below using pip-

$ pip install supabase
$ pip install flask
$ pip install -U flask-cors

Run Main.py and now application can hit endponts.

To run application open index.html using your preferred browser.

## Player Entry Instructions:

There are two teams, red and green, with up to 8 players in each. 

Each player enters their ID and codename (up to 8 players MAX per team). 

Use tab to cycle through entry areas to autofill your codename for a returning player, and store your ID and codename if you are a new player.

If the user is a new player, then they will be allowed to enter a codename after entering their ID. If the user is a returning player, then their codename will be automatically set.

New player's information will be stored in the database for when they return.

Before starting the game, make sure to press the TAB key to automatically set the codenames for existing players or insert new players into the database.

## Play Action Instructions:
After entering players, click START GAME to begin playing.

Players will fill up in the green and red team windows.

Before the game starts there is a 30 second warning to prepare.