const root = document.getElementById("root");
console.dir(root);

root.style.display = "flex";
root.style.flexDirection = "column";
// root.style.justifyContent = "center";
root.style.alignItems = "center";


let make = document.createElement("div");
make.style.width = "90px"
make.style.height = "90px"
make.style.backgroundColor= "#000000"
make.style.margin = "10px"
root.appendChild(make);

for (let i = 0; i<6;i++){
  // console.log(i);
  root.appendChild(make);
}

// 반복문 활용 : i의 개수 만큼의 root.appendChild(make); 의 추가?