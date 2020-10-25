window.onload = () => {
    const searchField = document.querySelector("#searchLinks")
    const searchResultField = document.querySelector("#searchResult")
    const amountResultField = document.querySelector("#searchAmount")
    let showResult = 10
    let searchResult = []

    const urls = document.querySelectorAll("a")
    const urlsArr = Array.from(urls)
   
    searchField.oninput = () => {
        let req = searchField.value.toLowerCase();
        searchResult = urlsArr.filter(url => url.textContent.toLowerCase().includes(req)).sort((a,b) => {
            return a.textContent.toLowerCase().indexOf(req) > b.textContent.toLowerCase().indexOf(req) ? 1 : -1;
        })
        
        amountResultField.innerHTML = `Всего ${searchResult.length} совпадений`

        if(searchResult.length <= showResult) showResult = searchResult.length;
        else showResult = 10
        searchResultField.innerHTML = ""

        for(let i = 0; i < showResult; i++){
            let resultIteme = document.createElement("li")
            resultIteme.innerHTML = `<a href="${searchResult[i]}">${searchResult[i].textContent.toLowerCase().replace(req, `<i class="highlight">${req}</i>`)} </a>`
            searchResultField.append(resultIteme)
        }
    }
}