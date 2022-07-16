import Head from "next/head";
import Image from "next/image";
import { Combobox } from "react-widgets";
import { useState, useEffect } from "react";

export default function Home() {
  const [age, setAge] = useState(30);
  const [bp, setBp] = useState(70);
  const [sg, setSg] = useState(1.025);
  const [al, setAl] = useState(0);
  const [su, setSu] = useState(0);
  const [pc, setPc] = useState('normal');
  const [bgr, setBgr] = useState(80);
  const [bu, setBu] = useState(33);
  const [sc, setSc] = useState(1);
  const [hemo, setHemo] = useState(15);
  const [pcv, setPcv] = useState(44);
  const [htn, setHtn] = useState('no');

  const [output, setOutput] = useState("");

  const fields = [age, bp, sg, al, su, pc, bgr, bu, sc, hemo, pcv, htn];
  const fieldsMethod = [
    setAge,
    setBp,
    setSg,
    setAl,
    setSu,
    setPc,
    setBgr,
    setBu,
    setSc,
    setHemo,
    setPcv,
    setHtn,
  ];

  const predictClicked = async () => {
    fields = { array: fields }
    setOutput("Wait a second until the model predicts...");

    const resp = await fetch("https://chronickidneydiseasepredictor.herokuapp.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    })
      .then(res => {
        res.json()
        .then((res)=>{
          setOutput(res);
        })

      })
      .catch(err => {
        setOutput("Error occured while trying to predict!");
      });
 };


  return (
    <div>
      <Head>
        <title>Chronic Kidney Disease Predictor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-row justify-center items-center font-nunito mx-5">
        <div>
          <div className="text-3xl font-extrabold text-center">
            Welcome to Chronic Kidney Disease Predictor
          </div>
          <div className="text-xl font-bold text-center">
            Fill the below entries with a correct data to get how likely you are
            suffering from chronic kidney disease.
          </div>
        </div>
        <form className="flex-row items-center min-h-screen justify-center mx-20 mb-10 mt-8 text-lg space-y-5">
          <div className="flex items-center">
            <div className="mr-8">Age</div>
            <input
              type="number"
              min="1"
              max="150"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              placeholder="Enter your age"
              className="bg-white text-black w-full"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Blood pressure</div>
            <input
              type="number"
              min="10"
              max="500"
              value={bp}
              onChange={(e) => setBp(Number(e.target.value))}
              placeholder="Enter your blood pressure"
              className="bg-white text-black w-full"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Specific gravity</div>
            <input
              type="number"
              min="1"
              max="2"
              value={sg}
              onChange={(e) => setSg(Number(e.target.value))}
              placeholder="Enter your specific gravity"
              className="bg-white text-black w-full"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Albumin</div>
            <input
              type="number"
              min="0"
              max="5"
              value={al}
              onChange={(e) => setAl(Number(e.target.value))}
              placeholder="Enter your albumin"
              className="bg-white text-black w-full"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Sugar</div>
            <input
              type="number"
              min="0"
              max="5"
              value={su}
              onChange={(e) => setSu(Number(e.target.value))}
              placeholder="Enter your sugar"
              className="bg-white text-black w-full"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Pus Cell</div>
            <div className="bg-white text-black w-full">
              <Combobox
                hideCaret
                hideEmptyPopup
                defaultOpen={false}
                defaultValue="normal"
                value={pc}
                onChange={(e) => setPc(e)}
                data={["normal", "abnormal"]}
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Blood Glucose Random</div>
            <input
              type="number"
              min="10"
              max="500"
              value={bgr}
              onChange={(e) => setBgr(Number(e.target.value))}
              placeholder="Enter your blood glucose random level"
              className="bg-white text-black w-full"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Blood Urea</div>
            <input
              type="number"
              min="1"
              max="500"
              value={bu}
              onChange={(e) => setBu(Number(e.target.value))}
              placeholder="Enter your blood urea level"
              className="bg-white text-black w-full"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Serum Creatinine</div>
            <input
              type="number"
              min="1"
              max="500"
              value={sc}
              onChange={(e) => setSc(Number(e.target.value))}
              placeholder="Enter your serum creatinine level"
              className="bg-white text-black w-full"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Hemoglobin</div>
            <input
              type="number"
              min="1"
              max="500"
              value={hemo}
              onChange={(e) => setHemo(Number(e.target.value))}
              placeholder="Enter your hemoglobin level"
              className="bg-white text-black w-full"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Packed Cell Volume</div>
            <input
              type="number"
              min="1"
              max="500"
              value={pcv}
              onChange={(e) => setPcv(Number(e.target.value))}
              placeholder="Enter your packed cell volume level"
              className="bg-white text-black w-full"
            ></input>
          </div>
          <div className="flex items-center">
            <div className="mr-8">Hypertension</div>
            <div className="bg-white text-black w-full">
              <Combobox
                hideCaret
                hideEmptyPopup
                defaultOpen={false}
                defaultValue="no"
                value={htn}
                onChange={(e) => setHtn(e)}
                data={["no", "yes"]}
              />
            </div>
          </div>
          <input
            type={"button"}
            value={"Predict"}
            onClick={predictClicked}
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
          <div className="text-xl text-center">{JSON.stringify(output)}</div>
        </form>
      </div>
      <div className="text-xl mb-12 text-center">
        Made by
        <a
          href="https://abdesol.me/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500"
        >
          {" "}
          Abdella Solomon❤️
        </a>
      </div>
    </div>
  );
}
