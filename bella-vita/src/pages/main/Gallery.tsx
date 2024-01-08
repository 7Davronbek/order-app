import gallery1 from "@/assets/gallery1.png"
import gallery2 from "@/assets/gallery2.png"
import gallery3 from "@/assets/gallery3.png"
import gallery4 from "@/assets/gallery4.png"
import gallery5 from "@/assets/gallery5.png"
import wedding from "@/assets/wedding.png"

const Gallery = () => {
    return (
        <div className="Gallery">
            <div className="container">
                <div className="row">
                    <div className="col-12 position-relative">
                        <div className="circle"><img src={wedding} alt=""/></div>
                        <h1>Galereya</h1>
                        <div className="image-grid">
                            <img src={gallery1} className="top-image" alt="Image 1"/>
                            <div className="bottom-images">
                                <img src={gallery2} alt="Image 2"/>
                                <img src={gallery3} alt="Image 3"/>
                                <img src={gallery4} alt="Image 4"/>
                                <img src={gallery5} alt="Image 5"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;