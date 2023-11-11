"use client";

import { supabase_client } from "@/lib/supabase-client";
import { useEffect, useState } from "react";

const Operators = {
  EQUAL: "equal",
  NOT_EQUAL: "not_equal",
  ANSWERED: "answered",
  NOT_ANSWERED: "not_answered",
};

const OperatorsOptions = {
  [Operators.EQUAL]: { text: "Equal", hasParameter: true },
  [Operators.NOT_EQUAL]: { text: "Not Equal", hasParameter: true },
  [Operators.ANSWERED]: { text: "Answered", hasParameter: false },
  [Operators.NOT_ANSWERED]: { text: "Not Answered", hasParameter: false },
};

const questionTypes = [
  {
    value: "text",
    description: "Text",
    operators: [
      Operators.EQUAL,
      Operators.NOT_EQUAL,
      Operators.ANSWERED,
      Operators.NOT_ANSWERED,
    ],
  },
  {
    value: "number",
    description: "Number",
    operators: [Operators.EQUAL],
  },
  {
    value: "adherence",
    description: "Yes/No",
    operators: [Operators.NOT_EQUAL],
  },
  {
    value: "date",
    description: "Date",
  },
  {
    value: "unique",
    description: "Unique",
  },
  {
    value: "multiple",
    description: "Multiple",
  },
];

function TextFilter({ questions, type }) {
  const [answer, setAnswer] = useState("");
  const [operatorSelected, setOperatorSelected] = useState("");
  const [questionType, setQuestionType] = useState(null);

  useEffect(() => {
    const question = questionTypes.find(item => item.value === type);
    setQuestionType(question);
  }, [type])

  return (
    <div>
      <h1>Filtro</h1>
      <form className="flex flex-row gap-2">
        <select className="px-3 py-2 w-[200px] text-sm text-slate-400 border border-slate-300 rounded outline-none">
          {questions.map((question, index) => {
            return <option value={index}>{question.question}</option>;
          })}
        </select>

        <select
          value={operatorSelected}
          onChange={(e) => setOperatorSelected(e.target.value)}
          className="px-3 py-2 w-[150px] text-sm text-slate-400 border border-slate-300 rounded outline-none"
        >
          {questionType?.operators?.map((operator) => {
            return (
              <option key={`operator-${operator}`} value={operator}>
                {OperatorsOptions[operator].text}
              </option>
            );
          })}
        </select>

        {OperatorsOptions[operatorSelected]?.hasParameter && (
          <input
            type="text"
            id="answer"
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="px-3 py-2 w-[200px] text-sm text-slate-400 border border-slate-300 rounded outline-none"
          />
        )}
      </form>
    </div>
  );
}

export default function CreateFields({ params }) {
  const [template, setTemplate] = useState("");
  const [question, setQuestion] = useState("");
  const [hint, setHint] = useState("");
  const [type, setType] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    supabase_client
      .from("templates")
      .select("name")
      .eq("template_id", params.id)
      .then((result, error) => {
        if (error) {
          console.log(error);
          return;
        }

        setTemplate(result.data[0].name);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    setQuestions([
      ...questions,
      {
        template,
        question,
        hint,
        type,
      },
    ]);

    clearFields();
  }

  function clearFields() {
    setQuestion("");
    setHint("");
    setType("");
  }

  return (
    <div className="antialiased flex min-h-screen flex-col justify-center items-center bg-slate-100 text-black">
      <div>
        <h1>{template}</h1>
        <p>{JSON.stringify(questions, null, 4)}</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="question" className="text-black">
              Question
            </label>
            <input
              type="text"
              id="question"
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="px-3 py-2 w-[500px] text-sm text-slate-400 border border-slate-300 rounded outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="hint" className="text-black">
              Hint
            </label>
            <input
              type="text"
              id="hint"
              name="hint"
              value={hint}
              onChange={(e) => setHint(e.target.value)}
              className="px-3 py-2 w-[500px] text-sm text-slate-400 border border-slate-300 rounded outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="type" className="text-black">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="px-3 py-2 w-[500px] text-sm text-slate-400 border border-slate-300 rounded outline-none"
            >
              {questionTypes.map((questionType) => (
                <option key={`type-${questionType.value}`} value={questionType.value}>
                  {questionType.description}
                </option>
              ))}
            </select>
          </div>
         
          <TextFilter questions={questions} type={type} />
          <div className="mt-5">
            <button className="bg-slate-900 font-semibold rounded py-2 text-white w-[200px]">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
