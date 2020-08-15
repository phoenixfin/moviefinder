class MainTitle extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Movie Finder</h1>
          <p class="lead">Create your monthly watchlist here!</p>
        </div>`;
    }
}

customElements.define("main-title", MainTitle);
