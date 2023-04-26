import sql from "mssql";

export const dbSettings = {
    user: "Diegol_SQLLogin_1",
    password: "cr9dxs9job",
    server: "MinimarketGJ.mssql.somee.com",
    database:"MinimarketGJ",
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