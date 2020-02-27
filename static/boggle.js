document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    //alert('click!');
});



// $('#submit').click(function () {
//     $word = $('#answer').val()
//     $response = $.getJSON({
//         url: '/check-answer',
//         type: 'GET',
//         data: {
//             answer: $word
//         }
//     });
//     alert($response);
// })

$('#submit').click(function () {
    $word = $('#answer').val()
    $response = $.ajax({
        url: '/check-answer',
        type: 'GET',
        data: { answer: $word },
        dataType: 'json'
    }).done(function (data) {
        console.log(data);
    })

})

// $('#submit').click(function () {
//     $.ajax({
//         method: 'GET',
//         url: 'http://jsonplaceholder.typicode.com/posts',
//         dataType: 'json'
//     }).done(function (data) {
//         console.log(data);
//     });
// })
