const container = document.querySelector('main');
const newElement = document.createElement('div');

for (let i=1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) { 

        newElement.innerHTML = ('FizzBuzz');
        container.append(newElement);
        
        console.log('FizzBuzz');

    } else if (i % 3 == 0) {

        newElement.innerHTML = ('Fizz');
        container.append(newElement);
        console.log('Fizz');


    } else if (i % 5 == 0) {
        newElement.innerHTML = ('Buzz');
        container.append(newElement);
        console.log('Buzz');


    } else { 
        newElement.innerHTML = (i);
        container.append(newElement);
        console.log('i', i, typeof i)
    
    }

}