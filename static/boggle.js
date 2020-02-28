document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
});

$('#your-guess-line').hide();
$('#score-line').hide();
$('#answer').focus();
let score = 0;

$('#submit').click(function () {
    $('#your-guess-line').show();
    $('#score-line').show();
    $word = $('#answer').val()
    $response = $.ajax({
        url: '/check-answer',
        type: 'GET',
        data: { answer: $word },
        dataType: 'json'
    }).done(function (data) {
        console.log(data);
        displayResult(data.result);
    });
});

function displayResult(result) {
    $('#your-guess').text($('#answer').val().toUpperCase());
    let resultHTML = ''
    switch (result) {
        case "not-on-board":
            resultHTML = 'That word is not on this board!';
            break;
        case "ok":
            resultHTML = 'You got it!';
            score += 1;
            updateScoreDisplay();
            break;
        case "not-word":
            resultHTML = `That's not even a word!`;
            break;
    }
    $('#guess-result').text(resultHTML);
    $('#answer').val('').focus();
}

function updateScoreDisplay() {
    $('#score').text(score);
}