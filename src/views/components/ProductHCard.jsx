



export const ProductHCard = ( { id, name, price, brand, image } ) => {

  return (

    <div className="card mb-3" style={{height: '150px'}}>
            <div className="row g-0">
                <div className="col-md-8 mt-2  w-25 justify-content-center">
                    <img 
                        src={image} 
                        className="h-25 " 
                        alt="..."
                        // style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
                    />
                </div>
                
                <div className="col-md-8">
                    <div className="card-body justifi-content-center">
                        <h5 className="card-title"> {name}</h5>
                        <p className="card-text"> { price } </p>
                        <p className="card-text"><small className="text-body-secondary"> { brand } </small></p>
                        <div className="row d-inline-flex gap-1 d-flex w-100">
                            <button type="button" className="btn btn-primary w-25"
                            >
                                Editar
                            </button>

                            <button type="button" className="btn btn-primary w-25"
                            >   
                            Eliminar  
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}
