import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

const Interactive = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <div className="Interactive">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Nav tabs>
                                <NavItem className=''>
                                    <NavLink id='1' className={classnames({ active: activeTab === '1', })} onClick={() => { toggle('1'); }}
                                    >
                                        <div className="inter_nav_name">
                                            Bayonnomani tekshirish
                                        </div>
                                    </NavLink>
                                    <NavLink id='2' className={classnames({ active: activeTab === '2', })} onClick={() => { toggle('2'); }}
                                    >
                                        <div className="inter_nav_name">
                                            Ijara shartnomasini tekshirish
                                        </div>
                                    </NavLink>
                                    <NavLink id='3' className={classnames({ active: activeTab === '3', })} onClick={() => { toggle('3'); }}
                                    >
                                        <div className="inter_nav_name">
                                            Loginni aniqlash
                                        </div>
                                    </NavLink>
                                    <NavLink id='4' className={classnames({ active: activeTab === '4', })} onClick={() => { toggle('4'); }}
                                    >
                                        <div className="inter_nav_name">
                                            Loginni almashtirish
                                        </div>
                                    </NavLink>
                                    <NavLink id='5' className={classnames({ active: activeTab === '5', })} onClick={() => { toggle('5'); }}
                                    >
                                        <div className="inter_nav_name">
                                            Nohalol ishtirokchini tekshirish
                                        </div>
                                    </NavLink>
                                    <NavLink id='6' className={classnames({ active: activeTab === '6', })} onClick={() => { toggle('6'); }}
                                    >
                                        <div className="inter_nav_name">
                                            Sertifikatlar reestri
                                        </div>
                                    </NavLink>
                                    <NavLink id='7' className={classnames({ active: activeTab === '7', })} onClick={() => { toggle('7'); }}
                                    >
                                        <div className="inter_nav_name">
                                            Undiruvchi mulklari
                                        </div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="col-12">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" className=''>
                                    <div className="inter_tab_name">
                                        QR-kodlik bayonnomani tekshirish
                                    </div>
                                    <div className="inter_tab_box">
                                        <form className="inter_tab_inp_box">
                                            <div className='d-flex gap-4'>
                                                <input placeholder='G’olib STIR/JSHSHIRi' type="text" name="" id="" />
                                                <input placeholder='Lot raqami' type="text" name="" id="" />
                                            </div>
                                            <button>Tekshirish</button>
                                        </form>
                                        <div className="inter_tab_info">
                                            Ushbu shakl orqali QR-kodlik bayonnoma holatini tekshirishingiz mumkin. Buning uchun, g‘olibning STIR/JSHSHIRi va lot raqamini kiriting. Agar, bayonnoma holati "Bekor qilindi"bo‘lsa, ushbu bayonnoma hozirda amalda mavjud emas.
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2" className=''>
                                    <div className="inter_tab_name">
                                        Ijara shartnomasini tekshirish
                                    </div>
                                    <div className="inter_tab_box">
                                        <form className="inter_tab_inp_box">
                                            <div className='d-flex gap-4'>
                                                <input placeholder='G’olib STIR/JSHSHIRi' type="text" name="" id="" />
                                                <input placeholder='Lot raqami' type="text" name="" id="" />
                                            </div>
                                            <button>Tekshirish</button>
                                        </form>
                                        <div className="inter_tab_info">
                                            Ushbu shakl orqali QR-kodlik bayonnoma holatini tekshirishingiz mumkin. Buning uchun, g‘olibning STIR/JSHSHIRi va lot raqamini kiriting. Agar, bayonnoma holati "Bekor qilindi"bo‘lsa, ushbu bayonnoma hozirda amalda mavjud emas.
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3" className=''>
                                    <div className="inter_tab_name">
                                        Loginni aniqlash
                                    </div>
                                    <div className="inter_tab_box">
                                        <div className="inter_tab_info_2 mb-4">
                                            <span>
                                                Eslatma:
                                            </span>
                                            Ushbu shakl orqali QR-kodlik bayonnoma holatini tekshirishingiz mumkin. Buning uchun, g‘olibning STIR/JSHSHIRi va lot raqamini kiriting. Agar, bayonnoma holati "Bekor qilindi"bo‘lsa, ushbu bayonnoma hozirda amalda mavjud emas.
                                        </div>

                                        <form className="inter_tab_inp_box">
                                            <div className='d-flex gap-4'>
                                                <input placeholder='STIR yoki JSHSHIR' type="text" name="" id="" />
                                                <button className="inter_btn_search">
                                                    <img src="/img/icon_search.png" alt="" />
                                                    Izlash
                                                </button>
                                            </div>
                                            <div className="inter_tab_inp_ex">
                                                Namuna: 123 456 789 yoki 123 456 789 101 12
                                            </div>
                                        </form>
                                    </div>
                                </TabPane>
                                <TabPane tabId="4" className=''>
                                    <div className="inter_tab_name">
                                        Loginni almashtirish
                                    </div>
                                    <div className="inter_tab_box">
                                        <div className="inter_tab_info_2 mb-4">
                                            <span>
                                                Eslatma:
                                            </span>
                                            Ushbu shakl orqali QR-kodlik bayonnoma holatini tekshirishingiz mumkin. Buning uchun, g‘olibning STIR/JSHSHIRi va lot raqamini kiriting. Agar, bayonnoma holati "Bekor qilindi"bo‘lsa, ushbu bayonnoma hozirda amalda mavjud emas.
                                        </div>

                                        <form className="inter_tab_inp_box">
                                            <div className='d-flex gap-4'>
                                                <input placeholder='STIR yoki JSHSHIR' type="text" name="" id="" />
                                                <button className="inter_btn_search">
                                                    <img src="/img/icon_search.png" alt="" />
                                                    Izlash
                                                </button>
                                            </div>
                                            <div className="inter_tab_inp_ex">
                                                Namuna: 123 456 789 yoki 123 456 789 101 12
                                            </div>
                                        </form>
                                    </div>
                                </TabPane>
                                <TabPane tabId="5" className=''>
                                    <div className="inter_tab_name">
                                        Nohalol ishtirokchini tekshirish
                                    </div>
                                    <div className="inter_tab_box">
                                        <form className="inter_tab_inp_box">
                                            <div className='d-flex gap-4'>
                                                <input placeholder='STIR yoki JSHSHIR' type="text" name="" id="" />
                                                <button className="inter_btn_search">
                                                    <img src="/img/icon_search.png" alt="" />
                                                    Izlash
                                                </button>
                                            </div>
                                            <div className="inter_tab_inp_ex">
                                                Namuna: 123 456 789 yoki 123 456 789 101 12
                                            </div>
                                        </form>
                                    </div>
                                </TabPane>
                                <TabPane tabId="6" className=''>
                                    <div className="inter_tab_name">
                                        Sertifikatlar reestri
                                    </div>
                                    <div className="inter_tab_box">
                                        <form className="inter_tab_inp_box">
                                            <div className='d-flex gap-4'>
                                                <input placeholder='STIR yoki JSHSHIR' type="text" name="" id="" />
                                                <button className="inter_btn_search">
                                                    <img src="/img/icon_search.png" alt="" />
                                                    Izlash
                                                </button>
                                            </div>
                                            <div className="inter_tab_inp_ex">
                                                Namuna: 123 456 789 yoki 123 456 789 101 12
                                            </div>
                                        </form>
                                    </div>
                                </TabPane>
                                <TabPane tabId="7" className=''>
                                    <div className="inter_tab_name">
                                        Undiruvchi mulklari
                                    </div>
                                    <div className="inter_tab_box">
                                        <form className="inter_tab_inp_box">
                                            <div className='d-flex gap-4'>
                                                <input placeholder='G’olib STIR/JSHSHIRi' type="text" name="" id="" />
                                                <input placeholder='Lot raqami' type="text" name="" id="" />
                                            </div>

                                            <button className="inter_btn_search">
                                                <img src="/img/icon_search.png" alt="" />
                                                Izlash
                                            </button>
                                        </form>

                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interactive