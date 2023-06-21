const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
  findUserByUsername(users, 'taco') // undefined


  function findUserByUsername(users, username) {
    return users.find(user => user.username === username);
  }



  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  removeUser(users, 'akagen') // {username: 'akagen'}
  removeUser(users, 'akagen') // undefined


function removeUser(users, username) {
    for (let i = 0; i <users.length; i++) {
        if (users[i].username === username) {
            return users.splice(i, 1)[0];
        }
    }

    return undefined;
}