
export const validation = (userData) => {
  let error = {};
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/

  if(!emailRegex.test(userData.username)){
    error.username = 'Verifica el email'
  }
  if(!userData.username){
    error.username = 'El campo email no puede estar vacio'
  }
  if(userData.username.length > 35){
    error.username = 'El campo email no puede superar los 35 caracteres'
  } 

  if(!passwordRegex.test(userData.password)){
    error.password = 'Longitud mínima de 6 caracteres'
  }
  if(!userData.password){
    error.password = 'El campo password no puede estar vacio'
  }

  return error;
}
 
