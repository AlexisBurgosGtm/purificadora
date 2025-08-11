
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.vista_modal_editar_clientes() + view.modal_historial_cliente()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
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
                    </ul>
                    
                </div>
               
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    <div class="row">
                        <div class="col-md-6 d-flex align-items-center mb-3">
                            <h1 style="font-size:280%" class="negrita text-left">Clientes</h1>
                        </div>
                        <div class="cold-md-6">
                            
                        </div>
                    </div>
                    <div class="col-12">

                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Escriba para Buscar un cliente</label>
                                    <input type="text" 
                                    class="form-control negrita text-naranja" 
                                    oninput="F.FiltrarTabla('tblClientes','txtBuscar')" 
                                    id="txtBuscar"
                                    placeholder="Escriba para buscar...">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Filtrar por</label>
                                    <div class="input-group">
                                        <select class="form-control negrita text-danger" id="cmbFiltrar">
                                            <option value="TODOS">TODOS</option>
                                            <option value="GARRAFON">CON GARRAFON</option>
                                            <option value="SIN">SIN GARRAFON</option>
                                        </select>
                                        <button class="btn btn-success btn-md hand shadow" 
                                            onclick="F.exportTableToExcel('tblClientes','Catalogo_clientes_general')">
                                                <i class="fal fa-export"></i>Exportar xls
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <h4 class="negrita text-info" id="lbTotalClientes">0</h4>
                                <h4 class="negrita text-danger" id="lbTotalGarrafones">0</h4>
                            </div>
                        </div>
                        
                        <br>
                        

                        <div class="table-responsive">

                            <table class="table table-hover col-12" id="tblClientes">
                                <thead class="bg-naranja text-white">
                                    <tr>
                                        <td>TIPO</td>
                                        <td>NOMBRE</td>
                                        <td>DIRECCION</td>
                                        <td>TELEFONO</td>
                                        <td>REFERENCIA</td>
                                        <td>VISITA</td>
                                        <td>RUTA</td>
                                        <td>GARRAFONES</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblDataClientesCatalogo">
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            `
        },
        vista_modal_editar_clientes:()=>{
            return `
 
                <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_editar_cliente">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        
                                       <h1 style="font-size:280%" class="negrita text-left">Editar CLiente</h1>

                                        <div class="form-group">
                                            <label>Tipo:</label>
                                            <select class="form-control negrita text-danger" id="cmbTipoClienteE">
                                                <option value="CASA_PARTICULAR">CASA PARTICULAR</option>
                                                <option value="TIENDA">TIENDA</option>
                                                <option value="EMPRESARIAL">EMPRESARIAL</option>
                                                <option vaue="CENTROS_DEPORTIVOS">CENTROS DEPORTIVOS</option>
                                                <option value="CENTROS_EDUCATIVOS">CENTROS EDUCATIVOS</option>
                                            </select>
                                        </div>

                                       <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombreClienteE"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Direccion:</label>
                                            <input type="text" class="form-control" id="txtDireccionClienteE"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Telefono:</label>
                                            <input type="text" class="form-control" id="txtTelefonoClienteE"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Referencia:</label>
                                            <input type="text" class="form-control" id="txtReferenciaClienteE"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Dia Visita:</label>
                                            <select class="form-control negrita text-danger" id="cmbVisitaClienteE">
                                                <option value="LUNES">LUNES</option>
                                                <option value="MARTES">MARTES</option>
                                                <option value="MIERCOLES">MIERCOLES</option>
                                                <option value="JUEVES">JUEVES</option>
                                                <option value="VIERNES">VIERNES</option>
                                                <option value="SABADO">SABADO</option>
                                                <option value="DOMINGO">DOMINGO</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label>Ruta</label>
                                            <select class="form-control negrita text-danger" id="cmbRutasVendedorE">
                                                <option value="RUTA A">RUTA A</option>
                                                <option value="RUTA B">RUTA B</option>
                                                <option value="RUTA C">RUTA C</option>
                                                <option value="RUTA D">RUTA D</option>
                                                <option value="RUTA E">RUTA E</option>
                                                <option value="RUTA F">RUTA F</option>
                                                <option value="RUTA G">RUTA G</option>
                                            <select>
                                        </div>

                                        <div class="form-group">
                                            <label>Garrafones prestados:</label>
                                            <input type="number" class="form-control border-danger" id="txtGarrafonesClienteE" />
                                        </div>


                                    </div>
                                </div>
                            
                                
                                
                                
                            </div>
                            <div class="modal-footer">
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-circle btn-xl btn-secondary hand shadow" data-dismiss="modal">
                                            <i class="fal fa-times"></i>
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-circle btn-xl btn-info hand shadow" id="btnEditarCliente">
                                            <i class="fal fa-save"></i>
                                        </button>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>            

            `;

        },
        modal_historial_cliente:()=>{
            return `
 
                <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_historial">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        
                                       <h1 style="font-size:280%" class="negrita text-left">Historial de Compras del Cliente</h1>
                                       <h3 class="negrita text-naranja text-left" id="lbNomclie"></h3>
                                       

                                       <div class="table-responsive">

                                            <table class="table table-responsive h-full">
                                                <thead class="bg-secondary text-white">
                                                    <tr>
                                                        <td>FECHA</td>
                                                        <td>F.PAGO</td>
                                                        <td>PRODUCTO</td>
                                                        <td>CANTIDAD</td>
                                                        <td>PRECIO</td>
                                                        <td>IMPORTE</td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblDataHistorial">
                                                </tbody>

                                            </table>
                                       </div>
                                      

                                    </div>
                                </div>
                            
                                
                                
                                
                            </div>
                            <div class="modal-footer">
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-circle btn-xl btn-secondary hand shadow" data-dismiss="modal">
                                            <i class="fal fa-times"></i>
                                        </button>
                                    </div>
                                    <div class="col-6">
                                       
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>            

            `;

        },    
    }

    root.innerHTML = view.body();

};

function addListeners(){

    

    document.getElementById('cmbFiltrar').addEventListener('change',()=>{
        get_catalogo_clientes();
    })

    get_catalogo_clientes();

};

function initView(){

    getView();
    addListeners();

};

function get_catalogo_clientes() {




    let container = document.getElementById('tblDataClientesCatalogo');
    container.innerHTML = GlobalLoader;
    let str = '';

    let tipo = document.getElementById('cmbFiltrar').value;
    let contador = 0;
    let garrafones = 0;

    axios.post('/lista_clientes_general', {
        filtro:'',
        tipo:tipo
    })
    .then((response)=> {
        let data = response.data;
        if(Number(data.rowsAffected[0])>0) {
            data.recordset.map((r)=> {
                contador += 1;
                garrafones += Number(r.GARRAFONES);
                let idBtnEC = `idBtnEC${r.CODCLIE}`;
                str += `
                        <tr>
                            <td>${r.TIPO}
                                <br>
                                <small class="negrita text-danger">Creado: ${F.convertDateNormal(r.FECHA).replace('01/01/2000','-----')}</small>
                            </td>
                            <td>${r.NOMBRE.toUpperCase()}</td>
                            <td>${r.DIRECCION.toUpperCase()}</td>
                            <td>${r.TELEFONO}</td>
                            <td>${r.REFERENCIA.toUpperCase()}</td>
                            <td>${r.VISITA}</td>
                            <td>${r.RUTA}</td>
                            <td>${r.GARRAFONES}</td>
                            <td>
                                   <button class="btn btn-warning btn-circle btn-md hand shadow" 
                                    onclick="get_historial_cliente('${r.CODCLIE}','${r.NOMBRE.toUpperCase()}','${r.DIRECCION.toUpperCase()}')">
                                        <i class="fal fa-list"></i>
                                    </button>

                            </td>
                            <td>
                                   <button class="btn btn-info btn-circle btn-md hand shadow" 
                                    onclick="get_datos_cliente('${r.CODCLIE}','${r.TIPO}','${r.NOMBRE.toUpperCase()}','${r.DIRECCION.toUpperCase()}','${r.TELEFONO}','${r.REFERENCIA.toUpperCase()}','${r.VISITA}','${r.RUTA}','${r.GARRAFONES}')">
                                        <i class="fal fa-edit"></i>
                                    </button>
                            </td>
                            <td>
                                   <button id="${idBtnEC}" class="btn btn-danger btn-circle btn-md hand shadow" 
                                    onclick="eliminar_cliente('${r.CODCLIE}','${r.NOMBRE.toUpperCase()}','${idBtnEC}')">
                                        <i class="fal fa-trash"></i>
                                    </button>
                            </td>

                        </tr>
                `;
            })
            container.innerHTML = str;
            document.getElementById('lbTotalClientes').innerText = `Clientes ${contador}`;
            document.getElementById('lbTotalGarrafones').innerText = `Garrafones ${garrafones}`;
        }else {
            container.innerHTML = 'No hay datos...';
            document.getElementById('lbTotalClientes').innerText = '0';
            document.getElementById('lbTotalGarrafones').innerText = '0';
        }
    }, (error) => {
        container.innerHTML = 'No hay datos...';
        document.getElementById('lbTotalClientes').innerText = '0';
        document.getElementById('lbTotalGarrafones').innerText = '0';
    });
    
}

function update_cliente(codclie,tipo,nombre,direccion,telefono,referencia,visita,ruta,garrafones) {
    return new Promise((resolve, reject) => {

        axios.post('/update_cliente', {
            codclie:codclie,
            tipo:tipo,
            nombre:nombre,
            direccion:direccion,
            telefono:telefono,
            referencia:referencia,
            visita:visita,
            ruta:ruta,
            garrafones:garrafones
        })
        .then((response) => {
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
}

function get_datos_cliente(codclie,tipo,nombre,direccion,telefono,referencia,visita,ruta,garrafones) {

    $("#modal_editar_cliente").modal('show');

    document.getElementById('cmbTipoClienteE').value = tipo;
    document.getElementById('txtNombreClienteE').value = nombre;
    document.getElementById('txtDireccionClienteE').value = direccion;
    document.getElementById('txtTelefonoClienteE').value = telefono;
    document.getElementById('txtReferenciaClienteE').value = referencia;
    document.getElementById('cmbVisitaClienteE').value = visita;
    document.getElementById('cmbRutasVendedorE').value = ruta;
    document.getElementById('txtGarrafonesClienteE').value = garrafones;

    let btnEditarCliente = document.getElementById('btnEditarCliente');
    btnEditarCliente.addEventListener('click', ()=> {
        F.Confirmacion("¿Está seguro que desea editar el cliente?")
        .then((value) => {
            if(value==true) {

                let tipoE = document.getElementById('cmbTipoClienteE').value;
                let nombreE = document.getElementById('txtNombreClienteE').value;
                let direccionE = document.getElementById('txtDireccionClienteE').value;
                let telefonoE = document.getElementById('txtTelefonoClienteE').value;
                let referenciaE = document.getElementById('txtReferenciaClienteE').value;
                let visitaE = document.getElementById('cmbVisitaClienteE').value;
                let rutaE = document.getElementById('cmbRutasVendedorE').value;
                let garrafonesE = document.getElementById('txtGarrafonesClienteE').value;

                btnEditarCliente.disabled = true;
                btnEditarCliente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                update_cliente(codclie,tipoE,nombreE,direccionE,telefonoE,referenciaE,visitaE,rutaE,garrafonesE)
                .then(() => {
                    F.Aviso('Cliente editado exitosamente!!!');
                    get_catalogo_clientes()
                    $("#modal_editar_cliente").modal('hide');
                    limpiar_datos_clientes();

                    btnEditarCliente.disabled = false;
                    btnEditarCliente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch(() => {
                    F.Aviso('No se pudo guardar el cliente');
                    btnEditarCliente.disabled = false;
                    btnEditarCliente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                })
            }
        })
    })
}

function eliminar_cliente(codclie,nomclie,idbtn){

    let btn = document.getElementById(idbtn);

    F.Confirmacion(`¿Está seguro que desea ELIMINAR a este CLIENTE (${nomclie})?`)
    .then((value)=>{
        if(value==true){

            btn.disabled = true;
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;

                axios.post('/delete_cliente', {
                    codclie:codclie
                })
                .then((response) => {
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0) {
                        F.Aviso('Cliente eliminado exitosamente!!');
                        get_catalogo_clientes();
                    }else {
                        F.AvisoError('No se pudo eliminar');
                        btn.disabled = false;
                        btn.innerHTML = `<i class="fal fa-trash"></i>`;

                    }
                }, (error) => {
                    F.AvisoError('No se pudo eliminar');
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fal fa-trash"></i>`;
                });

        }
    })


};


