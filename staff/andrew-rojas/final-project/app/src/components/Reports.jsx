

function Reports() {
  return (
    
    <>
    <div className="grid-create">
      <div className="item-create">
        <div className="container-form-2">  
  
        <form className="form-create">
        <div className="form__field">
          <label htmlFor="name">Article name :</label>
          <input className="input" type="text" name="name" placeholder="articlename" id="articlename"/>
        </div>
  
        <div className="form__field">
          <label htmlFor="name">Output Quantity :</label>
          <input className="input" type="text" name="category" placeholder="category" id="category"/>
        </div>
  
       </form>
        </div>   
      </div>
    </div>
  
    <button className="button-create">Update</button>
  </>
  )
}

export default Reports