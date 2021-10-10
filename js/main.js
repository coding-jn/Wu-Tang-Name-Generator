let number = 1
let answer = undefined
let answers = new Array()
let fullName = new Array()

function storeAnswer() {
    
    if (document.querySelector('#a').checked == true){
        document.querySelector('#a').checked = false
        answer = document.querySelector('#a').value
    }else if (document.querySelector('#b').checked == true){
        document.querySelector('#b').checked = false
        answer = document.querySelector('#b').value
    }else if (document.querySelector('#c').checked == true){
        document.querySelector('#c').checked = false
        answer = document.querySelector('#c').value
    }else if (document.querySelector('#d').checked == true){
        document.querySelector('#d').checked = false
        answer = document.querySelector('#d').value
    }else {
        alert('You need to choose an answer')
        return
    }

    fetch(`/api?question=${number}&answer=${answer}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                answers.push(data.name)
                number+=1
                getQuestion()
                console.log(number)
                if (number > 4){
                    document.querySelector('button').innerText = 'Generate Name'
                }
                if (number > 5){
                    getName()
                }
            });
}

function getQuestion() {
    fetch(`/api?question=${number}`)
            .then(response => response.json())
            .then((data) => {
              console.log(data);
              document.querySelector('p').innerText = data.question
              document.querySelector('#a').value = data.a
              document.querySelector('#labelA').innerText = data.a
              document.querySelector('#b').value = data.b
              document.querySelector('#labelB').innerText = data.b
              data.c == undefined ? (document.querySelector('#c').className = 'hidden', document.querySelector('#labelC').className = 'hidden') : (document.querySelector('#c').value = data.c, document.querySelector('#labelC').innerText = data.c)
              data.d == undefined ? (document.querySelector('#d').className = 'hidden', document.querySelector('#labelD').className = 'hidden') : (document.querySelector('#d').value = data.d, document.querySelector('#labelD').innerText = data.d)
            });
}

function getName(){
    let firstName = Math.random()
    let lastName = Math.random()

    firstName < 0.5 ? fullName.push(answers[0]) : fullName.push(answers[1])
    lastName < 0.33 ? fullName.push(answers[2]) : lastName < 0.66 ? fullName.push(answers[3]) : fullName.push(answers[4])
    console.log(fullName)
    document.querySelector('span').innerText = `${fullName[0]} ${fullName[1]}`
    document.querySelector('#name').className = ''
    document.querySelector('#quiz').className = 'hidden'
}

document.querySelector('#next').addEventListener('click', storeAnswer)
getQuestion()
