import socket

localIP = "127.0.0.1"
port = 7500
bufferSize = 1024

# Create a UDP socket at client side
UDPClientSocket = socket.socket(family=socket.AF_INET, type=socket.SOCK_DGRAM)

# Bind to server using created UDP socket
UDPClientSocket.bind((localIP, port))

while(True):
    msgFromServer = UDPClientSocket.recvfrom(bufferSize)
    msg = "Message from Server {}".format(msgFromServer[0])
    print(msg)