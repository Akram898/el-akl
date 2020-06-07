const database = firebase.database();
const rootRef = database.ref("orders");

const custName = document.getElementById("formName");
const custAddress = document.getElementById("formAddress");
const custPhone = document.getElementById("formPhone");
const submitBtn = document.getElementById("submit");

//const cartTxtItems = document.getElementById("cartItems");

submitBtn.addEventListener("click", (e) => {
  const autoID = rootRef.push().key;
  rootRef.child(autoID).set({
    customer_name: custName.value,

    customer_address: custAddress.value,
    customer_phone: custPhone.value,
    // customer_order: cartTxtItems.value,
  });
  alert("شكرا, تم استلام طلبك سنتواصل معك قريبا");
});

// const database = firebase.database();
// const rootRef = database.ref("orders");

// // ADD Order to Database
// orderBtn.addEventListener("click", (e) => {
//   if (
//     name.value != "" &&
//     element.value != "" &&
//     mobile.value != "" &&
//     confirm(
//       "طلبك هو : \n الاسم :" +
//         name.value +
//         ",\n الصنف: " +
//         element.value +
//         ",\n الرقم: " +
//         mobile.value
//     )
//   ) {
//     e.preventDefault();

//     const autoID = rootRef.push().key;
//     rootRef.child(autoID).set({
//       customer_name: name.value,
//       Element_type: element.value,
//       mobile_number: mobile.value,
//     });

//     window.location.reload();
//     alert("شكرا, تم استلام طلبك سنتواصل معك قريبا");
//   } else {
//     alert("من فضلك استكمل البيانات");
//   }
// });
