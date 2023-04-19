import sql from "mssql";

export const dbSettings = {
    user: "sa",
    password: "Alexxxander123.***",
    server: "20.125.123.33",
    database:"GRUPOJ",
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };

const getConnection = async () => {

    try {
      const pool = await sql.connect(dbSettings);
      return pool;
    } catch (error) {
      console.error(error);
    }
  };
  

export default getConnection;