let Navegar = {
    login:()=>{
        F.loadScript('./views/login.js','root')
        .then(()=>{
            document.getElementById("rootFooter").innerHTML = '';
            initView();
        })
    },
    ventas:()=> {
        F.loadScript('./views/ventas.js', 'root')
        .then(()=>{
            document.getElementById("rootFooter").innerHTML = '';
            initView();
        })
    },
    gerencia:()=> {
        F.loadScript('./views/gerencia.js', 'root')
        .then(()=>{
            //document.getElementById("rootFooter").innerHTML = '';
            initView();
        })
    },
    productos:()=> {
        F.loadScript('./views/productos.js', 'root')
        .then(() => {
            initView();
        })
    },
    clientes:()=> {
        F.loadScript('./views/clientes.js', 'root')
        .then(()=> {
            initView();
        })
    },
    dashboard_gerencia:() => {
        F.loadScript('./views/dashboard_gerencia.js', 'root')
        .then(() => {
            initView();
        })
    }
}