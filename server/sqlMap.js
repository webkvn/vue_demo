// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, age) values (0, ?, ?)',
    edit: 'update user set name=?,age=? where id=?',
    view: 'select * from user where id=?',
    remove:'delete from user where id=?'
  }
}

module.exports = sqlMap;
