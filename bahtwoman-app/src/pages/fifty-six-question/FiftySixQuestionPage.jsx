import React from "react";

const FiftySixQuestionPage = () => {
  return (
    <div className="FiftySixQuestionPage">
      <div className="col-9 right">
        <div className="HundredQuestionsStartPage HundredRight">
          <div
            className="hundered_ques_title"
            contentEditable="false"
            dangerouslySetInnerHTML={{ __html: `${oneQues.name}` }}
          />
          {oneQues.for_done_front ? (
            <>
              <div className="mb-5">
                {oneQues.for_done_front.map((item, index) => (
                  <div className="hundered_ptichkas" key={index}>
                    <div className="ptichka_image">
                      <img className="" src={ptich} alt="" />
                    </div>
                    <div className="hundered_ptichkas_p">{item.name}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>

            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange2}
            >
              {oneQues?.answer_variants?.map((item, index) => (
                <>
                  <FormControlLabel
                    key={index}
                    value={item.name}
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={item.name}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </>
              ))}
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <div className="ans_h3">{oneQues?.second_name}</div>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              {oneQues?.for_question_2?.map((item, index) => (
                <>
                  <FormControlLabel
                    value={
                      <div
                        contentEditable="false"
                        dangerouslySetInnerHTML={{
                          __html: `${item.name}`,
                        }}
                      />
                    }
                    control={
                      <Radio
                        sx={{
                          color: "silver",
                          "&.Mui-checked": {
                            color: "#FFD0D4",
                          },
                        }}
                      />
                    }
                    label={
                      <div
                        contentEditable="false"
                        dangerouslySetInnerHTML={{
                          __html: `${item.name}`,
                        }}
                      />
                    }
                  />
                </>
              ))}
            </RadioGroup>
          </FormControl>

          {oneQues.second_side_question?.map((item, index) => (
            <>
              <div key={index} className="second_side_question">
                <div className="second_side_1">
                  {"Сиз ушбу саволнинг проработкасини олишни ("}
                  {item.second_side_1}
                </div>
                <div className="second_side_2">{item.second_side_2}</div>
                <div className="second_side_3">
                  {item.second_side_3}
                  {")"} <span>хоҳлайсизми ёки йўқми?</span>
                </div>
                <div className="second_side_4"></div>
              </div>
              <div className="for_second_side_hundered">
                <FormControl className="d-flex flex-column align-items-center justify-content-center">
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    onChange={handleChange2}
                  >
                    <FormControlLabel
                      value={item.variant_1}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={item.variant_1}
                      onChange={() => setYesOrNo("true")}
                    />
                    <FormControlLabel
                      value={item.variant_2}
                      control={
                        <Radio
                          sx={{
                            color: "silver",
                            "&.Mui-checked": {
                              color: "#FFD0D4",
                            },
                          }}
                        />
                      }
                      label={item.variant_2}
                      onChange={() => setYesOrNo("false")}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </>
          ))}
          {pk === 110 ? (
            <>
              <button className="btn myBtn">Tugatish</button>
            </>
          ) : (
            <>
              <button onClick={sendAnswer} className="btn myBtn">
                Keyingi savol
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiftySixQuestionPage;
