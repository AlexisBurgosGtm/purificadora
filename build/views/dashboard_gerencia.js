
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="card card-rounded shadow">
                    <div class="card-body p-5">

                        <div class="row">
                            <div class="col-6">
                                <img src="img/logo_santa_paula.png" class="rounded me-5" width="100px" height="50px">
                            </div>
                            <div class="col-6">
                                <h4 style="" class="text-right negrita text-danger mb-0">Purificadora Santa Paula</h4>
                                <h5 class="text-right text-secondary">Gestión Administrativa</h5>
                            </div>
                        </div>

                        <div class="form-group">    
                                <div class="input-group">
                                    <select class="form-control negrita text-naranja" id="cmbMes">
                                    </select>
                                    <select class="form-control negrita text-naranja" id="cmbAnio">
                                    </select>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.menu_principal()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           ${view.rpt_fechas()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.rpt_productos()}
                        </div>  
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                            ${view.rpt_clientes()}
                        </div> 
                        <div class="tab-pane fade" id="cinco" role="tabpanel" aria-labelledby="home-tab">
                            ${view.rpt_garrafones()}
                        </div>
                        <div class="tab-pane fade" id="seis" role="tabpanel" aria-labelledby="home-tab">
                            ${view.rpt_visitados()}
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cinco" data-toggle="tab" href="#cinco" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-seis" data-toggle="tab" href="#seis" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `
        },
        menu_principal:()=>{
            return `
        
            <br>

            <div class="row">

                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6">

                        <div class="flip-card hand" onclick='document.getElementById("tab-dos").click()'>
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <p class="title">Ventas por Fechas</p>
                                    <p></p>
                                </div>
                                <div class="flip-card-back">
                                    <p class="title">Ventas por fecha y Vendedor</p>
                                </div>
                            </div>
                        </div>
                    
                </div>

                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                        
                        <div class="flip-card hand" onclick='document.getElementById("tab-tres").click()'>
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <p class="title">Ventas por Producto</p>
                                    <p></p>
                                </div>
                                <div class="flip-card-back">
                                    <p class="title">Ventas del Mes por Producto</p>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                        
                        <div class="flip-card hand" onclick='document.getElementById("tab-cuatro").click()'>
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <p class="title">Cobertura de Clientes</p>
                                    <p></p>
                                </div>
                                <div class="flip-card-back">
                                    <p class="title">Cobertura de Clientes</p>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-6">
                        
                        <div class="flip-card hand" id="btnMenuVisitados">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <p class="title">Clientes No Visitados</p>
                                    <p></p>
                                </div>
                                <div class="flip-card-back">
                                    <p class="title">VISITAS</p>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
            `
        },
        menu_footer:()=>{
            return `
                            <button class="btn btn-md btn-naranja" id="btnViewDashboard">
                                <i class="fal fa-chart-pie"></i>Dashboard
                            </button>
                            <button class="btn btn-md btn-naranja" id="btnViewEmpleados">
                                <i class="fal fa-user"></i>Usuarios
                            </button>
                            <button class="btn btn-md btn-naranja" id="btnViewClientes">
                                <i class="fal fa-users"></i>Clientes
                            </button>
                            <button class="btn btn-md btn-naranja" id="btnViewProductos">
                                <i class="fal fa-box"></i>Productos
                            </button>
                            <button class="btn btn-md btn-naranja" id="btnViewCobertura">
                                <i class="fal fa-map"></i>Cobertura Rutas
                            </button>
                            
            `
        },
        rpt_fechas:()=>{
            return `
            <div class="row">
                <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div class="card card-rounded shadow col-12">
                        <div class="card-body p-2">
                           
                                <div class="table-responsive">
                                    
                                    <h5 class="negrita text-naranja text-right" id="lbTotalFechas">Q 0.00</h5>

                                    <table class="table table-hover h-full">
                                        <thead class="bg-naranja text-white">
                                            <tr>
                                                <th>FECHA</th>
                                                <th>VENDEDOR</th>
                                                <th>COSTO</th>
                                                <th>IMPORTE</th>
                                                <th>UTILIDAD</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tblDataFechas">
                                           
                                        </tbody>
                                    </table>
                                </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div class="card card-rounded shadow col-12">
                        <div class="card-body p-2">
                           
                                <div class="table-responsive">
                                    
                                    <h5 class="negrita text-naranja text-right">Ventas por Vendedor del Mes</h5>

                                    <table class="table table-hover h-full">
                                        <thead class="bg-naranja text-white">
                                            <tr>
                                                <th>VENDEDOR</th>
                                                <th>COSTO</th>
                                                <th>IMPORTE</th>
                                                <th>UTILIDAD</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tblDataVendedores">
                                           
                                        </tbody>
                                    </table>
                                </div>

                        </div>
                    </div>
                </div>
            </div>

                    

                    <button class="btn btn-secondary btn-xl btn-circle btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                        <i class="fal fa-arrow-left"></i>
                    </button>
            `

        },
        rpt_productos:()=>{
            return `
                    <div class="card card-rounded shadow col-12">
                        <div class="card-body p-2">
                           
                                <div class="table-responsive">
                                    <table class="table table-hover h-full">

                                        <h5 class="negrita text-verde text-right" id="lbTotalProductos">Q 0.00</h5>
                                        
                                        <thead class="bg-verde text-white">
                                            <tr>
                                                <th>PRODUCTO</th>
                                                <th>CANTIDAD</th>
                                                <th>COSTO</th>
                                                <th>IMPORTE</th>
                                                <th>UTILIDAD</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tblDataProductos">
                                           
                                        </tbody>
                                    </table>
                                </div>

                        </div>
                    </div>

                    <button class="btn btn-secondary btn-xl btn-circle btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                        <i class="fal fa-arrow-left"></i>
                    </button>
            `
        },
        rpt_clientes:()=>{
            return `
                <div class="row">
                    <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    
                        <div class="card card-rounded shadow col-12">
                            <div class="card-body p-2">
                            
                                    <div class="table-responsive">
                                        <table class="table table-hover h-full">

                                            <h5 class="negrita text-secondary text-right" id="lbTotalClientes">Q 0.00</h5>
                                            
                                            <thead class="bg-secondary text-white">
                                                <tr>
                                                    <th>CLIENTE</th>
                                                    <th>COSTO</th>
                                                    <th>IMPORTE</th>
                                                    <th>UTILIDAD</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tblDataClientes">
                                            
                                            </tbody>
                                        </table>
                                    </div>

                            </div>
                        </div>
                    
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                        <div class="card card-rounded shadow col-12">
                            <div class="card-body p-2">
                                <div class="col-12" id="rootMapa">
                            
                                  

                            </div>
                        </div>
                    </div>
                </div>
                    

                    <button class="btn btn-secondary btn-xl btn-circle btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                        <i class="fal fa-arrow-left"></i>
                    </button>
            `
        },
        rpt_garrafones:()=>{
            return `
                <div class="row">
                    <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    
                        <div class="card card-rounded shadow col-12">
                            <div class="card-body p-2">
                            
                                    <div class="table-responsive">
                                        <table class="table table-hover h-full">

                                            <h5 class="negrita text-secondary text-right" id="lbTotalClientes">Q 0.00</h5>
                                            
                                            <thead class="bg-secondary text-white">
                                                <tr>
                                                    <th>CLIENTE</th>
                                                    <th>COSTO</th>
                                                    <th>IMPORTE</th>
                                                    <th>UTILIDAD</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tblDataClientes">
                                            
                                            </tbody>
                                        </table>
                                    </div>

                            </div>
                        </div>
                    
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                        <div class="card card-rounded shadow col-12">
                            <div class="card-body p-2">
                                <div class="col-12" id="rootMapa">
                            
                                  

                            </div>
                        </div>
                    </div>
                </div>
                    

                    <button class="btn btn-secondary btn-xl btn-circle btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                        <i class="fal fa-arrow-left"></i>
                    </button>
            `
        },
        rpt_visitados:()=>{
            return `
                <div class="card card-rounded shadow col-12">
                    <div class="card-body p-4">

                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                
                                <div class="form-group">
                                    <label>Ruta</label>
                                    <select class="form-control negrita" id="cmbVisitaRuta">
                                        <option value="LUNES">LUNES</option>
                                                <option value="MARTES">MARTES</option>
                                                <option value="MIERCOLES">MIERCOLES</option>
                                                <option value="JUEVES">JUEVES</option>
                                                <option value="VIERNES">VIERNES</option>
                                                <option value="SABADO">SABADO</option>
                                                <option value="DOMINGO">DOMINGO</option>
                                    </select>
                                </div>

                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label>Fecha</label>
                                    <input type="date" class="form-control negrita" id="txtVisitaFecha"> 
                                </div>
                            </div>
                            
                        </div>

                
                    </div>
                </div>

                <br>
                
                <div class="card card-rounded shadow col-12">
                    <div class="card-body p-4">
                        
                        <div class="table-responsive">
                            
                            <div class="row">
                                <div class="col-6">
                                    <h3 class="negrita text-danger">Clientes No Visitados</h3>
                                </div>
                                <div class="col-6">
                                
                                    <h5 class="negrita text-info" id="lbVisitadosConteo"></h5>
    
                                
                                </div>
                            </div>

                            
                            <table class="table table-bordered col-12 h-full" id="tblVisitados">
                                <thead class="bg-secondary text-white">
                                    <tr>
                                        <td>RUTERO</td>
                                        <td>CLIENTE</td>
                                        <td>DIRECCION</td>
                                        <td>TELEFONO</td>
                                    </tr>
                                </thead>
                                <tbody id="tblDataVisitados">
                                </tbody>
                            </table>
                        
                        </div>


                
                    </div>
                </div>

                <button class="btn btn-secondary btn-xl btn-circle btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                    <i class="fal fa-arrow-left"></i>
                </button>
            `
        }
    }

    root.innerHTML = view.body();
    document.getElementById("rootFooter").innerHTML = view.menu_footer();

};


