import { getText } from '../locales'

const HeadInfo = () => {
    return (
        <>
            <div className="HeadInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="head_info_name">
                                {getText('head_info_name')}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="head_info_box">
                                <img src="/img/icon_1.png" alt="" />
                                <div className="h_info_text d-flex flex-column">
                                    <div className="h_info_text_h">
                                        {getText('h_info_text_h_1')}
                                    </div>
                                    <div className="h_info_text_p">
                                        {getText('h_info_text_p_1')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-9">
                            <div className="head_info_box">
                                <img src="/img/icon_2.png" alt="" />
                                <div className="h_info_text d-flex flex-column">
                                    <div className="h_info_text_h">
                                        {getText('h_info_text_h_2')}
                                    </div>
                                    <div className="h_info_text_p">
                                        {getText('h_info_text_p_2')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="head_info_box">
                                <img src="/img/icon_3.png" alt="" />
                                <div className="h_info_text d-flex flex-column">
                                    <div className="h_info_text_h">
                                        {getText('h_info_text_h_3')}
                                    </div>
                                    <div className="h_info_text_p">
                                        {getText('h_info_text_p_3')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-9">
                            <div className="head_info_box">
                                <img src="/img/icon_4.png" alt="" />
                                <div className="h_info_text d-flex flex-column">
                                    <div className="h_info_text_h">
                                        {getText('h_info_text_h_4')}
                                    </div>
                                    <div className="h_info_text_p">
                                        {getText('h_info_text_p_4')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadInfo