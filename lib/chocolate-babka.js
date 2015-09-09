function counterCreator(num){
  var ticket = num
  return function(){
    return ticket = ++ticket
  };
};

function countAnnouncer(name, counter){
  return function(){
    return "Now serving " + name + " number " + counter() + "!"
  };
};
