const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL).then(res => res.json()).then(posts => {

    for (const post of posts) {
        // console.log(post)

        const DIV = document.createElement("div");
        DIV.setAttribute("class", "card")

        const DIV2 = document.createElement("div");
        DIV2.setAttribute("class", "card-body")
        DIV2.textContent = post.title + " post ID" + post.id;
        DIV.onclick = function () {
            console.log(post.id);
            document.getElementById("comments").innerHTML = "<h2>Comments</h2>"
            fetch("https://jsonplaceholder.typicode.com/comments?postId="+post.id)
                .then(res => res.json())
                .then(commenti => {

                    for (const commento of commenti) {
                        console.log(commento);  

                    const DIV3 = document.createElement("div")
                    DIV3.setAttribute("class", "card")

                    const DIV4 = document.createElement("div")
                    DIV4.setAttribute("class", "card-body")
                    DIV4.textContent = commento.body;
                    DIV3.appendChild(DIV4)
                    document.getElementById("comments").appendChild(DIV3)
                    }
                    
                })
        }
        DIV.appendChild(DIV2)
        document.getElementById("posts").appendChild(DIV);
    }
})