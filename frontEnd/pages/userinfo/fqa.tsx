import type { NextPage } from "next";
import SEO from "@components/SEO";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FQA: NextPage = () => {
  const [fqa, setFqa] = useState([
    {
      question: "장학금의 종류는 뭐가 있나요?",
      answer: "크게 등록금성, 생활비성, 활동장학금 으로 나눌 수 있습니다",
    },
    {
      question: "장학금의 종류는 뭐가 있나요?",
      answer: "크게 등록금성, 생활비성, 활동장학금 으로 나눌 수 있습니다",
    },
    {
      question: "장학금의 종류는 뭐가 있나요?",
      answer: "크게 등록금성, 생활비성, 활동장학금 으로 나눌 수 있습니다",
    },
    {
      question: "장학금의 종류는 뭐가 있나요?",
      answer: "크게 등록금성, 생활비성, 활동장학금 으로 나눌 수 있습니다",
    },
  ]);
  return (
    <div className="p-5">
      <SEO title="자주 묻는 질문" />
      <p className="text-2xl text-center font-bold">
        자주 묻는 질문 TOP {fqa.length}
      </p>
      <div className="mt-10">
        {fqa.map((data, idx) => (
          <Accordion
            key={idx}
            className="bg-gray-50 rounded-b-2xl mb-3 border-none"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Q{idx + 1}: {data.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>A : {data.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FQA;
