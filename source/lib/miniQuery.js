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
        return document.getElementByClassName(tag);
        break;
      case "#":
        return document.getElementById(tag);
        break;
    }
  }
}

SweetSelector = new miniQuery()