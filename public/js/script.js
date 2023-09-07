var obj = {
  val1: "",
  val2: "",
  op: "",
  step: 1,
  sum: "",
};

function number(n) {
  console.log("n >>> ", n);
  var val = "";

  if (obj.step == 1) {
    obj.val1 += n;
    val = obj.val1;
  } else {
    obj.val2 += n;
    val = obj.val2;
  }

  $("#shownumber").text(numberWithCommas(val));
  console.log("obj", obj);
}

function remove() {
  var txt = $("#shownumber").text();
  var val;

  if (txt.length <= 1) {
    val = 0;
    if (obj.step == 1) {
      obj.val1 = "";
    } else {
      obj.val2 = "";
    }
  } else {
    val = txt.substring(0, txt.length - 1);
    if (obj.step == 1) {
      obj.val1 = val;
    } else {
      obj.val2 = val;
    }
  }
  $("#shownumber").text(numberWithCommas(val));
  console.log("obj", obj);
}

function operator(op, el) {
  console.log("op", op, "el", el.id);
  $(".btn-operator").removeClass("operator-active");
  $("#" + el.id).addClass("operator-active");
  obj.step = 2;
  obj.op = op;
  console.log("obj", obj);
}

function sum() {
  if (obj.op == "+") obj.sum = parseInt(obj.val1) + parseInt(obj.val2);
  else if (obj.op == "-") obj.sum = parseInt(obj.val1) - parseInt(obj.val2);
  else if (obj.op == "X") obj.sum = parseInt(obj.val1) * parseInt(obj.val2);
  else if (obj.op == "/") obj.sum = parseInt(obj.val1) / parseInt(obj.val2);
  $("#shownumber").text(numberWithCommas(obj.sum));
  $(".btn-operator").removeClass("operator-active");
  obj.step = 1;
  obj.op = "";
  obj.val1 = String(obj.sum);
  obj.val2 = "";

  console.log("obj", obj);
}

function clearval() {
  obj = {
    val1: "",
    val2: "",
    op: "",
    step: 1,
    sum: "",
  };
  $("#shownumber").text(0);
  $(".btn-operator").removeClass("operator-active");
  console.log("obj", obj);
}

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}
