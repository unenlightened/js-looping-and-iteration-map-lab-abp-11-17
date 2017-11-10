// Code your solution in this file.

function lowerCaseDrivers(collection){
  return collection.map(function(num) {
    return num.toLowerCase();
  });
}

function nameToAttributes(collection){        //doesn't consider double names, middle names, titles or initials
  return collection.map(function(num) {
    let name = num.split(' ');
    return Object.assign({}, { firstName: name[0] }, { lastName: name[1] } );
  });
}

function attributesToPhrase(collection){
  return collection.map(function(num){
    return num.name + ' is from ' + num.hometown;
  });
}
<<<<<<< HEAD
=======


>>>>>>> 5dc1b6889f04e159c3448361c91c433a4cc677a0
