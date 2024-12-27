import { useParams } from "react-router-dom";
import { useLanguage } from "../context/languageContext";
import { useEffect, useState } from "react";
import httpClient from "../shared/axios";
import { formatDate } from "../context/utils";
import { useTranslation } from "react-i18next";
import pdf from '../images/icons/pdf-icon.svg'

export default function RegulationDocs() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { language } = useLanguage();
  const [data, setData] = useState({});

  useEffect(() => {
    const getRegulationDoc = async () => {
      const { data } = await httpClient.get(`/regulatory-documents/${id}`);
      setData(data);
    };

    getRegulationDoc();
  }, [id, language]);

  return (
    <div className="dasturlar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="mb-5">Name: {data?.name}</h5>
          </div>
        </div>

        <div className="row">
          {!!data?.regulatory_document_items &&
            data?.regulatory_document_items.map((item) => (

              <div key={item.news_id} className="col-12 mb-2">
                <div className="card">
                  <div className="card-body">
                    <div className='d-flex'>
                      <img src={pdf} alt="pdf-icon" />
                      <h4>{item.name}</h4>
                    </div>
                    <div className='d-flex'>
                      <a target='_blank' rel="noreferrer" href={item.document}>
                        <button className='view'>{t("darsopen")}</button>
                      </a>
                      <a href={`/${item.document}`} download={item.name}>
                        <button className='download'>{t("darssave")}</button>
                      </a>
                    </div>
                  </div>
                  <i> {formatDate(item.created_at)}</i>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
