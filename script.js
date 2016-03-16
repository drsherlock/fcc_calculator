

  var text = "";
  var operation = "";
  var op1 = "";
  var op2 = "";

  function add(num1, num2) {
    var result = num1 + num2;
    if (Math.floor(result) === result) {
      return Math.floor(result);
    } else {
      return result;
    }
  }

  function sub(num1, num2) {
    var result = num1 - num2;
    if (Math.floor(result) === result) {
      return Math.floor(result);
    } else {
      return result;
    }
  }

  function mul(num1, num2) {
    var result = num1 * num2;
    if (Math.floor(result) === result) {
      return Math.floor(result);
    } else {
      return result;
    }
  }

  function div(num1, num2) {
    var result = (num1 * 1.0) / num2;
    if (Math.floor(result) === result) {
      return Math.floor(result);
    } else {
      return result;
    }
  }

  function perc(num1) {
    var result = (num1 * 1.0) / 100;
    if (Math.floor(result) === result) {
      return Math.floor(result);
    } else {
      return result;
    }
  }

  function sign(num1) {
    var result = num1 * (-1);
    return result;
  }

  function ans() {
    op2 = document.getElementById('input').value;
    op1 = parseFloat(op1);
    op2 = parseFloat(op2);
    if (operation === "add") {
      text = add(op1, op2);
    } else if (operation === "sub") {
      text = sub(op1, op2);
    } else if (operation === "mul") {
      text = mul(op1, op2);
    } else if (operation === "div") {
      text = div(op1, op2);
    }
    $("#input").val(text);
    text = "";
  }

$("button").click(function(){
  var sound = 'http://www.piclist.com/images/com/bubblesoftonline/www/http/pocket/pocket/inst/click.wav';
    var audio = new Audio(sound);
    audio.play();
});

  $(".numbers").click(function() {
    var digit = $(this).attr("value"); 
    text += digit;
    $("#input").val(text);
  });

  $(".decimal").click(function(){
    var digit = $(this).attr("value");
    if(text.indexOf('.') === -1) {
      text += digit;
      $("#input").val(text);
    }   
  });

  $("#clear").click(function() {
    text = "";
    operation = "";
    op1 = "";
    op2 = "";
    $("#input").val(text);
  });

  $("#del").click(function() {
    op1 = document.getElementById('input').value;
    text = op1.slice(0, -1);
    $("#input").val(text);
  });

  $("#sign").click(function() {
    op1 = document.getElementById('input').value;
    text = sign(op1);
    $("#input").val(text);
  });

  $("#perc").click(function() {
    op1 = document.getElementById('input').value;
    text = perc(op1);
    $("#input").val(text);
  });

  $("#add").click(function() {
    text = "";
    if (operation !== "") {
      ans();
      op1 = document.getElementById('input').value;
    } else {
      op1 = document.getElementById('input').value;
    }
    operation = "add";
  });

  $("#sub").click(function() {
    text = "";
    if (operation !== "") {
      ans();
      op1 = document.getElementById('input').value;
    } else {
      op1 = document.getElementById('input').value;
    }
    operation = "sub";
  });

  $("#mul").click(function() {
    text = "";
    if (operation !== "") {
      ans();
      op1 = document.getElementById('input').value;
    } else {
      op1 = document.getElementById('input').value;
    }
    operation = "mul";
  });

  $("#div").click(function() {
    text = "";
    if (operation !== "") {
      ans();
      op1 = document.getElementById('input').value;
    } else {
      op1 = document.getElementById('input').value;
    }
    operation = "div";
  });

  $("#ans").click(function() {
    ans();
    operation = "";
  });

