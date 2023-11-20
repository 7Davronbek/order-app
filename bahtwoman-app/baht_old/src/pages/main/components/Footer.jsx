import footerLogo from "../../../assets/footerLogo.svg";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <img src={footerLogo} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
