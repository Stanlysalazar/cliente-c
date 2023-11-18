export function Formulario() {
    return (
      <>
        <form>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Usuario
                </label>
                <input type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Entrada
                </label>
                <input type="date" className="form-control"/>
              </div>
            </div>
            <div className="col-12 col-md-6">
            <div className="mb-3">
                <label className="form-label">
                  Telefono
                </label>
                
                <input type="" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Salida
                </label>
                
                <input type="date" className="form-control"/>
  
              </div>
            </div>
          </div>
          <div className="row">
          <button type="button" className="btn btn-primary">Primary</button>
          </div>
        </form>
      </>
    );
  }