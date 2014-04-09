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
SweetSelector = new miniQuery()
$ = function(elem){
  return SweetSelector.select(elem);
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

EventDispatcher = function(){}
EventDispatcher.prototype = {
  on: function(tag, event, func){
    item = SweetSelector.select(tag)
    if (item.length === undefined) //it is an id
    {
      // debugger
      item.addEventListener(event, func)
    }
    else // it's a class - could be multiple classes
    {
      for (var i = 0; i < item.length; i++)
      {
        item[i].addEventListener(event, func)
      }
    }
  },

  trigger: function(tag, event){
    item = SweetSelector.select(tag)
    event = new CustomEvent(event)
    if (item.length === undefined) //it is an id
    {
      item.dispatchEvent(event)
    }
    else // it's a class - could be multiple classes
    {
      for (var i = 0; i < item.length; i++)
      {
        item[i].dispatchEvent(event)
      }
    }
  }
}
disp = new EventDispatcher()

Ajax = function(){}
Ajax.prototype = {
  //params = {url: "", type:"", success: function(){}, fail:function()}
  request: function(params){ 
    var oReq = new XMLHttpRequest();
    // oReq.onload = params.success()
    oReq.onreadystatechange = function(){
      if (oReq.readyState === 4)
      {
        if (oReq.status === 200)
        {//OK          
          params.success();
          //we can use the result oReq.responseText
        }
        else
        {//NOT OK
          params.fail();
        }
      }
    }
    oReq.open(params.type, params.url);
    oReq.send();
  }
}
AjaxWrapper = new Ajax();

