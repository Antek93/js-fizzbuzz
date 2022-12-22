const container = document.querySelector('main');

for (let i=1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) { 

        const newElement = document.createElement('div');
        newElement.innerHTML = ('FizzBuzz');
        container.append(newElement);
        console.log('FizzBuzz');

    } else if (i % 3 == 0) {

        const newElement = document.createElement('div');
        newElement.innerHTML = ('Fizz');
        container.append(newElement);
        console.log('Fizz');


    } else if (i % 5 == 0) {
        const newElement = document.createElement('div');
        newElement.innerHTML = ('Buzz');
        container.append(newElement);
        console.log('Buzz');


    } else { 
        const newElement = document.createElement('div');
        newElement.innerHTML = (i);
        container.append(newElement);
        console.log('i', i, typeof i)
    
    }

}