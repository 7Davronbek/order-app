import { getText } from '../locales'

const HeadContact = () => {
    return (
        <>
            <div className="HeadContact">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12">
                            <div className="h_contact_name">
                                {getText("h_contact_name")}
                            </div>
                        </div>

                        <div className="col-md-2 col-6">
                            <div className="head_contact_box">
                                <img src="/img/icon_con_1.png" alt="" />
                                <div className="c_head_name">
                                    {getText("c_head_name_1")}
                                </div>
                                <a href='tel:+998903287070' className="head_contact_phone">
                                    +998 (90) 328-70-70
                                </a>
                                <a href='tel:+998997644422' className="head_contact_phone">
                                    +998 (99) 764-44-22
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="head_contact_box">
                                <img src="/img/icon_con_2.png" alt="" />
                                <div className="c_head_name">
                                    {getText("c_head_name_2")}
                                </div>
                                <div className="head_contact_phone">
                                    {getText("c_head_name_3")}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-6 mt-md-0 mt-5">
                            <div className="head_contact_box">
                                <img src="/img/icon_con_3.png" alt="" />
                                <div className="c_head_name">
                                    {getText("c_head_name_4")}
                                </div>
                                <div className="head_contact_phone">
                                    {getText("c_head_name_5")}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-6 mt-md-0 mt-5">
                            <div className="head_contact_box">
                                <img src="/img/icon_con_4.png" alt="" />
                                <div className="c_head_name">
                                    Email
                                </div>
                                <a target={'_blank'} rel="noreferrer" href='mailto: ravshansalihov1144@gmail.com' className="head_contact_phone">
                                    ravshansalihov1144@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-6 mt-md-0 mt-5">
                            <div className="head_contact_box">
                                <img src="/img/profile.svg" alt="" />
                                <div className="c_head_name">
                                {getText("c_head_name_6")}
                                </div>
                                <a  className="head_contact_phone">
                                    
                                {getText("c_head_name_7")}
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="map_company">
                    <iframe className='map_con' title='Location' loading="lazy" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2996.026091338955!2d69.2472581!3d41.330046!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzQ4LjIiTiA2OcKwMTQnNTkuNCJF!5e0!3m2!1sru!2s!4v1715968957066!5m2!1sru!2s" frameBorder="0"></iframe>
                </div>
            </div>
        </>
    )
}

export default HeadContact