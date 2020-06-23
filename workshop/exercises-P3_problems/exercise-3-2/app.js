// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const btnList = document.querySelector('#btn-list')
const btns = document.querySelectorAll('button');

for(let i=0; i<btns.length; i++) {
    btns[i].style.background  = 'gold';
}

btns[0].style.opacity = '1';

const toggleBtn = (e) => {
    const btnIds = e.target.id;
    const btn = document.querySelector(`#${btnIds}`);

    switch(btnIds) {

        case 'btn-1':
            if(btn.style.opacity === '1') {
                btn.style.opacity = '0%';
            } else {
                btn.style.opacity = '1';
            }
            break;

        case 'btn-2':
            if(btn.style.background === 'gold') {
                btn.style.background = 'red';
            } else {
                btn.style.background = 'gold';
            }
            break;

        case 'btn-3':
            if(btn.style.background === 'gold') {
                btn.style.background = 'lightblue';
            } else {
                btn.style.background = 'gold';
            }
            break;

        case 'btn-4':
            btn.classList.toggle('jitters');
            break;

        default:
            break;
    }
}

btnList.addEventListener('click', toggleBtn);