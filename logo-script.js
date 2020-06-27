

document.addEventListener('DOMContentLoaded', draw, false);
document.querySelector('svg').addEventListener('click',draw);


function draw() {
    let paths = [...document.querySelectorAll('.logo-path')];
    let lengths = paths.map(path => path.getTotalLength());
    paths.forEach((path, i) => {
        path.style.transition = path.style.WebkitTransition = 'none';
        path.classList.add('inv');
        path.style.strokeDasharray = lengths[i] + ' ' + lengths[i];
        path.style.strokeDashoffset = '-' + lengths[i];
        if (i === 3) path.style.strokeDashoffset = lengths[i];
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s cubic-bezier(.85,.01,.65,1), opacity 1s ease-out';
        path.style.transitionDelay = '0.5s';
        path.classList.remove('inv');
        path.style.strokeDashoffset = '0';
    });

    for (let i = 1; i < 6; i++) {
        let triangle = document.getElementById(`tri${i}`);
        triangle.style.transition = triangle.style.WebkitTransition = 'none';
        triangle.classList.add('inv');
        triangle.getBoundingClientRect();
        triangle.style.transition = triangle.style.WebkitTransition = 'opacity 0.32s cubic-bezier(.56,.11,.85,.36)';
        triangle.style.transitionDelay = `${1+i*.05}s`;
        triangle.classList.remove('inv');
    }
}