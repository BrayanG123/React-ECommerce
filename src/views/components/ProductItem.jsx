








export const ProductItem = ( { id, name, price, brand, image } ) => {


  return (

    <div className="col animate__animated animate__fadeIn ">
            <div className="card">
                {/* Imagen */}
                <div className="row no-gutters">
                    <div className="col-4 w-100">
                        <img 
                            // src="https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter" 
                            src= {image}
                            className="card-img" 
                            alt="superhero" 
                        />
                    </div>
                </div>

                {/* Datos */}
                <div className="col-8">
                    <div className="card-body">

                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{ price }</p>

                        {/* {
                            (alter_ego !== characters) && (CharactersByHero)
                            (alter_ego !== characters) && (<p>{ characters }</p>)
                        } */}
                        
                        {/* <CharactersByHero alter_ego={name} characters={price}/> descomentar este y analizar*/} 

                        <p className="card-text">
                            <small className="text-muted">{ brand }</small>
                        </p>

                        {/* <Link to={`/hero/${id}`} > Mas... </Link> */}

                        {/* row para los Botones */}
                        <div className="row">
                            
                            <button className="btn btn-info btn-sm w-50 position-relative">Detalles</button>
                            <button className="btn btn-info btn-sm w-50 justify-content-right">Agregar al carrito</button>
                            
                        </div>
                    </div>
                </div>

                
            </div>
        </div>

  )


}
