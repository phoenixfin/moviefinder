class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#search-key").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <div class="input-group mb-3">
          <input type="text" id="search-key" class="form-control" placeholder="What movie you want to know?" aria-label="What movie you want to know?" aria-describedby="button-addon2" type="search">
          <div class="input-group-append">
          </div>
          <button class="btn btn-dark" type="submit" id="search-button">Search</button>
        </div>
       `;

        this.shadowDOM.querySelector("#search-button").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
