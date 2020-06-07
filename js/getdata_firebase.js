//******* get data  ***- */
const database = firebase.database();
const rootRef = database.ref("orders");

rootRef.on("value", (snap) => {
  // console.log(snap.val());

  //Make Array From The Data coming
  const orders = snap.val();
  const keys = Object.keys(orders);
  console.log(keys);

  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    const customerName = orders[k].customer_name;
    const elementType = orders[k].customer_address;
    const mobile = orders[k].customer_phone;
    // console.log(customerName, elementType, mobile); working until here
    var table = document.getElementById("table-data");
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();

    cell1.innerHTML = customerName;
    cell2.innerHTML = elementType;
    cell3.innerHTML = mobile;
    cell4.innerHTML = k;
    cell5.innerHTML =
      " <input class='form-check-input' type='checkbox' value='' id='defaultCheck1'>";
    // working until here

    // var li = document.getElementById("ordered-list").value;
    // li.HTML.createElement("li", "Customer Name :" + customerName);
  }
});
