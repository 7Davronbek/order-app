import circle from "@/assets/circle.png";
import search from "@/assets/search.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Feedback} from "@/components";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import IAccessoryCategoryType from "../../types/IAccessoryCategoryType.ts";
import FetchData from "../../service/FetchData.ts";
import {toast} from "react-toastify";
import IAccessoryType, {
    IProductImageType,
} from "../../types/IAccessoryType.ts";
import FetchingLoader from "../../components/FetchingLoader.tsx";
import {getText} from "../../locales";


import {CModal, CModalBody, CModalHeader, CModalTitle} from '@coreui/react'

const WeddingDress = () => {
    const [visible, setVisible] = useState(false)

    const {id} = useParams();

    const [headerName, setHeaderName] = useState<string>("");
    const [filterBtn, setFilterBtn] = useState<string>("");
    const [items, setItems] = useState<IAccessoryType[]>([]);
    const [filteredItems, setFilteredItems] = useState<IAccessoryType[]>([]);
    const [subCategory, setSubCategory] = useState<IAccessoryCategoryType[]>([]);
    const [isItem, setIsItem] = useState<boolean>(false);
    const [code, setCode] = useState<string>("");

    const getItems = async () => {
        // setIsItem(true);
        if (id != null) {
            await FetchData.getAccessory(id, code)
                .then((res) => {
                    setItems(res.data);
                    setFilteredItems(res.data);
                    setIsItem(false);
                })
                .catch(() => {
                    toast.error("Internal server error");
                    setIsItem(false);
                });
        }
    };

    useEffect(() => {
        getItems();
    }, [code]);

    const getSubCategory = async () => {
        if (id != null) {
            await FetchData.getAccessoryType(id)
                .then((res) => {
                    setSubCategory(res.data);
                })
                .catch(() => {
                    toast.error("Internal server error");
                });
        }
    };

    const getHeader = async () => {
        await FetchData.getAccessoryCategory()
            .then((res) => {
                const response: IAccessoryCategoryType[] = res.data.filter(
                    (i: IAccessoryCategoryType) => i.id === Number(id)
                );
                setHeaderName(response[0].name);
            })
            .catch(() => {
                toast.error("Internal server error");
            });
    };

    useEffect(() => {
        if (filterBtn === "") {
            setFilteredItems(items);
        } else {
            const filter = items.filter(
                (i) => i.sub_category.id === Number(filterBtn)
            );
            setFilteredItems(filter);
        }
    }, [filterBtn]);

    useEffect(() => {
        setFilterBtn("");
        getHeader();
        getItems();
        getSubCategory();
    }, [id]);
    return (
        <>
            {isItem ? (
                <FetchingLoader/>
            ) : (
                <div className={"WeddingDress"}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="secondaryText text-center ">
                                    <img className="circle center" src={circle} alt=""/>{" "}
                                    {getText("catalog")}
                                </h1>
                                <h2 className="mainText text-center">{headerName}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="btnWrap">
                                    <button
                                        onClick={() => setFilterBtn("")}
                                        className={`btn button ${filterBtn == "" && "active"}`}
                                    >
                                        {getText("all")}
                                    </button>

                                    {subCategory &&
                                        subCategory.map((item: IAccessoryCategoryType) => (
                                            <button
                                                onClick={() => setFilterBtn(String(item.id))}
                                                key={item.id}
                                                className={`btn button ${filterBtn === String(item.id) && "active"
                                                }`}
                                            >
                                                {item.name}
                                            </button>
                                        ))}
                                </div>
                            </div>
                            <div className="col-12 mb-3 d-flex justify-content-end">
                                <div className="inputWrapSearch">
                                    <div className="search">
                                        <img src={search} alt=""/>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder={getText("search")}
                                        className="form-control"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>
                                {" "}
                            </div>
                        </div>
                        <div className="row">
                            {filteredItems.length === 0 ? (
                                <h5 className={"text-center"}> {getText("empty")}</h5>
                            ) : (
                                filteredItems.map((item: IAccessoryType) => (
                                    <div
                                        key={item.id}
                                        className="col-xl-3 col-lg-4 col-6 p-sm-3 p-0 mypading"
                                    >
                                        <div className="cards cardsStyle">
                                            <Swiper
                                                pagination={true}
                                                navigation={true}
                                                loop={true}
                                                modules={[Navigation, Pagination]}
                                                className="mySwiper"
                                            >
                                                {item.product_images &&
                                                    item.product_images.map(
                                                        (item2: IProductImageType) => (
                                                            <SwiperSlide key={item2.id}>
                                                                <div className="images">
                                                                    <img
                                                                        src={item2.image}
                                                                        className="w-100"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </SwiperSlide>
                                                        )
                                                    )}
                                            </Swiper>

                                            <div className="wrap">
                                                <div className="flex">
                                                    <h4>{getText("typeOfDress")}</h4>
                                                    <h5>{item.sub_category?.name}</h5>
                                                </div>
                                                <div className="flex">
                                                    <h4>{getText("sizeOfDress")}</h4>
                                                    <h5>{item.dress_size}</h5>
                                                </div>
                                                <div className="flex">
                                                    <h4>{getText("price")}</h4>
                                                    <h5 className={"bold"}>${item.price}</h5>
                                                </div>
                                                <div className="flex">
                                                    <h4>{getText("product_code")}</h4>
                                                    <h5>{item.product_code ? item.product_code : "-"}</h5>
                                                </div>

                                                <a className='cursor'
                                                   onClick={() => setVisible(!visible)}>{getText("contactUs")}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
            <CModal
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader onClick={() => setVisible(true)}>
                    <CModalTitle id="LiveDemoExampleLabel">{getText("contactUs")}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <Feedback
                        type={`Обратная связь от каталога`}
                        mainText={''}
                        secondaryText={''}
                    />
                </CModalBody>
            </CModal>

            <Feedback
                type={"Обратная связь"}
                mainText={getText("individualDes")}
                secondaryText={getText("individualT")}
            />
        </>
    );
};

export default WeddingDress;

/**
 *
 *    const {id} = useParams();
 *     const [isLoading, setIsLoading] = useState<boolean>(true)
 *     const [isItem, setIsItem] = useState<boolean>(false)
 *     const [items, setItems] = useState<IAccessoryType[]>([])
 *     const [types, setTypes] = useState<IAccessoryTypesType[]>([])
 *     const [btn, setBtn] = useState<number>(0)
 *     const [newItems, setNewItems] = useState<Array<IAccessoryType>>([])
 *
 *     const getAccessoryTypes = async () => {
 *         setIsItem(true)
 *         await FetchData.getAccessoryType()
 *             .then((res) => {
 *                 const data: IAccessoryTypesType[] = res.data;
 *                 // data = data.filter(i => i.id === Number(id))
 *
 *                 setTypes(data);
 *                 setIsItem(false)
 *             })
 *             .catch(() => {
 *                 toast.error("Internal server error")
 *                 setIsItem(false)
 *             })
 *     }
 *
 *     const getItems = async () => {
 *         setIsItem(true)
 *         await FetchData.getAccessory()
 *             .then((res) => {
 *                 let category: IAccessoryType[] = res.data;
 *                 category = category.filter(i => i.category === Number(id))
 *
 *                 setItems(category);
 *                 setIsItem(false)
 *             })
 *             .catch(() => {
 *                 toast.error("Internal server error")
 *                 setIsItem(false)
 *             })
 *     }
 *
 *     useEffect(() => {
 *         setBtn(0)
 *     }, [id]);
 *
 *     useEffect(() => {
 *         const getItem = (): void => {
 *             const filteredItem: IAccessoryType[] = items.filter((i: IAccessoryType) => i.type === btn);
 *             setNewItems(filteredItem);
 *         }
 *         getItem()
 *     }, [btn]);
 *
 *     useEffect(() => {
 *         setTimeout(() => {
 *             setIsLoading(false)
 *         }, 1000)
 *         getItems();
 *         getAccessoryTypes()
 *     }, [id])
 *     */