function addListeners(){

        F.slideAnimationTabs();

        let f = new Date();
        document.getElementById('cmbMes').innerHTML = F.ComboMeses();
        document.getElementById('cmbAnio').innerHTML = F.ComboAnio();

        document.getElementById('cmbMes').value = f.getUTCMonth()+1;
        document.getElementById('cmbAnio').value = f.getFullYear();

        document.getElementById('cmbMes').addEventListener('change',()=>{
            get_tbl_fechas();
            get_tbl_Vendedores();

            get_tbl_productos();
            get_tbl_clientes();
        });

        document.getElementById('cmbAnio').addEventListener('change',()=>{
            get_tbl_fechas();
            get_tbl_Vendedores();

            get_tbl_productos();
            get_tbl_clientes();
        });


        let btnViewVentas = document.getElementById('btnViewDashboard');
        btnViewVentas.addEventListener('click', () => {
            Navegar.dashboard_gerencia();
        });

        let btnViewClientes = document.getElementById('btnViewClientes');
        btnViewClientes.addEventListener('click', () => {
            Navegar.clientes();
        });

        let btnViewEmpleados = document.getElementById('btnViewEmpleados');
        btnViewEmpleados.addEventListener('click', () => {
            Navegar.gerencia();
        });

        let btnViewProductos = document.getElementById('btnViewProductos');
        btnViewProductos.addEventListener('click', () => {
            Navegar.productos();
        });

        let btnViewCobertura = document.getElementById('btnViewCobertura');
        btnViewCobertura.addEventListener('click',()=>{
            Navegar.cobertura();
        })


        get_tbl_fechas();
        get_tbl_Vendedores();

        get_tbl_productos();


        get_tbl_clientes();



        document.getElementById('txtVisitaFecha').value = F.getFecha();

        document.getElementById('txtVisitaFecha').addEventListener('change',()=>{
            rpt_tbl_visitados();
        });


        document.getElementById('btnMenuVisitados').addEventListener('click',()=>{

            document.getElementById("tab-seis").click();

            rpt_tbl_visitados();

        });



        document.getElementById('btnMenuVisitados').addEventListener('change',()=>{
            rpt_tbl_visitados();
        });

};

