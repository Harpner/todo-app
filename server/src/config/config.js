module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'todoapp',
    username: process.env.DB_USER || 'todoapp',
    password: process.env.DB_PASS || 'todoapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './todoapp.sqlite'
    }
  }
}
