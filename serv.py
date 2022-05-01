import eel
import os

if __name__ == '__main__':
    eel.init('')

eel.browsers.set_path("chrome", "C:/Chrone/chrome.exe")


tracks = [i for i in os.listdir("static/music")]

@eel.expose
def give_track_py(num):
    if num < len(tracks) and num > -1:
        print(tracks[num])
        return tracks[num]
    elif num >= len(tracks):
        print(tracks[num % len(tracks)])
        return tracks[num % len(tracks)]
    else:
        print(tracks[len(tracks) - abs(num)])
        return tracks[len(tracks) - abs(num)]


eel.start('index.html', mode="chrome", size=(940, 800))