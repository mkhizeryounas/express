if (process.env.NODE_ENV === "production") require("dotenv").config();
module.exports = {
  mysql: {
    host: process.env.db_host || "localhost",
    port: process.env.db_port || 8889,
    user: process.env.db_user || "root",
    password: process.env.db_password || "root",
    database: process.env.db_database || "zigzag"
  },
  secret: process.env.secret || "c6aSsUzQBACrdWoWy6g7BkuxwKfkPbmB"
};
