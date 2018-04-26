class DashBoard{
    /**
     * @param {HTMLMainElement} main 
     */
    constructor(main){
        document.title = 'DashBoard';
        this.main = main;
        this.main.innerHTML = '';
        this.render();
    }

    render(){
        let div = document.createElement('DIV');
        let h2 = document.createElement('H1');
        let divToolbar = document.createElement('DIV');
        let divBtnGroup = document.createElement('DIV');
        let buttonShare = document.createElement('BUTTON');
        let buttonExport = document.createElement('BUTTON');
        let button = document.createElement('BUTTON');

        div.setAttribute('class','d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom');
        
        h2.setAttribute('class','h2');
        h2.innerHTML = 'Dashboard';
        
        divToolbar.setAttribute('class','btn-toolbar mb-2 mb-md-0');
        divBtnGroup.setAttribute('class', 'btn-group mr-2');

        buttonShare.setAttribute('class','btn btn-sm btn-outline-secondary');
        buttonShare.innerHTML = 'Share';
        buttonExport.setAttribute('class','btn btn-sm btn-outline-secondary');
        buttonExport.innerHTML = 'Export';
        
        button.setAttribute('class','btn btn-sm btn-outline-secondary dropdown-toggle');
        button.innerHTML = `<span data-feather="calendar"></span> This week`;

        div.appendChild(h2);
        div.appendChild(divToolbar);

        divBtnGroup.appendChild(buttonShare);
        divBtnGroup.appendChild(buttonExport);

        divToolbar.appendChild(divBtnGroup);
        divToolbar.appendChild(button);

        this.main.appendChild(div);

        this.chart();
    }

    chart(){
        let canvas =  document.createElement('CANVAS');
        canvas.setAttribute('class','my-4');
        canvas.setAttribute('id','myChart');
        canvas.width = '900';
        canvas.height = '380';
        this.main.appendChild(canvas);

        let ctx = document.getElementById("myChart");
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                datasets: [{
                    data: [0, 15, 3, 5, 1, 21, 0],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#007bff',
                    borderWidth: 4,
                    pointBackgroundColor: '#007bff'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    }

}