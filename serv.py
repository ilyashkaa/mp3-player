import eel

if __name__ == '__main__':
    eel.init('')

eel.browsers.set_path("chrome", "C:/Chrone/chrome.exe")

eel.start('index.html', mode="chrome", size=(760, 760))