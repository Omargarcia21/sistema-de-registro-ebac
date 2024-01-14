//Imprime un mensaje de bienvenida en la consola
console.log("Sistema EBAC de Registro de Alumnos");

//Se define un arreglo de registro con datos de alumnos en EBAC
var registro = [

    //Se muestra lista de alumnos por medio de objetos
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero A Pro", email: "salvadormora@ebac.mx"},
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarrollador Back End con Python", email: "maria@ebac.mx"},
    {nombre: "Omar Garcia", edad: "26", zonaResidencia: "Mty", nombrePrograma: "Ti Para Principiantes", email: "omar.garcia.21@hotmail.com"},
    {nombre: "Alexa Dominguez", edad: "25", zonaResidencia: "Guadalajara", nombrePrograma: "Paisajismo", email: "alexa.d.1998@hotmail.com"},
    {nombre: "Guajardo Martinez", edad: "38", zonaResidencia: "Acapulco", nombrePrograma: "SQL para análisis de datos", email: "gmartinez@hotmail.com"}
];

//Usamos la variable registro para guardar ciertos datos de texto y el ciclo for lo usamos para indicar de los registros que tenemos 
//El console lo usamos para que nos muestre en la consola del navegador los datos que tenemos guaradado en la variable registro
//Se agregan 3 registros más 


//Esta función que permite agregar un nuevo alumno al arreglo de registro
function agregarAlumno(){

    //Se le solicita información al usuario para el registro de un nuevo alumno
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Ingresa la edad del alumno");
    var nombrePrograma = prompt("Ingresa el programa a estudiar del alumno");
    var email = prompt("Ingresa el correo electronico del alumno");

     //Crea un objeto que se llama nuevoAlumno con los datos ingresados
    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email};


    //Agrega la información nuevoAlumno al arreglo
    registro.push(nuevoAlumno);

}

//Esta función permite generar un nuevo arreglo que no contenta la información del alumno deseado 
function eliminarAlumno(){

    //Solicita al usuario del alumno a eliminar 
    var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

    //Utiliza el metodo filter para crear un nuevo arreglo sin en alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
}

//Se declara ciclo do while permite repetir el menú cuando es indicado hasta que no se cumpla la condicion
do{

   //Variable que toma la elección del usuario para ejecutar la funcióin indicada
    var opcion = prompt("Seleccione una opción: \n1. Agregar Registro \n2. Consultar Registro de alumnos \n3. Elimar registro \n4. Salir");


//Se declara este if para dar a elegir a el usuario la opción que quiere
if (opcion === "1"){
    agregarAlumno();
    }else if(opcion === "2"){
        consultarRegistros();
    }else if(opcion === "3"){
        eliminarAlumno();
    }else if("Salir") {
        alert("Salir del sistema");
    }else{
        alert("Opción invalida, elige otra");
    }
    
    //Esta variable nos permite elegir si hacemos otra acción o cerremos el ciclo
    var continuar = prompt("¿Deseas hacer otra accion? (S/N)");
    
    //Whiles que se encarga de cerrar el ciclo
    } while(continuar === "s");
    


    //Función para consultar los registros de los alumnos 
function consultarRegistros(){
    //Este ciclo for itera sobre cada uno de los registros del arreglo
    for (var i = 0; i < registro.length; i++){


        //Esta lista de console.log permite ver al usuario en la consola 
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del programa: " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
    
        console.log("/////////////////////");
    };
}
//La condicinal if se uso para ver que opcion podemos elegir y esta lance una alerta de la opcion que queremos
//La variable opcion la usamos para ver que podemos hacer en el sistema 
//Se agrego el ultimo console para tener division entre cada grupo
