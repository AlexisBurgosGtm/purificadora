
var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


const execute = require('./connection');


var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(http, { cors: { origin: '*' } });


const cors = require('cors');
const { exec } = require("child_process");
app.use(cors({
    origin: '*'
}));


const PORT = process.env.PORT || 2024;

//app.use(bodyParser.json());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  
  next();
});




app.get("/",function(req,res){
  
	res.sendFile(path + 'index.html');
  
}); 



app.get("/login",function(req,res){
  res.redirect('/');
}); 



app.post("/insert_pedido", function(req, res) {

  const {codclie,nomclie,fecha,tblProductos,concre,codemp} = req.body;


  let qry = '';
  let Productos = JSON.parse(tblProductos);
  let str = ''
  Productos.map((r)=>{

    if(Number(r.CANTIDAD)==0){

    }else{
          str += `INSERT INTO POS_ORDERS 
                    (CODCLIE,FECHA,ANIO,MES,CODPROD,DESPROD,CANTIDAD,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,CODEMP,CONCRE)
                  SELECT ${codclie} AS CODCLIE, '${fecha}' AS FECHA, 0 AS ANIO, 0 AS MES, 
                      '${r.CODPROD}' AS CODPROD,'${r.DESPROD}' AS DESPROD,
                      ${r.CANTIDAD} AS CANTIDAD, ${r.COSTO} AS COSTO, ${r.PRECIO} AS PRECIO,
                      ${Number(r.COSTO)*Number(r.CANTIDAD)} AS TOTALCOSTO,
                      ${Number(r.PRECIO)*Number(r.CANTIDAD)} AS TOTALPRECIO, ${codemp} AS CODEMP, '${concre}' AS CONCRE;
                    ` 
    }
  })

  qry = str;
  


  execute.Query(res,qry)

});


app.post("/lista_clientes",function(req,res){

    const {filtro} = req.body;

    let qry = `SELECT top 70 CODCLIE, TIPO,NOMBRE,DIRECCION,TELEFONO,REFERENCIA,VISITA,LATITUD,LONGITUD
      FROM POS_CLIENTES WHERE NOMBRE LIKE '%${filtro}%';`


    execute.Query(res,qry)

}); 


app.post("/insert_cliente",function(req,res){

  const {tipo,nombre,direccion,telefono,referencia,visita,latitud,longitud,ruta} = req.body;

  let qry = `INSERT INTO POS_CLIENTES 
              (TIPO,NOMBRE,DIRECCION,TELEFONO,REFERENCIA,VISITA,LATITUD,LONGITUD,RUTA)
                VALUES
              ('${tipo}','${nombre}','${direccion}','${telefono}','${referencia}','${visita}','${latitud}','${longitud}','${ruta}')
            `

            console.log(qry)

  execute.Query(res,qry)

}); 


app.post("/lista_usuarios_login", function(req, res) {
  const { usuario, clave } = req.body;

  let qry = `SELECT CODEMP AS CODIGO, NOMBRE AS usuario, TIPO AS tipo, RUTA AS ruta FROM POS_EMPLEADOS
             WHERE NOMBRE='${usuario}' AND CLAVE='${clave}'`;

  console.log(qry);

  execute.Query(res, qry, (err, result) => {

  });
});


app.post("/lista_empleado",function(req,res){

  //const {filtro} = req.body;

  let qry = `SELECT CODEMP,TIPO,NOMBRE,TELEFONO,CLAVE,LATITUD,LONGITUD,HABILITADO, RUTA
            FROM POS_EMPLEADOS ORDER BY TIPO, NOMBRE`


  execute.Query(res,qry)

}); 

app.post("/insert_empleado",function(req,res){

  const {tipo,nombre,telefono,clave,ruta,latitud,longitud} = req.body;

  let qry = `INSERT INTO POS_EMPLEADOS 
              (TIPO,NOMBRE,TELEFONO,CLAVE,LATITUD,LONGITUD,HABILITADO,RUTA)
                VALUES
              ('${tipo}','${nombre}','${telefono}','${clave}','${latitud}','${longitud}','SI','${ruta}')
            `

      

  execute.Query(res,qry)

}); 


