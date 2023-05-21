// ..........Scroll Section Active Class ...

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = ()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


}
// ..........Scroll Section Active Class ...

let Section = document.querySelectorAll('section');
let NavLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    Section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            NavLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100)


    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // .....progressbar...

    document.addEventListener('alpine:init', () => {
        Alpine.data('skillDisplay', () => ({
            skills: [{
                    'title': 'HTML',
                    'percent': '95',
                },
                {
                    'title': 'CSS',
                    'percent': '70',
                },
                {
                    'title': 'Tailwind CSS',
                    'percent': '90',
                },
                {
                    'title': 'JavaScript',
                    'percent': '70',
                },
                {
                    'title': 'Alpine JS',
                    'percent': '80',
                }, {
                    'title': 'PHP',
                    'percent': '65',
                }, {
                    'title': 'Laravel',
                    'percent': '75',
                }
            ],
            currentSkill: {
                'title': 'HTML',
                'percent': '95',
            }
        }));
    });
}