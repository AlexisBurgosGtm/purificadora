

function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.vista_modal_detalle_pedido()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           ${view.vista_clientes() + view.vista_modal_cliente() + view.vista_modal_editar_cliente_venta()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_nuevo()}
                        </div>
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelleby="home-tab">
                            ${view.vista_pedidos()}
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
                    </ul>
                    
                </div>
               
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow">

                <div class="card-body p-2">
                    
                    <h1>LISTADO DE VENTAS</h1>

                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label class="form-label">Seleccionar fecha</label>
                                <input type="date" class="form-control" id="txtFecha" />
                            </div>
                        </div>
                        <div class="col-sm-6  col-md-8 col-lg-8 col-xl-8">
                        <h1 style="font-size:280%" class="text-right negrita text-danger" id="lbTotalPedidos">Q0.00</h1>
                        <select class="form-control negrita text-danger" id="cmbTipoRpt">
                            <option value="CLIENTE">POR CLIENTE</option>
                            <option value="PRODUCTO">POR PRODUCTO</option>
                        </select>
                        </div>
                    </div>

                    
                    <br>
                  

                
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>NOMBRE</td>
                                    <td>IMPORTE</td>
                                    <td>C</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblPedidos">
                                
                            </tbody>
                            <tfoot>
                                <tr>

                                </tr>
                            </tfoot>
                        </table>
                    </div>
            
                </div>
            </div>
            <button class="btn btn-circle btn-xl btn-success btn-bottom-r hand shadow" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button>
            `
        },
        vista_clientes:()=>{
            return `

             <div class="card card-rounded shadow">
                    <div class="card-body p-2">

                    <div class="row">
                        <div class="col-4">
                            <h1 class="negrita">Listado Clientes</h1>
                        </div>
                        <div class="col-sm-8 col-md-5 col-lg-5 col-xl-5">
                           
                        </div>
                    
                        <div>
                            
                        </div>
                    </div>

                    <br>

                    <div class="form-group">
                        <div class="input-group">
                            <input class="form-control" type="search" placeholder="Buscar Cliente" autocomplete="off" id="txtFiltrar">
                            <button class="btn btn-info btn-sm hand shadow" id="btnBuscarCliente" onclick="get_lista_clientes()">
                                <i class="fal fa-search"></i>
                            </button>
                        </div>
                    </div>

                        <div class="table-responsive col-12">
                            <table class="table table-responsive col-12 h-full">
                                <thead class="bg-naranja text-white">
                                    <tr>
                                        <td>Nombre</td>
                                        <td>Dirección</td>
                                        <td>Grf</td>
                                    </tr>
                                </thead>
                                <tbody id="tblDataClientes">
                                  
                                </tbody> 
                               
                                
                            </table>
                        </div>

                        <br>
                       

                    </div>
             </div>

           

                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" id="btnAtrasClientes">
                    <i class="fal fa-arrow-left"></i>
                </button>

                
                <button class="btn btn-circle btn-xl btn-success btn-bottom-r   hand shadow" id="btnAgregarCliente">
                    <i class="fal fa-plus"></i>
                </button> 
            `;
            

        },
        vista_nuevo:()=>{
            return `
                <div class="card card-rounded shadow">
                    <div class="card-body p-2">

                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <h1>TOMAR PEDIDO</h1>
                        </div>
                        <div class="col-sm-6  col-md-8 col-lg-8 col-xl-8">
                            <h1  style="font-size:280%" class="text-right negrita text-danger"  id="lbTotalVenta">Q0.00</h1>
                        </div>
                    </div>

                    </div>
                </div>


                 <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>DESCRIPCION</td>
                                    <td>CANTIDAD</td>
                                    <td>PRECIO</td>
                                    <td>SUBTOTAL</td>
                                </tr>
                            </thead>
                            <tbody id="tblDataPedidos">
                                
                            </tbody>
                        </table>
                    </div>

                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" id="btnAtrasNuevo">
                    <i class="fal fa-arrow-left"></i>
                </button>

                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-r hand shadow" id="btnSiguienteFinPedido">
                    <i class="fal fa-arrow-right"></i>
                </button>

            `
        },
        vista_pedidos:()=> {
            return `
                <div class="card card-rounded shadow">

                    <div class="card-body p-4">

                        <h3 style="font-size:210%" class="negrita text-danger" id="lbNomclie">Consumidor final</h3>
                        <br>
                        <div class="row">
                            <div class="col-6">
                                <h5>Total pedido</h5>
                                <br>
                                <div class="form-group">
                                    <label>Forma de pago</label>
                                    <select class="form-control negrita text-danger" id="cmbConcre">
                                        <option value="CON">CONTADO</option>
                                        <option value="CRE">CREDITO</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-6">
                                <h1  style="font-size:280%" class="text-right negrita text-danger" id="lbTotalVenta2">Q30.00</h1>
                               
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                            </div>
                                
                        </div>
                    </div>
                </div>
                                
                        <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" id="btnAtrasAgregarPedido">
                            <i class="fal fa-arrow-left"></i>
                        </button>
                        <button class="btn btn-circle btn-xl btn-success btn-bottom-r hand shadow" id="btnGuardarPedido">
                            <i class="fal fa-save"></i>
                        </button>
            `;
        },
        vista_modal_cliente:()=> {
            return `
 
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_nuevo_cliente">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">
                                        
                                        <div class="form-group">
                                            <label>Dia Visita:</label>
                                            <select class="form-control negrita text-danger" id="cmbVisitaCliente">
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
                                            <label>Tipo:</label>
                                            <select class="form-control negrita text-danger" id="cmbTipoCliente">
                                                <option value="CASA_PARTICULAR">CASA PARTICULAR</option>
                                                <option value="TIENDA">TIENDA</option>
                                                <option value="EMPRESARIAL">EMPRESARIAL</option>
                                                <option vaue="CENTROS_DEPORTIVOS">CENTROS DEPORTIVOS</option>
                                                <option value="CENTROS_EDUCATIVOS">CENTROS EDUCATIVOS</option>
                                            </select>
                                        </div>


                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombreCliente"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Direccion:</label>
                                            <input type="text" class="form-control" id="txtDireccionCliente"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Telefono:</label>
                                            <input type="text" class="form-control" id="txtTelefonoCliente"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Referencia:</label>
                                            <input type="text" class="form-control" id="txtReferenciaCliente"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Garrafones prestados:</label>
                                            <input type="number" class="form-control border-danger" id="txtGarrafonesCliente" />
                                        </div>


                                    </div>
                                </div>
                            
                                
                                
                                
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarCliente">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>            

            `;
        },
        vista_modal_editar_cliente_venta:()=> {
            return `
 
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_editar_cliente_venta">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">
                                        
                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombreClienteE"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Referencia:</label>
                                            <input type="text" class="form-control" id="txtReferenciaClienteE"/>
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
                                            <label>Garrafones prestados:</label>
                                            <input type="number" class="form-control border-danger" id="txtGarrafonesClienteE" />
                                        </div>


                                    </div>
                                </div>
                            
                                
                                
                                
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnEditarClienteVenta">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>            

            `;
        },
        vista_modal_detalle_pedido:() => {
            return `
 
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_detalle_pedido">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4 col-12">
                                    <div class="card-body">
                                        
                                        <h3  class="negrita text-danger" id="lbNomcliePedido"></h3>

                                        <div class="table-responsive">
                                            <table class="table table-responsive table-hover">
                                                <thead class="bg-info text-white">
                                                    <tr>
                                                        <td>PRODUCTO</td>
                                                        <td>CANTIDAD</td>
                                                        <td>PRECIO</td>
                                                        <td>IMPORTE</td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblDataDetallePedido">

                                                </tbody>
                                            </table>
                                        </div>
                                        

                                    </div>
                                </div>
                            
                                
                                                            
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                </button>
                                
                            </div>
                        </div>
                    </div>>
                </div>            

            `;
        }

    }

    root.innerHTML = view.body();

};

function addListeners(){

    F.slideAnimationTabs();

    
    document.getElementById('txtFecha').value = F.getFecha();

    document.getElementById('btnNuevo').addEventListener('click',()=>{
        document.getElementById('tab-dos').click();
        GlobalSelectedCodclie = 0;
        GlobalSelectedNomclie = '';
    })

    document.getElementById('txtFiltrar').addEventListener('keyup',(e)=>{

        if (e.key === "Enter") {
            document.getElementById("btnBuscarCliente").click();
        }
        if (e.keycode === 13) {
            document.getElementById("btnBuscarCliente").click();
        }

    })

    document.getElementById('btnAtrasClientes').addEventListener('click', ()=> {
        document.getElementById('tab-uno').click();
    })

    document.getElementById('btnAtrasNuevo').addEventListener('click',()=>{
        document.getElementById('tab-dos').click();
    }) 

    document.getElementById('btnSiguienteFinPedido').addEventListener('click', () => {

        db_select_temp_ventas()
        .then((data)=>{
            let conteo =0;
            data.map((r)=>{
                conteo+=Number(r.CANTIDAD);
            })
            if(Number(conteo)==0){
                F.AvisoError("Seleccione al menos un producto");
            }else{
                document.getElementById('tab-cuatro').click();
            }
        })
       
    })

    document.getElementById('btnAtrasAgregarPedido').addEventListener('click', () => {
        document.getElementById('tab-tres').click();
       
    })

    document.getElementById('btnAgregarCliente').addEventListener('click', () => {
        $("#modal_nuevo_cliente").modal('show')
    })


    let btnGuardarCliente = document.getElementById('btnGuardarCliente');
    btnGuardarCliente.addEventListener('click',()=>{



        F.Confirmacion("¿Está seguro que desea Guardar este nuevo Cliente?")
        .then((value)=>{
            if(value==true){


                F.ObtenerUbicacion()
                .then((location)=>{

                        let tipo = document.getElementById('cmbTipoCliente').value;
                        let nombre = F.limpiarTexto(document.getElementById('txtNombreCliente').value) || '';
                        let direccion = F.limpiarTexto(document.getElementById('txtDireccionCliente').value) || '';
                        let telefono = document.getElementById('txtTelefonoCliente').value || '';
                        let referencia = F.limpiarTexto(document.getElementById('txtReferenciaCliente').value);
                        let visita = document.getElementById('cmbVisitaCliente').value;
                        let garrafones = document.getElementById('txtGarrafonesCliente').value|| '0';
                        let latitud = location.latitude;
                        let longitud = location.longitude;


                        btnGuardarCliente.disabled = true;
                        btnGuardarCliente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                        insert_cliente(tipo,nombre,direccion,telefono,referencia,visita,latitud,longitud,garrafones)
                        .then(()=>{
                            
                            F.Aviso('Cliente guardado exitosamente!!');
                            
                            document.getElementById('txtFiltrar').value = nombre;
                            get_lista_clientes();

                            $("#modal_nuevo_cliente").modal('hide');
                            limpiar_datos_cliente();

                            btnGuardarCliente.disabled = false;
                            btnGuardarCliente.innerHTML = `<i class="fal fa-save"></i>`;

                        })
                        .catch(()=>{
                            F.AvisoError('No se pudo guardar el cliente');
                            btnGuardarCliente.disabled = false;
                            btnGuardarCliente.innerHTML = `<i class="fal fa-save"></i>`;
                        })  
                    
                })
                .catch(()=>{
                    F.AvisoError('No puedes guardar un cliente sin ubicacion GPS')
                })

                

            }
        })


    })



    let btnGuardarPedido = document.getElementById('btnGuardarPedido');
    btnGuardarPedido.addEventListener('click',()=>{

            
           


            F.Confirmacion("¿Está seguro que desea Guardar esta Venta?")
            .then((value)=>{
                if(value==true){


                    btnGuardarPedido.disabled = true;
                    btnGuardarPedido.innerHTML = `<i class="fal fa-save fa-spin">`;

                    send_pedido()
                    .then(()=>{
                        F.Aviso('Pedido guardado exitosamente!!');

                        btnGuardarPedido.disabled = false;
                        btnGuardarPedido.innerHTML = `<i class="fal fa-save">`;

                        document.getElementById('txtFiltrar').value = '';
                        document.getElementById('tab-uno').click();
                        get_tbl_pedidos();

                    })
                    .catch(()=>{
                        F.AvisoError("No se pudo guardar");
                        
                        btnGuardarPedido.disabled = false;
                        btnGuardarPedido.innerHTML = `<i class="fal fa-save">`;
                    })


                }
            })


    })

    
    get_tbl_pedidos();

    document.getElementById('txtFecha').addEventListener('change',()=>{
        getReporte();
    })

    document.getElementById('cmbTipoRpt').addEventListener('change',()=>{
        getReporte();
    })

    

};

function getReporte(){

    let tipo = document.getElementById('cmbTipoRpt').value;

        switch (tipo) {
            case 'CLIENTE':
                get_tbl_pedidos();
                break;
        
            case 'PRODUCTO':
                get_tbl_pedidos_productos();
                break;
        }

};


function send_pedido(){

    return new Promise((resolve,reject)=>{

        db_select_temp_ventas()
        .then((data)=>{


                axios.post('/insert_pedido', 
                    {
                        codclie: GlobalSelectedCodclie,
                        nomclie: GlobalSelectedNomclie,
                        fecha:F.getFecha(),
                        codemp:GlobalCodemp,
                        concre:document.getElementById('cmbConcre').value,
                        tblProductos: JSON.stringify(data)
                    }
                ).then((response) => {
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0) {
                        resolve();
                    } else {
                        reject();
                    }
                }, (error) => {
                    reject();
                });


        })

    })




}



function limpiar_datos_cliente(){

    document.getElementById('txtNombreCliente').value = '';
    document.getElementById('txtDireccionCliente').value = '';
    document.getElementById('txtTelefonoCliente').value = '';
    document.getElementById('txtReferenciaCliente').value = '';
    document.getElementById('txtGarrafonesCliente').value = '';


}


function get_lista_clientes(){

    let filtro = document.getElementById('txtFiltrar').value;
    F.limpiarTexto(filtro) || '';
    if(filtro==''){F.AvisoError('Escriba un codigo o nombre para buscar');return;}

    let container = document.getElementById('tblDataClientes');
    container.innerHTML = GlobalLoader;
    let str = '';


    axios.post('/lista_clientes',{
        filtro:filtro, ruta:GlobalRuta
    })
    .then((response) => {
        let data = response.data;
        if(Number(data.rowsAffected[0])>0){
            data.recordset.map((r)=>{
                str += `
                                <tr class="hand" >
                                    <td>${r.NOMBRE}
                                        <br>
                                        <small class="negrita text-info">Tel:${r.TELEFONO}</small>
                                        <br>
                                         <button class="btn btn-info btn-sm hand shadow" onclick="go_to_edit('${r.CODCLIE}','${r.NOMBRE}','${r.REFERENCIA}','${r.DIRECCION}','${r.TELEFONO}','${r.GARRAFONES}')">
                                            <i class="fal fa-edit"></i>Editar
                                        </button>
                                    </td>
                                    <td>${r.DIRECCION}
                                        <br>
                                        <small class="negrita text-secondary">${r.REFERENCIA}</small>
                                        <br>
                                        <button class="btn btn-success btn-sm hand shadow" onclick="go_to_pedido('${r.CODCLIE}','${r.NOMBRE}')">
                                            <i class="fal fa-plus"></i>Pedido
                                        </button>
                                    </td>
                                    <td class="negrita text-danger">${r.GARRAFONES}</td>
                                </tr>
                `
            })

            container.innerHTML = str;
        }else{
            container.innerHTML = 'No hay datos...'
        }             
    }, (error) => {
        container.innerHTML = 'No hay datos...'
    });


    /**
     str += `
                                <tr class="hand" >
                                    <td>${r.NOMBRE}</td>
                                    <td>${r.DIRECCION}</td>
                                    <td>${r.TELEFONO}</td>
                                    <td>${r.GARRAFONES}</td>
                                    <td>
                                        <button class="btn btn-info btn-circle btn-md hand shadow" onclick="go_to_edit('${r.CODCLIE}','${r.NOMBRE}','${r.DIRECCION}','${r.TELEFONO}','${r.GARRAFONES}')">
                                            <i class="fal fa-edit"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-secondary btn-circle btn-lg hand shadow" onclick="go_to_pedido('${r.CODCLIE}','${r.NOMBRE}')">
                                            <i class="fal fa-arrow-right"></i>
                                        </button>
                                    </td>
                                </tr>
                `
     */

}



function get_lista_productos_pedido() {

    let container = document.getElementById('tblDataPedidos');
    container.innerHTML = GlobalLoader;

    //primero elimina la lista de tempventas
    db_delete_temp_ventas()
    .then(()=>{
        //luego carga la lista de productos desde la api 
        axios.post('/lista_producto', {
            filtro: ''
        }).then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0) {

                data.recordset.map((r)=>{
                    //las inserta en la tabla temp de indexedDb
                    db_load_productos(r)
                })
                
                create_tbl_pedido();

            } else {
                container.innerHTML = 'No hay datos...';
            }
        }, (error) => {
            container.innerHTML = 'No hay datos...';
        });

    })

       
   
}


function create_tbl_pedido(){

    let container = document.getElementById('tblDataPedidos');
    let str = '';

   

    db_select_temp_ventas()
    .then((datos)=>{

    
        datos.map((r)=>{
            let idProducto = r.CODPROD;
           
            str += `
            <tr>
                <td>${r.DESPROD}</td>
                <td>
                    <button class="btn btn-outline-danger btn-md rounded-circle" onclick="cambiarCantidad('${r.CODPROD}', -1,'${r.PRECIO}')">-</button>
                        <span class="h1 text-secondary negrita text-center" id="cantidad-${idProducto}">${r.CANTIDAD}</span>
                    <button class="btn btn-outline-success btn-md rounded-circle" onclick="cambiarCantidad('${idProducto}', 1,'${r.PRECIO}')">+</button>
                </td>
                <td>${F.setMoneda(r.PRECIO,'Q')}</td>
                <td id="subtotal-${idProducto}">${F.setMoneda((Number(r.CANTIDAD) * Number(r.PRECIO)), 'Q')}</td>
            </tr>                
            `;

        })

        container.innerHTML = str;

    })

}

function cambiarCantidad(codprod, cambio, precio) {
    let elementoCantidad = document.getElementById(`cantidad-${codprod}`);
    let elementoSubtotal = document.getElementById(`subtotal-${codprod}`);
    let cantidadActual = parseInt(elementoCantidad.textContent);
    let nuevaCantidad = Math.max(0, cantidadActual + cambio);
    

    elementoCantidad.textContent = nuevaCantidad;

    db_update_cantidad(codprod,nuevaCantidad);

    let subtotal = nuevaCantidad * Number(precio);
    elementoSubtotal.textContent = F.setMoneda(subtotal, 'Q');

    actualizarTotal();

}

function actualizarTotal() {

    db_select_temp_ventas()
    .then((datos)=>{
        let varTotal = 0;
        datos.map((r)=>{
            let subtotal = (Number(r.CANTIDAD) * Number(r.PRECIO))
            varTotal +=  subtotal
        })
        
        document.getElementById('lbTotalVenta').textContent = F.setMoneda(varTotal, 'Q');
        document.getElementById('lbTotalVenta2').textContent = F.setMoneda(varTotal, 'Q');


        
    })


    return;
    
    getAllProductos().then(productos => {
        let total = productos.reduce((sum, producto) => sum + (producto.cantidad * producto.PRECIO), 0);
        
        let elementoTotal = document.querySelector('.text-right.negrita.text-danger');
        let mostrarTotalAPagar = document.getElementById('totalFinal');
        if (elementoTotal) {
            elementoTotal.textContent = F.setMoneda(total.toFixed(2), 'Q.');
            mostrarTotalAPagar.textContent = F.setMoneda(total.toFixed(2), 'Q.');
        }
    });
}

function insert_cliente(tipo,nombre,direccion,telefono,referencia,visita,latitud,longitud,garrafones){

    return new Promise((resolve,reject)=>{

        axios.post('/insert_cliente',{
            tipo:tipo,
            nombre:nombre,
            direccion:direccion,
            telefono:telefono,
            referencia:referencia,
            visita:visita,
            latitud:latitud,
            longitud:longitud,
            ruta:GlobalRuta,
            garrafones:garrafones
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data);
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    

    })
   
}

function go_to_pedido(codclie,nomclie){

    GlobalSelectedCodclie = Number(codclie);
    GlobalSelectedNomclie = nomclie;

    document.getElementById('lbNomclie').innerText = nomclie;

    document.getElementById("tab-tres").click();
    
    document.getElementById('lbTotalVenta').innerHTML = `Q 0.00`;
    get_lista_productos_pedido();

}

function go_to_edit(codclie,nombreclie,referenciaclie,direccionclie,telefonoclie,garrafonesclie) {
    $("#modal_editar_cliente_venta").modal('show')

    document.getElementById('txtNombreClienteE').value = nombreclie;
    document.getElementById('txtReferenciaClienteE').value = referenciaclie;
    document.getElementById('txtDireccionClienteE').value = direccionclie;
    document.getElementById('txtTelefonoClienteE').value = telefonoclie;
    document.getElementById('txtGarrafonesClienteE').value = garrafonesclie;

    let btnEditarCliente = document.getElementById('btnEditarClienteVenta');
    btnEditarCliente.addEventListener('click', ()=> {
        F.Confirmacion("¿Está seguro que desea editar el cliente?")
        .then((value) => {
            if(value==true) {
                let nombreClieE = document.getElementById('txtNombreClienteE').value;
                let referenciaClieE = document.getElementById('txtReferenciaClienteE').value;
                let direccionClieE = document.getElementById('txtDireccionClienteE').value;
                let telefonoClieE = document.getElementById('txtTelefonoClienteE').value;
                let garrafonesClieE = document.getElementById('txtGarrafonesClienteE').value;

                btnEditarCliente.disabled = true;
                btnEditarCliente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                update_cliente_venta(codclie,nombreClieE,referenciaClieE,direccionClieE,telefonoClieE,garrafonesClieE)
                .then(() => {
                    F.Aviso('Cliente editado exitosamente!!!');
                    get_lista_clientes()
                    $("#modal_editar_cliente_venta").modal('hide');
                    limpiar_datos_cliente();

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

function update_cliente_venta(codclie,nombreClie,referenciaClie,direccionClie,telefonoClie,garrafonesClie) {
    return new Promise((resolve, reject) => {

        axios.post('/update_cliente_venta', {
            codclie:codclie,
            referenciaClie:referenciaClie,
            nombreClie:nombreClie,
            direccionClie:direccionClie,
            telefonoClie:telefonoClie,
            garrafonesClie: garrafonesClie
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


function get_data_lista_pedidos(){
    return new Promise((resolve,reject)=>{
        
        axios.post('/listado_pedidos_vendedor', 
            {
                codemp:GlobalCodemp,
                fecha: F.devuelveFecha('txtFecha')
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
}

function get_tbl_pedidos(){

    let container = document.getElementById('tblPedidos')
    container.innerHTML = GlobalLoader;

    let varTotal = 0;

    get_data_lista_pedidos()
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{
            varTotal += Number(r.IMPORTE);
            let btnPed = `btnEliminar${r.CODCLIE}${r.CODEMP}` 
            str += `
                <tr>
                    <td>${r.CLIENTE}
                        <br>
                        <small>Pago: ${r.CONCRE}</small>
                    </td>
                    <td>${F.setMoneda(r.IMPORTE,'Q')}</td>
                    <td>
                        <button class="btn btn-info btn-circle hand shadow" onclick="fnc_ver_pedido('${r.CODCLIE}','${r.FECHA.replace('T00:00:00.000Z','')}','${r.CODEMP}','${r.CLIENTE}')">
                            <i class="fal fa-eye"></i>
                        </button>
                    </td>
                    <td>
                        <button id="${btnPed}" class="btn btn-danger btn-circle hand shadow" 
                            onclick="fcn_eliminar_pedido('${r.FECHA.replace('T00:00:00.000Z','')}','${r.CODCLIE}','${r.CODEMP}','${btnPed}')">
                            <i class="fal fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        })
        container.innerHTML = str;
        document.getElementById('lbTotalPedidos').innerText = F.setMoneda(varTotal,'Q');

    })
    .catch((error)=>{
        console.log(error)
        container.innerHTML = 'No hay datos para mostrar...'
        document.getElementById('lbTotalPedidos').innerText = 'Q 0.00'
    })


};

