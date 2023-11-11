import { useNavigate } from "react-router-dom";
import { NavigationLayout } from "../../components";

const ChildrenPage = () => {
    const navigate = useNavigate();
    return (
      <div className="ChildrenPage ">
        <NavigationLayout>
          <div className="center">
            <div className="cards">
              <h1>8. Нечта фарзандингиз бор?</h1>
  
              <input
                placeholder="Farzandlar soni"
                type="text"
                className="form-control "
              />
  
              <button onClick={() => navigate("/children")} className="btn myBtn">
                Keyingi savol
              </button>
            </div>
          </div>
        </NavigationLayout>
      </div>
  )
}

export default ChildrenPage
