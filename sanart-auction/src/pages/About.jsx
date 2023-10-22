import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    UncontrolledAccordion,
} from 'reactstrap';



const About = () => {

    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    return (
        <>
            <div className="About">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <UncontrolledAccordion
                                defaultOpen={[
                                    '1',
                                    '2'
                                ]}
                                stayOpen
                            >
                                <AccordionItem>
                                    <AccordionHeader targetId="1">
                                        <div className="a_acor_name">
                                            «sanartauction» elektron savdo platformasi to‘g‘risida
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <div className="a_acor_p">
                                            Elektron onlayn-auksionlar Internet tarmog‘i orqali ishtirok etish imkonini beradigan hamda buyurtmalarni qabul qilish va g‘olibni aniqlash tartib-taomillariga aralashuvni istisno etadigan maxsus dasturiy mahsulotdan foydalanilgan holda o‘tkaziladi.
                                        </div>
                                    </AccordionBody>
                                    <AccordionHeader targetId="2">
                                        <div className="a_acor_name">
                                            «sanartauction» elektron savdo platformasi to‘g‘risida
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <div className="d-flex align-items-center">
                                            <div className="a_acor_box">
                                                <img src="/img/icon_pdf.png" alt="" />
                                                Namunaviy shartnoma
                                            </div>
                                            <div className="a_acor_box">
                                                <img src="/img/icon_pdf.png" alt="" />
                                                Namunaviy shartnoma
                                            </div>
                                            <div className="a_acor_box">
                                                <img src="/img/icon_pdf.png" alt="" />
                                                Namunaviy shartnoma
                                            </div>
                                            <div className="a_acor_box">
                                                <img src="/img/icon_pdf.png" alt="" />
                                                Namunaviy shartnoma
                                            </div>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About