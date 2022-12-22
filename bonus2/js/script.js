const box = document.querySelector('.box');
for (let i=1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) { 
        const newElement = document.createElement('div');
        newElement.innerHTML = ('FizzBuzz');
        newElement.className = 'fizzbuzz scatola';
        box.append(newElement);
        
        console.log('FizzBuzz');

    } else if (i % 3 == 0) {
        const newElement = document.createElement('div');
        newElement.innerHTML = ('Fizz');
        newElement.className = 'fizz scatola';
        box.append(newElement);
        console.log('Fizz');


    } else if (i % 5 == 0) {
        const newElement = document.createElement('div');
        newElement.innerHTML = ('Buzz');
        newElement.className = 'buzz scatola';
        box.append(newElement);
        console.log('Buzz');


    } else { 
        const newElement = document.createElement('div');
        newElement.innerHTML = (i);
        newElement.className = 'number scatola';
        box.append(newElement);
        console.log('i', i, typeof i);
    
    }

}