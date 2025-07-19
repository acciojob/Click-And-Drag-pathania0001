// Your code here.

const items  = document.querySelectorAll(".item")
items.forEach((item)=>{
item.draggable = true;
	//console.log(item.classList[1])
item.ondragstart = (e)=>{
  e.dataTransfer.setData("data",item.classList[1]);
	console.log(e.dataTransfer.getData("data"));
}
	item.ondragover=(e)=>{
		e.preventDefault();
	} 
item.ondrop = (e)=>{
	console.log(e);
	const data = document.querySelector(`.${e.dataTransfer.getData("data")}`);
  item.insertAdjacentElement("beforebegin",data)
}
})