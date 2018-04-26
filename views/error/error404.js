class error404{
    /**
     * @param {HTMLBodyElement} main 
     */
    constructor(main){
        this.main = main;
        this.main.innerHTML = '';
        this.render();
    }

    render(){
        this.main.innerHTML = `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="description" content="">
            <meta name="author" content="">
            <!-- <link rel="icon" href="../../../../favicon.ico"> -->
            <title>404</title>
            <!-- Bootstrap core CSS -->
            <link href="resources/bootstrap4/css/bootstrap.min.css" rel="stylesheet">
            <!-- Custom styles for this template -->
            <link href="views/error/error404.css" rel="stylesheet">
        </head>
        <body class="text-center">
        <div class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">404</h1>
                <div class="checkbox mb-3">
                    <label>
                        Something to find?
                        <input type="email" id="inputEmail" class="form-control" placeholder="Try 'home'" required autofocus>
                    </label>
                </div>
                <a class="btn btn-lg btn-primary btn-block" style="color:white;" href="#DashBoard" onclick="window.location = ''">Home</a>
                <p class="mt-5 mb-3 text-muted">-</p>
            </div>
        </body>
        </html>`;
    }
}