from boggle import Boggle
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def show_index():
    boggle_game = Boggle()
    print(boggle_game.make_board())
    return render_template('template_index.html')
    


