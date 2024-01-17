// Inicializaremos una variable que nos inicie el despliegue del servidor
const express = require("express");

// Proporcionar la ruta de los archivos y elementos que utilizaremos 
const path = require("path");

// Creando una aplicación que se desplegará en el servidor de express (live server)

const app = express();

app.use(express.static('public'))
// El "/ nos ayuda a ubicar todos los archivos que están dentro de mi proyecto"
app.get("/",(req,res)=>{
	/* 
		El join nos ayuda a unir todos los argumentos
		El path no ayuda a ubicar los archivos que queremos insertar
		El sendFile nos ayuda a transferir el archivo a la ruta dada
	 */
	res.sendFile(path.join(__dirname+"/index.html"));
})

// Activar las conexiones para desplegar nuestro aplicativo

app.listen(4000, ()=>{
	console.log("El servidor esta corriendo en el puerto", 4000);
})
