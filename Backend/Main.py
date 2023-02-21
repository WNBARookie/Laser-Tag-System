from flask import Flask, jsonify, request
from flask_cors import CORS
from supabase import create_client, Client

url: str = "https://olounywkvamwjtupzyht.supabase.co"
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sb3VueXdrdmFtd2p0dXB6eWh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MzQxNjgsImV4cCI6MTk5MTIxMDE2OH0.GZL0CXt5gg8n0NnsPIfEMc8EX77_aajN8Px4gg4nTJg"
supabase: Client = create_client(url, key)

app = Flask(__name__)
CORS(app)

@app.route("/", methods = ['GET', 'POST'])
def home():
    if(request.method == 'GET'):
  
        data = "hello world"
        return jsonify({'data': data})

@app.route('/getCodeName/<int:idNum>', methods = ['GET'])
def getCodeName(idNum):
    response = supabase.table("player").select("codename").eq('id', idNum).execute()
    #return response
    for player in response.data:
         return (player['codename'])

@app.route('/insertPlayer/<int:idNum>/<string:codeName>', methods = ['GET', 'POST'])
def insertPlayer(idNum, codeName):
    supabase.table("player").insert({"id":idNum, "codename":codeName}).execute()
    data = str(idNum) + " " + codeName
    return data

if __name__ == "__main__":
    app.run("localhost", 6969)