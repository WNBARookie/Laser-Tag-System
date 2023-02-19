from supabase import create_client, Client

url: str = "https://olounywkvamwjtupzyht.supabase.co"
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sb3VueXdrdmFtd2p0dXB6eWh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MzQxNjgsImV4cCI6MTk5MTIxMDE2OH0.GZL0CXt5gg8n0NnsPIfEMc8EX77_aajN8Px4gg4nTJg"
supabase: Client = create_client(url, key)

def getCodeName(idNum):
    response = supabase.table("player").select("codename").eq('id', idNum).execute()

    for player in response.data:
        return (player['codename'])

def insertPlayer(idNum, codeName):
    supabase.table("player").insert({"id":idNum, "codename":codeName}).execute()

codeName = getCodeName(5678)
print(codeName)
#insertPlayer(5678, "bob")