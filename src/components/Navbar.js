import React from 'react'
import ElemNav from './ElemNav'
import logo from '../Images/LogoPrincipal.png'


export default function Navbar() {

    const listaElementosNav = ["Home", "About us", "Technologies", "Contact"]



  return (
    <>

        <navbar>

        <header>
	
	        <nav class="navbar navbar-expand-lg">
		    <div class="container-nav">
			<a class="navbar-brand text-white" href="#"><i class="fa fa-graduation-cap fa-lg mr-2"></i><img src={logo} width="auto" height="70px"></img>Biletly</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="nvbCollapse">
				<ul class="navbar-nav ml-auto">
					<ElemNav listaElementos = {listaElementosNav} />
					
				</ul>
			</div>
		</div>
	</nav>

	</header>

        </navbar>


    </>
  )
}