function limpiar_datos_clientes(){
    document.getElementById('cmbTipoClienteE').value = '';
    document.getElementById('txtNombreClienteE').value = '';
    document.getElementById('txtDireccionClienteE').value = '';
    document.getElementById('txtTelefonoClienteE').value = '';
    document.getElementById('txtReferenciaClienteE').value = '';
    document.getElementById('cmbVisitaClienteE').value = '';
    document.getElementById('cmbRutasVendedorE').value = '';
    document.getElementById('txtGarrafonesClienteE').value = '';
}


function get_historial_cliente(codclie,nomclie,direccion){

    
    $("#modal_historial").modal('show');


    document.getElementById('lbNomclie').textContent = nomclie;


    
    let container = document.getElementById('tblDataHistorial');
    container.innerHTML = GlobalLoader;
    let str = '';

    
    axios.post('/lista_clientes_historial', {
        codclie:codclie
    })
    .then((response)=> {
        let data = response.data;
        if(Number(data.rowsAffected[0])>0) {
            data.recordset.map((r)=> {
                
                str += `
                        <tr>
                            <td>${F.convertDateNormal(r.FECHA)}</td>
                            <td>${r.CONCRE}</td>
                            <td>${r.DESPROD}</td>
                            <td>${r.CANTIDAD}</td>
                            <td>${F.setMoneda(r.PRECIO,'Q')}</td>
                            <td>${F.setMoneda(r.TOTALPRECIO,'Q')}</td>
                        </tr>
                `;
            })
            container.innerHTML = str;
        }else {
            container.innerHTML = 'No hay datos...'
        }
    }, (error) => {
        container.innerHTML = 'No hay datos...'
    });
    



};