function initView(){

    getView();
    addListeners();

};



//reporte visitados

function get_data_visitados(visita,fecha){

    return new Promise((resolve,reject)=>{

                axios.post('/rpt_ventas_visitados', 
                    {
                        visita:visita,
                        fecha:fecha
                    }
                ).then((response) => {
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }, (error) => {
                    reject();
                });

    })


};

function rpt_tbl_visitados(){


    let visita = document.getElementById('cmbVisitaRuta').value;
    let fecha = F.devuelveFecha('txtVisitaFecha');

    let container = document.getElementById('tblDataVisitados');
    container.innerHTML = GlobalLoader;

    let contador = 0;

    get_data_visitados(visita,fecha)
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{
            contador +=1;
            str += `
            <tr>
                <td>${r.RUTERO}</td>
                <td>${r.TIPONEGOCIO} - ${r.NOMCLIE}</td>
                <td>${r.DIRCLIE}
                    <br>
                    <small>${r.REFERENCIA}</small>
                </td>
                <td>${r.TELEFONO}</td>
            </tr>
            `
        })

        container.innerHTML = str;
        document.getElementById('lbVisitadosConteo').innerText = `Total: ${contador}`;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos';
        document.getElementById('lbVisitadosConteo').innerText = '';
    })





};


//reporte vistados



