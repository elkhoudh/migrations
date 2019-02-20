// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection:
      "postgres://bbipyydlkkifde:42f4430f3aa70862585d1fd891aa2316565f8acc1d017db7e9fdadb7f9fa9e57@ec2-54-83-196-179.compute-1.amazonaws.com:5432/d3nrvg3l93b21f",
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
