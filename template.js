//Can be changed here
const company = 'Company name';

const template = function () {};

let main = document.querySelector('#body');

template.start = () => {
    template.navBar();
    template.sideMenu();
    if (window.location.hash) {
        template.set((window.location.hash).slice(1), () => {
            feather.replace();
        });
    } else {
        template.set('DashBoard',()=>{
            feather.replace();
        });
    }

}

template.navBar = ()=>{
    let navBar = document.querySelector('#navBar');
    let a = document.createElement('a');
    let aSingOut = document.createElement('a');
    let input = document.createElement('input');
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    a.setAttribute('class','navbar-brand col-sm-3 col-md-2 mr-0');
    a.href = '/testsi';
    a.innerHTML = company;

    input.setAttribute('class','form-control form-control-dark w-100');
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Search');
    input.setAttribute('aria-label','Search');
 
    ul.setAttribute('class','navbar-nav px-3');
    li.setAttribute('class','nav-item text-nowrap');

    aSingOut.setAttribute('class','nav-link');
    aSingOut.href = '#';
    aSingOut.innerHTML = 'Sing out';

    li.appendChild(aSingOut);
    ul.appendChild(li);
    navBar.appendChild(a);
    navBar.appendChild(input);
    navBar.appendChild(ul);
}

template.sideMenu = () => {
    let div = document.createElement('DIV');
    let ul = document.createElement('ul');
    
    div.setAttribute('class','sidebar-sticky');

    ul.setAttribute('class','nav flex-column');
    div.appendChild(ul);

    let sideMenu = document.querySelector('#sideMenu');
    sideMenu.appendChild(div);
    let container = ul;
    let links = [
    {page: 'DashBoard', text: 'DashBoard', icon: 'home'},
    {page: 'Orders', text: 'Orders', icon: 'file'},
    {page: 'Products', text: 'Products', icon: 'shopping-cart'},
    {page: 'Customers', text: 'Customers', icon: 'users'},
    {page: 'Reports', text: 'Reports', icon: 'bar-chart-2'},
    {page: 'Integrations', text: 'Integrations', icon: 'layers'}
    ];

    links.forEach((e) => {
        let li = document.createElement('li')
        let a = document.createElement('a');

        li.setAttribute('class', 'nav-item');

        a.setAttribute('class', 'nav-link'); //active
        a.href = 'javascript:void(0)';
        a.addEventListener('click', () => { template.set(e.page); feather.replace();});

        a.innerHTML = `<span data-feather="${e.icon}"></span>  ${e.text}`;

        li.appendChild(a);
        container.appendChild(li)
    });

};

template.set = (section,callback = null) => {
    if (!section) throw Error('Variable "section" is not define');
    if (!(typeof section === 'string')) throw Error('Invalid, argument must a string');

    // Only when the project has been uploaded
    // let stateObj = {index: section + '.html'};
    // history.pushState(stateObj, section, section + '')
    window.location.hash = `#${section}`
    try {
        var view = Function('return ' + section)();
    } catch (e) {
        new error404(document.querySelector('html'));
        feather.replace();
        return console.error('"' + section + '" is not define.');
    }

    new view(main);
    if(callback)callback();
}

window.onhashchange = (w) => {
    template.set((window.location.hash).slice(1));
}

window.onload = ()=>{return false};

document.addEventListener('DOMContentLoaded',()=>{
    template.start();
});