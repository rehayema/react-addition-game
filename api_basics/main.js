// async funcyion returns a promise meaning that it will get the data once it is available. It requires the keyword 'await'.

async function start(){
const getDataPromise = await fetch("https://dog.ceo/api/breeds/image/random"); //fetches a random pic of a dog 
const data = await getDataPromise.json(); //converts the data to json format so we can use it

console.log(data);
document.querySelector("#api-result").innerHTML = '<img src="' + data["message"] + '">'; // outputs the image in an html tag
}

start();