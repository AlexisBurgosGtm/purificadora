
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.vista_modal_empleados() + view.vista_modal_editar_empleados()}
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
                    <h1 style="font-size:280%" class="negrita text-left">Empleados</h1>
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td>TIPO</td>
                                    <td>RUTA</td>
                                    <td>NOMBRE</td>
                                    <td>TELEFONO</td>
                                    <td>CLAVE</td>
                                    <td>HABILITADO</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataUsuarios">
                            </tbody>
                        </table>

                        <button class="btn btn-circle btn-xl btn-success btn-bottom-r hand shadow" id="btnAgregarUsuario">
                            <i class="fal fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            `
        },
        vista_nuevo:()=>{

        },
        vista_modal_empleados:()=>{
            return `
 
                <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_nuevo_usuario">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">
                                        
                                       <h1 style="font-size:280%" class="negrita text-left">Agregar Empleado</h1>

                                        <div class="form-group">
                                            <label>Tipo:</label>
                                            <select class="form-control negrita text-danger" id="cmbTipoEmpleado">
                                                <option value="VENDEDOR">VENDEDOR</option>
                                                <option value="GERENTE">GERENTE</option>
                                            </select>
                                        </div>

                                       <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpleado"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Telefono:</label>
                                            <input type="text" class="form-control" id="txtTelefonoEmpleado"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Clave:</label>
                                            <input type="text" class="form-control" id="txtClaveEmpleado"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Ruta:</label>
                                            <select class="form-control negrita text-danger" id="cmbRutaEmpleado">
                                                <option value="SN">SIN RUTA</option>
                                                <option value="RUTA A">RUTA A</option>
                                                <option value="RUTA B">RUTA B</option>
                                                <option value="RUTA C">RUTA C</option>
                                                <option value="RUTA D">RUTA D</option>
                                                <option value="RUTA E">RUTA E</option>
                                                <option value="RUTA F">RUTA F</option>
                                                <option value="RUTA G">RUTA G</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            
                                
                                
                                
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpleado">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>            

            `;

        },
        vista_modal_editar_empleados:()=>{
            return `
 
                <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_editar_empleado">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">
                                        
                                       <h1 style="font-size:280%" class="negrita text-left">Editar Empleado</h1>

                                        <div class="form-group">
                                            <label>Tipo:</label>
                                            <select class="form-control negrita text-danger" id="cmbTipoEmpleadoE">
                                                <option value="VENDEDOR">VENDEDOR</option>
                                                <option value="GERENTE">GERENTE</option>
                                            </select>
                                        </div>

                                       <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpleadoE"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Telefono:</label>
                                            <input type="text" class="form-control" id="txtTelefonoEmpleadoE"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Clave:</label>
                                            <input type="text" class="form-control" id="txtClaveEmpleadoE"/>
                                        </div>

                                         <div class="form-group">
                                            <label>Ruta:</label>
                                            <select class="form-control negrita text-danger" id="cmbRutaEmpleadoE">
                                                <option value="SN">SIN RUTA</option>
                                                <option value="RUTA A">RUTA A</option>
                                                <option value="RUTA B">RUTA B</option>
                                                <option value="RUTA C">RUTA C</option>
                                                <option value="RUTA D">RUTA D</option>
                                                <option value="RUTA E">RUTA E</option>
                                                <option value="RUTA F">RUTA F</option>
                                                <option value="RUTA G">RUTA G</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            
                                
                                
                                
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnEditarEmpleado">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>            

            `;

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){




    document.getElementById('btnAgregarUsuario').addEventListener('click', () => {
        $("#modal_nuevo_usuario").modal('show')
    })


    get_lista_empleados()


    let btnGuardarEmpleado = document.getElementById('btnGuardarEmpleado');
    btnGuardarEmpleado.addEventListener('click', ()=> {

        F.Confirmacion("¿Está seguro que desea Guardar este nuevo Empleado?")
        .then((value) => {
            if(value==true) {

                let tipo = document.getElementById('cmbTipoEmpleado').value;
                let nombre = document.getElementById('txtNombreEmpleado').value || '';
                let telefono = document.getElementById('txtTelefonoEmpleado').value || '';
                let clave = document.getElementById('txtClaveEmpleado').value || '';
                let latitud = '0';
                let longitud = '0';
                let habilitado = 'SI';
                let ruta = document.getElementById('cmbRutaEmpleado').value || '0';

                if(nombre==''){F.AvisoError('Indique un nombre de usuario');return;}
                if(clave==''){F.AvisoError('Indique una clave de usuario');return;}

                
                btnGuardarEmpleado.disabled = true;
                btnGuardarEmpleado.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empleado(tipo,nombre.toUpperCase(),telefono,clave,ruta)
                .then(()=> {
                    
                    F.Aviso('Empleado guardado exitosamente!!!');    
                    $("#modal_nuevo_usuario").modal('hide')
                    get_lista_empleados()
                    limpiar_datos_empleado();

                    btnGuardarEmpleado.disabled = false;
                    btnGuardarEmpleado.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .cath(()=> {
                    F.AvisoError('No se pudo guardar el empleado');
                    btnGuardarEmpleado.disabled = false;
                    btnGuardarEmpleado.innerHTML = `<i class="fal fa-save"></i>`;

                })

            }
        })

    })


    let btnEditarEmpleado = document.getElementById('btnEditarEmpleado');
    btnEditarEmpleado.addEventListener('click', ()=> {

        F.Confirmacion("¿Está seguro que desear editar el producto?")
        .then((value) => {
            if(value==true) {
                
                let tipoE = document.getElementById('cmbTipoEmpleadoE').value;
                let nombreE = document.getElementById('txtNombreEmpleadoE').value;
                let telefonoE = document.getElementById('txtTelefonoEmpleadoE').value;
                let claveE = document.getElementById('txtClaveEmpleadoE').value;
                let rutaE = document.getElementById("cmbRutaEmpleadoE").value;

                btnEditarEmpleado.disabled = true;
                btnEditarEmpleado.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                update_empleado(selected_codempleado,tipoE,nombreE,telefonoE,claveE,rutaE)
                .then(() => {
                  
                    F.Aviso('Empleado editado exitosamente!!!');
                    get_lista_empleados()
                    $("#modal_editar_empleado").modal('hide');
                    limpiar_datos_empleado();

                    btnEditarEmpleado.disabled = false;
                    btnEditarEmpleado.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .catch(()=> {
                    F.AvisoError('No se pudo guardar el empleado');
                    btnEditarEmpleado.disabled = false;
                    btnEditarEmpleado.innerHTML = `<i class="fal fa-save"></i>`;

                })

            }
        })

    })

};

function initView(){

    getView();
    addListeners();

};

function limpiar_datos_empleado() {
    document.getElementById('cmbTipoEmpleado').value = '';
    document.getElementById('txtNombreEmpleado').value = '';
    document.getElementById('txtTelefonoEmpleado').value = '';
    document.getElementById('txtClaveEmpleado').value = '';
}

function get_lista_empleados(){


    let container = document.getElementById('tblDataUsuarios');
    container.innerHTML = GlobalLoader;
    let str = '';


    axios.post('/lista_empleado',{
        filtro:''
    })
    .then((response) => {
        let data = response.data;
        if(Number(data.rowsAffected[0])>0){
            data.recordset.map((r)=>{
                let strHabilitado ="";
                if(r.HABILITADO=='SI'){strHabilitado="btn-success"}else{strHabilitado="btn-danger"}
                let idBtnE = `btnE${r.CODEMP}`;
                str += `
                                <tr>
                                    <td>${r.TIPO}</td>
                                    <td>${r.RUTA}</td>
                                    <td>${r.NOMBRE}</td>
                                    <td>${r.TELEFONO}</td>
                                    <td>${r.CLAVE}</td>
                                    <td>
                                        ${r.HABILITADO}
                                        <button class=" btn ${strHabilitado} btn-circle btn-md hand shadow" 
                                            onclick="get_desbloqueo('${r.CODEMP}','${r.HABILITADO}')">
                                            <i class="fal fa-sync"></i>
                                        </button>

                                    </td>
                                    <td>
                                        <button class="btn btn-info btn-circle btn-md hand shadow" 
                                        onclick="get_datos_empleado('${r.CODEMP}','${r.TIPO}','${r.NOMBRE}','${r.TELEFONO}','${r.CLAVE}','${r.RUTA}')">
                                            <i class="fal fa-edit"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button id="${idBtnE}" class="btn btn-danger btn-circle btn-md hand shadow" 
                                        onclick="eliminar_empleado('${r.CODEMP}','${r.NOMBRE}','${idBtnE}')">
                                            <i class="fal fa-trash"></i>
                                        </button>
                                    </td>
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
}

function eliminar_empleado(codemp,nombre,idbtn){

    let btn = document.getElementById(idbtn);

    F.Confirmacion(`¿Está seguro que desea ELIMINAR a este USUARIO (${nombre})?`)
    .then((value)=>{
        if(value==true){

            btn.disabled = true;
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;

                axios.post('/delete_empleado', {
                    codemp:codemp
                })
                .then((response) => {
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0) {
                        F.Aviso('Usuario eliminado exitosamente!!');
                        get_lista_empleados();
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


function insert_empleado(tipo,nombre,telefono,clave,ruta) {
    return new Promise((resolve, reject) => {

        axios.post('/insert_empleado', {
            tipo:tipo,
            nombre:nombre,
            telefono:telefono,
            clave:clave,
            ruta:ruta,
            latitud:'0',
            longitud:'0'
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data);
            }else {
                reject();
            }
        }, (error) => {
            reject();
        });

    })
}


function get_datos_empleado(codemp,tipo,nombre,telefono,clave,ruta){

    $("#modal_editar_empleado").modal('show')   
    
    document.getElementById("cmbTipoEmpleadoE").value = tipo;
    document.getElementById("txtNombreEmpleadoE").value = nombre;
    document.getElementById("txtTelefonoEmpleadoE").value = telefono;
    document.getElementById("txtClaveEmpleadoE").value = clave;
    document.getElementById("cmbRutaEmpleadoE").value = ruta;

    selected_codempleado = Number(codemp);

}

function update_empleado(codemp,tipo,nombre,telefono,clave,ruta) {
    return new Promise((resolve, reject) => {

        axios.post('/update_empleado', {
            codemp:codemp,
            tipo:tipo,
            nombre:nombre,
            telefono:telefono,
            clave:clave,
            ruta:ruta
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0) {
                resolve(data);
            }else {
                reject();
            }
        }, (error) => {
            reject();
        });

    })

}

function get_desbloqueo(codemp,habilitado) 
{
    let desbloquear = habilitado;

    if(desbloquear == 'SI') {
        desbloquear = 'NO';
    }else if(desbloquear == 'NO'){
        desbloquear = 'SI';
    }

    console.log(desbloquear);
    update_habilitado(codemp, desbloquear)
    .then(()=>{
        get_lista_empleados();
        console.log(desbloquear);
    
    })
    .catch(()=>{
        F.AvisoError("No se pudo cambiar el estado del empleado")        
    })

    

    
    
    
}

function update_habilitado(codemp, habilitado) {
    
    return new Promise((resolve, reject) => {
    
        axios.post('/update_empleado_habilitado', {
            codemp:codemp,
            habilitado:habilitado
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0) {
                resolve(data);
            }else {
                reject();
            }
        }, (error) => {
            reject();
        });
    
    })
}