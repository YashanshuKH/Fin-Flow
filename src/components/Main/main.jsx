import React from 'react'

const main = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary", id="navbar" >
  <div class="container-fluid">
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Logo
</button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
            <li class="nav-item">
          <a class="nav-link" href="#" style="position: absolute; left: 85%;">Help</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style="position: absolute; left: 90%">Sign up</a>
        </li>
         
        </li>

      </ul>
      
    </div>
  </div>
</nav>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      <button>button1</button><br><br>
      <button>button2</button><br><br>
      <button>button3</button><br><br>
      <button>button4</button><br><br>
    </div>
  </div>
</div>

    
    <br><div id =  banner >
      <h1>Welcome to Fin Flo</h1>
      <button id="get_started">Get Started </button>
    </div>
      <h2>Why Us</h2>
    <div id="a2">

      <div class="Why_us">Reason 1</div>
      <div class="Why_us">Reason 2</div>
      <div class="Why_us">Reason 3</div>
      <div class="Why_us">Reason 4</div>
    </div>
    <footer>
    

      <p>Copyright &copy; 2024 Fin Flo</p>
    </footer>
    </div>
  )
}

export default main
