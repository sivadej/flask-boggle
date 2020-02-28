from boggle import Boggle
from flask import Flask, render_template, jsonify, request, redirect, session, make_response

app = Flask(__name__)
app.config['SECRET_KEY'] = 'ENTER_YOUR_OWN_SECRET_KEY'

boggle_game = Boggle()

# generate new game board, render to page and store in session


@app.route('/')
def show_index():
    board = boggle_game.make_board()
    session['current_board'] = board
    return render_template('template_index.html', board=board)

# get result of user-submitted guess, return as JSON
@app.route('/check-answer')
def check_answer():
    guess = request.args['answer']
    is_match = boggle_game.check_valid_word(
        board=session['current_board'], word=guess)
    print(is_match)
    return jsonify(result=is_match)