function get_data_lista_pedidos_productos(){
    return new Promise((resolve,reject)=>{
        
        axios.post('/listado_pedidos_vendedor_productos', 
            {
                codemp:GlobalCodemp,
                fecha: F.devuelveFecha('txtFecha')
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
}

function get_tbl_pedidos_productos(){

    let container = document.getElementById('tblPedidos')
    container.innerHTML = GlobalLoader;

    let varTotal = 0;

    get_data_lista_pedidos_productos()
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{
            varTotal += Number(r.IMPORTE);
            let btnPed = `btnEliminar${r.CODCLIE}${r.CODEMP}` 
            str += `
                <tr>
                    <td>${r.DESPROD}
                        <br>
                        <small>Pago: ${r.CODPROD}</small>
                    </td>
                    <td>${F.setMoneda(r.TOTALPRECIO,'Q')}</td>
                    <td>
                        ${r.CANTIDAD}
                    </td>
                    <td>
                        
                    </td>
                </tr>
            `
        })
        container.innerHTML = str;
        document.getElementById('lbTotalPedidos').innerText = F.setMoneda(varTotal,'Q');

    })
    .catch((error)=>{
        console.log(error)
        container.innerHTML = 'No hay datos para mostrar...'
        document.getElementById('lbTotalPedidos').innerText = 'Q 0.00'
    })


};

function fcn_eliminar_pedido(fecha, codclie, codemp, idbtn) {
    // Solicitar confirmación al usuario
    F.Confirmacion("¿Está seguro que desea eliminar el pedido?")
        .then((value) => {
            if (value) {
                // Deshabilitar el botón mientras se procesa la solicitud
                document.getElementById(idbtn).disabled = true;

                // Enviar solicitud de eliminación
                axios.post('/eliminar_detalle_pedido', {
                    fecha: fecha,
                    codclie: codclie,
                    codemp: codemp
                })
                .then((response) => {
                    if (response.data.success) {
                    }
                    F.Aviso("Pedido eliminado correctamente");
                    get_tbl_pedidos()
                })
                .catch((error) => {
                    console.error(error);
                    F.AvisoError("Ocurrió un error al eliminar el pedido");
                })
                .finally(() => {
                    // Habilitar el botón nuevamente
                    document.getElementById(idbtn).disabled = false;
                });
            }
        });
}

function fnc_ver_pedido(codclie,fecha,codemp,nomclie) {
    $("#modal_detalle_pedido").modal('show');

    document.getElementById("lbNomcliePedido").textContent = nomclie;

    let container = document.getElementById("tblDataDetallePedido");
    container.innerHTML = GlobalLoader;



    axios.post('/detalle_pedido', 
        {
            codemp:GlobalCodemp,
            fecha: fecha,
            codclie:codclie
        }
    ).then((response) => {
        let data = response.data;
        if(Number(data.rowsAffected[0])>0) {
            
            let str = "";

            data.recordset.map((r)=>{
                str += `
                <tr>
                    <td>${r.DESPROD}</td>
                    <td>${r.CANTIDAD}</td>
                    <td>${F.setMoneda(r.PRECIO,'Q')}</td>
                    <td>${F.setMoneda(r.TOTALPRECIO,'Q')}</td>
                </tr>
                `
                
            })
            container.innerHTML = str;

        } else {
            container.innerHTML = 'No se cargaron datos....';
        }
    }, (error) => {
        container.innerHTML = 'No se cargaron datos....';
    });



}