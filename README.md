# Laser-Tag-System
Laser tag system for Software Engineering in Spring 2023

Python Virtual Environment Instructions:

Application can be ran locally using the python virtual environment
First, locate the Backend directory in the command prompt using 'cd'.
Next, create a virtual environment-
	
$ python -m venv venv

Activate the environment-

$ venv\Scripts\activate.bat

If successful, the environment should be activated and you can now run the application

To run ws:

If haven't ran on virtual environment before install below using pip-

$ pip install supabase
$ pip install flask
$ pip install -U flask-cors

Run Main.py, and now application can hit endponts.

Run application:

Open index.html using a browser.

Player Entry Screen Instructions:

There are two teams, red and green, with up to 8 players in each. 
Each player enters their ID and codename (press tab to move from field to field). 
If the user is a new player, then they will be allowed to enter a codename after entering their ID.
If the user is a returning player, then their codename will be automatically set.
New player's information will be stored in the database for when they return.