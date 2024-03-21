
import "./style.css";

const body = document.querySelector("body");




async function fetchApi() {
  const res = await fetch('http://localhost:3000/api');
  const data = await res.json();

  data.map((anime) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h1>title: ${anime.title}</h1>
      <h2>id : ${anime._id}</h2>
      <h2>author : ${anime.author}</h2>
      <button class="btn-delete">X</button>
      <button class="btn-update">Update</button>
    `;

    const deleteBtn = card.querySelector(".btn-delete");
    const updateBtn = card.querySelector(".btn-update");

    deleteBtn.addEventListener("click", async () => {
      await fetch(`http://localhost:3000/api/${anime._id}`, { method: "delete" });
      card.remove();
    });

    updateBtn.addEventListener("click", async () => {
      const newTitle = prompt("Enter new title:");
      const newAuthor = prompt("Enter new author:");
      
      const updatedAnime = {
        title: newTitle,
        author: newAuthor,
      };

      const res = await fetch(`http://localhost:3000/api/${anime._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAnime),
      });

      if (res) {
        const updatedData = await res.json();
        card.querySelector("h1").textContent = `title: ${updatedData.title}`;
        card.querySelector("h2:nth-child(3)").textContent = `author: ${updatedData.author}`;
      }
    });

    body.appendChild(card);
  });
}


fetchApi();




const data = async (e)=>{
const title = document.querySelector("#title-input").value
const author = document.querySelector("#author-input").value
  e.preventDefault();
  const anime = {
      "title": title,
      "author":author,
  }
  const res = await fetch('http://localhost:3000/api',{
    method: "POST",
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(anime),
  } )
  if (res) {
    const newAnime = await res.json();
    fetchApi(newAnime);
  }

}
  const form = document.querySelector('#anime-form')

form.addEventListener('submit',data)



  