//reporte de ventas por fecha y vendedor

function get_data_fechas(mes,anio){

    return new Promise((resolve,reject)=>{

                axios.post('/rpt_ventas_fechas', 
                    {
                        mes:mes,
                        anio:anio
                    }
                ).then((response) => {
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }, (error) => {
                    reject();
                });

    })


};

function get_tbl_fechas(){

    let container = document.getElementById('tblDataFechas');
    container.innerHTML = GlobalLoader;

    let mes = document.getElementById('cmbMes').value;
    let anio = document.getElementById('cmbAnio').value;


    get_data_fechas(mes,anio)
    .then((data)=>{
        let str = '';
        let total = 0;
        data.recordset.map((r)=>{
            let utilidadQ = (Number(r.IMPORTE) - Number(r.COSTO))
            let porc = (Number(utilidadQ) / Number(r.COSTO)) * 100;
            total += Number(r.IMPORTE);
            str += `
                <tr>
                    <td>${F.convertDateNormal(r.FECHA)}</td>
                    <td>${r.NOMEMP}</td>
                    <td>${F.setMoneda(r.COSTO,'Q')}</td>
                    <td>${F.setMoneda(r.IMPORTE,'Q')}</td>
                    <td>${F.setMoneda(utilidadQ,'Q')} (<small class="text-danger">${F.setMoneda(porc,'')}%</small>)</td>
                </tr>
            `
        })
        document.getElementById('lbTotalFechas').textContent = F.setMoneda(total,'Q')
        container.innerHTML = str;
    })
    .catch(()=>{
        document.getElementById('lbTotalFechas').textContent = '--.--'
        container.innerHTML ='No se cargaron datos...'
    })

};

function get_data_vendedores(mes,anio){

    return new Promise((resolve,reject)=>{

                axios.post('/rpt_ventas_vendedores', 
                    {
                        mes:mes,
                        anio:anio
                    }
                ).then((response) => {
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }, (error) => {
                    reject();
                });

    })


};

function get_tbl_Vendedores(){

    let container = document.getElementById('tblDataVendedores');
    container.innerHTML = GlobalLoader;

    let mes = document.getElementById('cmbMes').value;
    let anio = document.getElementById('cmbAnio').value;


    get_data_vendedores(mes,anio)
    .then((data)=>{
        let str = '';
        let total = 0;
        data.recordset.map((r)=>{
            let utilidadQ = (Number(r.IMPORTE) - Number(r.COSTO))
            let porc = (Number(utilidadQ) / Number(r.COSTO)) * 100;
            total += Number(r.IMPORTE);
            str += `
                <tr>
                    <td>${r.NOMEMP}</td>
                    <td>${F.setMoneda(r.COSTO,'Q')}</td>
                    <td>${F.setMoneda(r.IMPORTE,'Q')}</td>
                    <td>${F.setMoneda(utilidadQ,'Q')} (<small class="text-danger">${F.setMoneda(porc,'')}%</small>)</td>
                </tr>
            `
        })
        //document.getElementById('lbTotalFechas').textContent = F.setMoneda(total,'Q')
        container.innerHTML = str;
    })
    .catch(()=>{
        //document.getElementById('lbTotalFechas').textContent = '--.--'
        container.innerHTML ='No se cargaron datos...'
    })

};



//reporte de ventas por producto

function get_data_productos(mes,anio){

    return new Promise((resolve,reject)=>{

                axios.post('/rpt_ventas_productos', 
                    {
                        mes:mes,
                        anio:anio
                    }
                ).then((response) => {
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }, (error) => {
                    reject();
                });

    })


};

