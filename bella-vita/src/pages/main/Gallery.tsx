import gallery1 from "@/assets/gallery1.png"
import wedding from "@/assets/wedding.png"
import {useEffect, useState} from "react";
import FetchData from "../../service/FetchData.ts";
import {toast} from "react-toastify";
import IGalleryType from "../../types/IGalleryType.ts";
import FetchingLoader from "../../components/FetchingLoader.tsx";

const Gallery = () => {
    const [items, setItems] = useState<IGalleryType[]>([])
    const [isItem, setIsItem] = useState<boolean>(false)

    const getItems = async () => {
        setIsItem(true)
        await FetchData.getGallery()
            .then((res) => {
                setItems(res.data);
                setIsItem(false)
            })
            .catch(() => {
                toast.error("Internal server error")
                setIsItem(false)
            })
    }

    useEffect((): void => {
        getItems()
    }, [])

    return (
        <div className="Gallery">
            <div className="container">
                <div className="row">
                    <div className="col-12 position-relative">
                        <div className="circle"><img src={wedding} alt=""/></div>
                        <h1>Galereya</h1>

                        <div className="image-grid">
                            {isItem ?
                                <FetchingLoader/>
                                :
                                <>
                                    <img src={gallery1} className="top-image" alt="Image 1"/>
                                    <div className="bottom-images">
                                        {items && items.map((item: IGalleryType) => (
                                            <img key={item.id} src={item.image} className="" alt=""/>
                                        ))}
                                    </div>

                                </>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;