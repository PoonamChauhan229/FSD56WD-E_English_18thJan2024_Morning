import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
   <>
      {/* With a load and reload */}
     {/* <a href="/">Home</a> &nbsp;
     <a href="/addcolor">AddColor</a>  &nbsp;
     <a href="/addmovie">AddMovie</a>   */}
    {/* <br></br> */}
    {/* Without a referesh and load */}
     {/* <Link to='/'>Home</Link>  &nbsp;
     <Link to='/addcolor'>AddColor</Link>  &nbsp;
     <Link to='/addmovie'>AddMovie</Link>  &nbsp; */}
          {/* Task:
     Choose a navbar , whichever navbar u like it from bootstrap
     implement here and do the necessasry changes
     11:20 : 11:30-11:35      
     
     */}

<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Big Show</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/addcolor'>AddColor</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/addmovie'>AddMovie</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
   
   </>
  )
}

export default Navbar