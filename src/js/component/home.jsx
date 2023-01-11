import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	function addTarea(e) {
		if(e.key==='Enter'){
			e.preventDefault();
			if(tarea == "") {
				alert("Ingresa una tarea")
			} else{
				setLista([...lista, tarea]); 
				setTarea("");
			}
		}
	}

	function removeTarea(id) {
		setLista(lista.filter((tarea, index) => index !== id)) 
	}

	return (
		<div>
			<h1 className="text-secondary fw-light text-center fs-1">todos</h1>
			<div className="container d-flex justify-content-center">

			<ul class="list-group list-group-flush shadow-lg bg-body-tertiary rounded w-50 rounded-0  fw-light">

  <li class="list-group-item" aria-current="true"><input className="form-control fs-5 fw-light rounded-0 border border-0" type="text" placeholder="Ingrese una tarea" aria-label="Disabled input example" value={tarea} onChange={(e) => setTarea(e.target.value)} onKeyDown={addTarea} required/></li>

  {lista.map((tarea, id) => <li className="list-group-item fs-5" key={id}>{tarea}<button type="button" className="btn btn-outline-light border-0 float-end" onClick={() => removeTarea(id)}>X</button></li> )}
  
  <li class="list-group-item disabled" aria-disabled="true">{lista.length} item left</li>
</ul>
			
			</div>
			
		</div>
	);
};

export default Home;
