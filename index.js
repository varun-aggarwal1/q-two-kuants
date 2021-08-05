const selector = document.getElementById("data");
var data = [
  { name: "david", value: 1 },
  { name: "John", value: 2 },
];

data.forEach(function (item) {
  var option = document.createElement("option");
  //   option.value = item.value;
  option.innerHTML = item.name;
  selector.appendChild(option);
});

const handleChange = (e) => {
  //   console.log(e.value);
  var res = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].name == e.value) {
      res = data[i].value;
    }
  }
  e.value = res;
  alert(`The value of your selected option is ${res}`);
};
