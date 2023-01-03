

import axios from "axios";

/*Se estructura la información en la manera que se necesita para ser
leida por el componente Tabla*/
const createData = (cedula, nombre, tipo) => {
    return {
      cedula,
      nombre,
      tipo
    };
}

export const getUsersData = async (setRowsData) => {
  await axios.get('http://localhost:3300/users').then(
    ({ data }) => {
      const users = data.data;
      const usersData = users.map(({ cedula, nombre_completo, tipo }) => {
        return createData(cedula, nombre_completo, tipo)
      })
      setRowsData(usersData);
      return true;
    }, (error) => {
      return false;
    }
  )
}