app.post("/lista_producto", function(req, res) {

  // const {filtro} = req.body;

  let qry = `SELECT CODPROD,DESPROD,CODMEDIDA,0 AS CANTIDAD, COSTO,PRECIO,ACTIVO
            FROM POS_PRODUCTOS`
          
  execute.Query(res,qry)

});




app.post("/insert_producto", function(req,res) {

  const {codprod,desprod,codmedida,uxc,costo,precio} = req.body;

  let qry = ` INSERT INTO POS_PRODUCTOS
              (CODPROD,DESPROD,CODMEDIDA,UXC,COSTO,PRECIO,ACTIVO)
                VALUES
              ('${codprod}','${desprod}','${codmedida}','${uxc}','${costo}','${precio}','SI')
            `

       
  execute.Query(res,qry)

});

app.post("/update_producto", function(req, res) {

  const {codprod,desprod,costo,precio} = req.body;

  let qry = `
          UPDATE POS_PRODUCTOS
          SET DESPROD='${desprod}',
            COSTO=${costo},
            PRECIO=${precio}
          WHERE CODPROD='${codprod}'
          
        `;

    

      execute.Query(res,qry)
});

app.post("/update_empleado", function(req, res) {

  const {codemp,tipo,nombre,telefono,clave,ruta} = req.body;

  let qry = `
          UPDATE POS_EMPLEADOS
          SET TIPO='${tipo}',
              NOMBRE='${nombre}',
              TELEFONO='${telefono}',
              CLAVE='${clave}',
              RUTA='${ruta}'
            WHERE CODEMP=${codemp}
    `;


    execute.Query(res,qry);

});

app.post("/update_empleado_habilitado", function(req, res) {
  const {codemp,habilitado} = req.body;

  let qry = `
          UPDATE POS_EMPLEADOS
          SET HABILITADO='${habilitado}'
          WHERE CODEMP=${codemp}
  `;



  execute.Query(res,qry);

});

// Consulta para traer la lista de los productos
app.post("/catalogo_productos", function(req, res) {
  const {codprod,desprod,codmedida,uxc,costo,precio,mayorista,activo} = req.body;

  let qry = `
                SELECT CODPROD,DESPROD,CODMEDIDA,UXC,COSTO,PRECIO,MAYORISTA,ACTIVO
                FROM POS_PRODUCTOS
            `;



  execute.Query(res,qry);

})

// Obtener el catalogo de clientes
app.post("/lista_cliente",function(req,res){

  //const {filtro} = req.body;

  let qry = `SELECT CODCLIE,DPI,NIT,TIPO,NOMBRE,DIRECCION,CODMUN,CODDEPTO,TELEFONO,REFERENCIA,VISITA,LATITUD,LONGITUD,RUTA
            FROM POS_CLIENTES `


  execute.Query(res,qry)

}); 

app.post("/update_cliente", function(req, res) {

  const {codclie,tipo,nombre,direccion,telefono,referencia,visita,ruta} = req.body;

  let qry = `
          UPDATE POS_EMPLEADOS
          SET TIPO='${tipo}',
              NOMBRE='${nombre}',
              TELEFONO='${telefono}',
              CLAVE='${clave}'
            WHERE CODEMP=${codemp}
    `;

    console.log(qry);

    execute.Query(res,qry);

});



app.post("/listado_pedidos_vendedor",function(req,res){

  const {codemp,fecha} = req.body;

  let qry = `SELECT POS_ORDERS.CODCLIE, POS_ORDERS.FECHA, SUM(POS_ORDERS.TOTALPRECIO) AS IMPORTE, POS_ORDERS.CONCRE, POS_CLIENTES.NOMBRE AS CLIENTE, POS_ORDERS.CODEMP
              FROM POS_ORDERS LEFT OUTER JOIN POS_CLIENTES ON POS_ORDERS.CODCLIE = POS_CLIENTES.CODCLIE
              GROUP BY POS_ORDERS.CODCLIE, POS_ORDERS.FECHA, POS_ORDERS.CONCRE, POS_CLIENTES.NOMBRE, POS_ORDERS.CODEMP
              HAVING (POS_ORDERS.CODEMP = ${codemp}) AND (POS_ORDERS.FECHA = '${fecha}')`


              console.log(qry)
  execute.Query(res,qry)

}); 





app.use("/",router);

app.use("*",function(req,res){
  res.redirect('/');
  //res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});



http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

