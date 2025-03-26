
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado()}
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
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-2">
                        
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <h3 class="negrita text-danger">Cobertura de Clientes</h3>

                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        
                                <div class="form-group">
                                    <div class="input-group">
                                        <select class="form-control negrita text-danger" id="cmbRuta">
                                                        <option value="SN">SIN RUTA</option>
                                                        <option value="RUTA A">RUTA A</option>
                                                        <option value="RUTA B">RUTA B</option>
                                                        <option value="RUTA C">RUTA C</option>
                                                        <option value="RUTA D">RUTA D</option>
                                                        <option value="RUTA E">RUTA E</option>
                                                        <option value="RUTA F">RUTA F</option>
                                                        <option value="RUTA G">RUTA G</option>
                                        </select>
                                        <select class="form-control negrita text-danger" id="cmbDia">
                                                <option value="LUNES">LUNES</option>
                                                <option value="MARTES">MARTES</option>
                                                <option value="MIERCOLES">MIERCOLES</option>
                                                <option value="JUEVES">JUEVES</option>
                                                <option value="VIERNES">VIERNES</option>
                                                <option value="SABADO">SABADO</option>
                                                <option value="DOMINGO">DOMINGO</option>
                                        </select>
                                        <button class="btn hidden">
                                        </button>
                                        <button class="btn btn-info btn-md hand shadow" onclick="window.print()">
                                            <i class="fal fa-print"></i> Imprimir
                                        </button>
                                        <button class="btn hidden">
                                        </button>
                                        <button class="btn btn-outline-secondary btn-md hand shadow" 
                                        onclick="document.getElementById('rootMapa').requestFullscreen()">
                                            <i class="fal fa-expand"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        
                    <div class="col-12" id="rootMapa">
                    
                    </div>
                            
                </div>
            </div>
            `
        },
        vista_nuevo:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){


    document.getElementById('cmbDia').addEventListener('change',()=>{
        get_mapa_cobertura();
        
    })


    document.getElementById('cmbRuta').addEventListener('change',()=>{
        get_mapa_cobertura();
        
    })


    get_mapa_cobertura();
    
};

function initView(){

    getView();
    addListeners();

};




function get_mapa_cobertura(){

    let containerM = document.getElementById('rootMapa');
    containerM.innerHTML = GlobalLoader;
    
    let tbl = `<div class="mapcontainerx" id="mapcontainer"></div>`;        
    
    containerM.innerHTML = tbl;
    
    let mapcargado = 0;
    var map;
    map = Lmap(14.527709,-91.6721049);

    let dia = document.getElementById('cmbDia').value;
    let ruta = document.getElementById('cmbRuta').value;

        get_data_clientes(dia,ruta)
        .then((data)=>{
            let str = '';
            let total = 0;
            data.recordset.map((r)=>{


                    L.marker([r.LATITUD, r.LONGITUD])
                    .addTo(map)
                    .bindPopup(`${r.NOMBRE} <br><small>${r.DIRECCION}-Tel:${r.TELEFONO}</small>`, {closeOnClick: true, autoClose: true})   
                    .on('click', function(e){
                        //console.log(e.sourceTarget._leaflet_id);
                    })

            })
            container.innerHTML = str;
            
            //RE-AJUSTA EL MAPA A LA PANTALLA
            setTimeout(function () {
                try {
                    map.invalidateSize();    
                } catch (error) {
                    
                }
            }, 500);
        })
        .catch(()=>{
            container.innerHTML ='No se cargaron datos...'
        })



};

function get_data_clientes(dia,codruta){

    return new Promise((resolve,reject)=>{

                axios.post('/rpt_clientes_ruta', 
                    {
                        dia:dia,
                        ruta:codruta
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
