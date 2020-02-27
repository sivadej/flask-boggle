from boggle import Boggle
from flask import Flask, render_template, jsonify, request, redirect, session, make_response

app = Flask(__name__)
app.config['SECRET_KEY'] = 'heyooooo'

boggle_game = Boggle()


@app.route('/')
def show_index():
    # generate new game board, render to page and store in session
    board = boggle_game.make_board()
    session['current_board'] = board
    return render_template('template_index.html', board=board)

# check answer using guess string from form against session board
@app.route('/check-answer')
def check_answer():
    guess = request.args['answer']
    is_match = boggle_game.check_valid_word(
        board=session['current_board'], word=guess)
    # print(type(session['current_board'])) #returns list
    # print(type(guess)) #returns str
    # return render_template('template_index.html', board=session['current_board'], guess=guess, is_match=is_match)
    print(is_match)
    return jsonify(result=is_match)


@app.route('/test-json')
def test_json():
    return jsonify(fake=True, id=101)
