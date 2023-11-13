import React from "react";
import { Link } from "react-router-dom";

const CourseLinks = () => {
  return (
    <div className="CourseLinks WithBg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>"Baxtli ayol" kursini o'tish bo'yicha:</h1>
            <Link href="/" className="link">
              Ўқув материалларимизни яратишда ишлатилган адабиётлар ҳақида
              маълумот.
            </Link>
            <Link href="/" className="link">
              Курсларимизни ўтган аёл-қизларнинг отзивлари.
            </Link>
            <Link href="/" className="link">
              Курсни ўтиш бўйича Йўриқнорма.
            </Link>
            <Link href="/" className="link">
              Kursni sotib olish bo'yicha ko'rsatmalar
            </Link>
            <Link href="/" className="link">
              Kursni sotib olsih uchun ro'yhatdan o'tish:
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLinks;