function get_tbl_productos(){

    let container = document.getElementById('tblDataProductos');
    container.innerHTML = GlobalLoader;

    let mes = document.getElementById('cmbMes').value;
    let anio = document.getElementById('cmbAnio').value;


    get_data_productos(mes,anio)
    .then((data)=>{
        let str = '';
        let total = 0;
        data.recordset.map((r)=>{
            let utilidadQ = (Number(r.IMPORTE) - Number(r.COSTO))
            let porc = (Number(utilidadQ) / Number(r.COSTO)) * 100;
            total += Number(r.IMPORTE);
            str += `
                <tr>
                    <td>${r.DESPROD}</td>
                    <td>${r.TOTALUNIDADES}</td>
                    <td>${F.setMoneda(r.COSTO,'Q')}</td>
                    <td>${F.setMoneda(r.IMPORTE,'Q')}</td>
                    <td>${F.setMoneda(utilidadQ,'Q')} (<small class="text-danger">${F.setMoneda(porc,'')}%</small>)</td>
                </tr>
            `
        })
        container.innerHTML = str;
        document.getElementById('lbTotalProductos').textContent = F.setMoneda(total,'Q');
    })
    .catch(()=>{
        document.getElementById('lbTotalProductos').textContent = '--.--'
        container.innerHTML ='No se cargaron datos...'
    })

};



//reporte de ventas por clientes

function get_data_clientes(mes,anio){

    return new Promise((resolve,reject)=>{

                axios.post('/rpt_ventas_clientes', 
                    {
                        mes:mes,
                        anio:anio
                    }
                ).then((response) => {
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }, (error) => {
                    reject();
                });

    })


};

function get_tbl_clientes(){

    let container = document.getElementById('tblDataClientes');
    container.innerHTML = GlobalLoader;

    let mes = document.getElementById('cmbMes').value;
    let anio = document.getElementById('cmbAnio').value;


    // carga del mapa
    let containerM = document.getElementById('rootMapa');
    containerM.innerHTML = GlobalLoader;
    
    let tbl = `<div class="mapcontainer4" id="mapcontainer"></div>`;        
    
    containerM.innerHTML = tbl;
    
    let mapcargado = 0;
    var map;
    map = Lmap(14.527709,-91.6721049);



    get_data_clientes(mes,anio)
    .then((data)=>{
        let str = '';
        let total = 0;
        data.recordset.map((r)=>{

                let utilidadQ = (Number(r.IMPORTE) - Number(r.COSTO))
                let porc = (Number(utilidadQ) / Number(r.COSTO)) * 100;
                total += Number(r.IMPORTE);
                str += `
                    <tr>
                        <td>${r.NOMCLIE}</td>
                        <td>${F.setMoneda(r.COSTO,'Q')}</td>
                        <td>${F.setMoneda(r.IMPORTE,'Q')}</td>
                        <td>${F.setMoneda(utilidadQ,'Q')} (<small class="text-danger">${F.setMoneda(porc,'')}%</small>)</td>
                    </tr>
                `

                L.marker([r.LATITUD, r.LONGITUD])
                .addTo(map)
                .bindPopup(`${r.NOMCLIE} <br><small>${r.DIRECCION}-Tel:${r.TELEFONO}</small>`, {closeOnClick: true, autoClose: true})   
                .on('click', function(e){
                    //console.log(e.sourceTarget._leaflet_id);
                })

        })
        container.innerHTML = str;
        document.getElementById('lbTotalClientes').textContent = F.setMoneda(total,'Q');

         //RE-AJUSTA EL MAPA A LA PANTALLA
         setTimeout(function () {
            try {
                map.invalidateSize();    
            } catch (error) {
                
            }
        }, 500);
    })
    .catch(()=>{
        document.getElementById('lbTotalClientes').textContent = '--.--'
        container.innerHTML ='No se cargaron datos...'
    })


  


};




// mapa
function showUbicacion(){
    return new Promise((resolve,reject)=>{
        try {
            navigator.geolocation.getCurrentPosition(function (location) {
                console.log(location);
                resolve(location);
            })
        } catch (error) {
            reject();
        }
    })
};

function Lmap(lat,long){
    //INICIALIZACION DEL MAPA            
      var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
      map = L.map('mapcontainer').setView([lat, long], 11).addLayer(osm);

      var userIcon = L.icon({
        iconUrl: '../img/userIcon.png',
        shadowUrl: '../img/marker-shadow.png',
    
        iconSize:     [30, 45], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

      L.marker([lat, long],{icon:userIcon})
        .addTo(map)
        .bindPopup('Bodega', {closeOnClick: true, autoClose: false})   
        .openPopup()
                
      return map;
};

function cargarMapaClientes(){
    //carga la ubicación actual y general el mapa
    showUbicacion()
    .then(async(location)=>{
            let lat = location.coords.latitude.toString();
            let longg = location.coords.longitude.toString();
            //Number(lat),Number(longg));
            await apigen.clientesVendedorMapa(GlobalCodSucursal,GlobalCodUsuario,cmbDiaVisita.value,'tblClientes',Number(lat),Number(longg))
            
    });

};






