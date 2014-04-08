/*!
 * minQuery
 */
miniQuery = function(){
  
}

miniQuery.prototype = {
  select: function(tag){
    var flag = tag[0];
    tag = tag.slice(1,tag.length)
    switch(flag)
    {
      case ".":
        return document.getElementsByClassName(tag);
        break;
      case "#":
        return document.getElementById(tag);
        break;
      default:
        return document.getElementsByTagName(flag + tag)
    }
  },

  show: function(tag){
    this.select(tag).style.display = "block";
  },

  hide: function(tag){
    this.select(tag).style.display = "none"; 
  },

  addClass: function(tag, klass){
    item = this.select(tag)
    if (item.length === undefined) //it is an id
    {
      item.className = item.className + " " + klass;
    }
    else// it's a class - could be multiple classes
    {
      for (i = 0; i < item.length; i++)
      {
        item[i].className = item[i].className + " " + klass;
      }
    }
  },

  removeClass: function(tag, klass){
    item = this.select(tag)
    if (item.length === undefined) //it is an id
    {
      var klasses = item.className.split(" ")
      item.className = removeClassFromArray(klasses, klass);
    }
    else // it's a class - could be multiple classes
    {
      for (var i = 0; i < item.length; i++)
      {
        var klasses = item[i].className.split(" ")
        item[i].className = removeClassFromArray(klasses, klass);
      }
    } 
  }
}

//gets an array, removes the matching cell, concats and returns a string
removeClassFromArray = function(klasses, klass){
  for (var i=0; i < klasses.length; i++){
    if (klasses[i] === klass)
    {
      var result = "";
      for (var j=0; j < klasses.length; j++)
      {
        if (j != i)
          {
            if (j != 0)
            {
              result = result.concat(" ")
            }
            result = result.concat(klasses[j])
          }
      }
    }
  }
  return result
}

SweetSelector = new miniQuery()