from flask import Flask

app = Flask(__name__)

if __name__ == "__main__":
    app.run("192.168.88.232", port=3000)