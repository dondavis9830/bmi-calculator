import React, { useState } from "react";
export default function Home() {
  const [item, useItem] = useState(0);
  // console.log(item);
  const [value, useValue] = useState(0);
  // console.log(value);

  function save() {
    let height = item * item;
    // console.log(height);
    let result = value / height;
    // console.log(result);
    let bmi = result.toFixed(2);
    // console.log(bmi);
    document.getElementById("BMI").innerHTML = bmi;
    if (bmi < 18.5) {
      document.getElementById("result").innerHTML = "Underweight";
    } else if (bmi < 23) {
      document.getElementById("result").innerHTML = "Normal Weight";
    } else if (bmi < 25) {
      document.getElementById("result").innerHTML = "Overweight";
    } else if (bmi < 30) {
      document.getElementById("result").innerHTML = "Obese Class I";
    } else {
      document.getElementById("result").innerHTML = "Obese Class II";
    }
  }
  return (
    <div>
      <div>
        <div className="min-h-screen bg-[url(https://wallpaperaccess.com/full/20587.jpg)] bg-cover bg-center bg-no-repeate z-0">
          {/* card */}
          <div className="py-10 px-20">
            <div className="bg-white/80 rounded-lg z-100 w-2/4 p-5">
              {/* intro */}
              <div className="text-center bg-amber-800 rounded-lg p-5">
                <h1 className="text-2xl font-bold text-white ">
                  BMI Calculator
                </h1>
                <h1 className="font-bold text-white/80">
                  Calculate Body Mass Index using WHO Asian guidelines
                </h1>
              </div>
              {/* height & weight */}
              <div className="flex justify-evenly gap-5 border-2 border-amber-700 my-2 rounded-lg p-3 mt-5 bg-slate-200">
                <div className="w-full">
                  <h1 className="text-2xl font-bold ">Height (m)</h1>
                  <input
                    onChange={(e) => useItem(e.target.value)}
                    type="number"
                    className="rounded-lg w-full"
                    placeholder="0"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-2xl font-bold ">Weight (kg)</h1>
                  <input
                    onChange={(e) => useValue(e.target.value)}
                    type="number"
                    className="rounded-lg w-full"
                    placeholder="0"
                  />
                </div>
              </div>
              {/* button */}
              <div className="mt-5 flex justify-center">
                <button
                  onClick={save}
                  className="bg-amber-800 font-bold text-white p-2 w-full rounded-lg"
                >
                  Calculate BMI
                </button>
              </div>
              <div className="mt-5 bg-amber-200 rounded-lg border-2 border-amber-800 py-2">
                <h1 className="text-center font-bold text-2xl text-red-800 py-2 underline">
                  Your BMI Score
                </h1>
                <div className="grid grid-cols-2 gap-10">
                  <div className=" text-end">
                    <h1 className="font-bold text-xl">BMI</h1>
                    <h1 className="font-bold text-xl">Health Range</h1>
                  </div>
                  <div>
                    <h1 id="BMI" className="text-xl font-bold"></h1>
                    <h1 className="font-bold text-xl" id="result">
                      {" "}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="range mt-6 bg-white rounded-xl border-2 border-amber-800 p-5">
                <h1 className="text-center text-2xl font-bold text-amber-900 mb-8">
                  BMI Health Roadmap
                </h1>

                {/* Roadmap Line */}
                <div className="relative">
                  <div className="flex items-center w-full">
                    {/* Underweight */}
                    <div className="flex-1 h-3 bg-blue-500 rounded-l-full"></div>

                    {/* Normal */}
                    <div className="flex-1 h-3 bg-green-500"></div>

                    {/* Overweight */}
                    <div className="flex-1 h-3 bg-yellow-400"></div>

                    {/* Obese I */}
                    <div className="flex-1 h-3 bg-orange-500"></div>

                    {/* Obese II */}
                    <div className="flex-1 h-3 bg-red-500 rounded-r-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2 mt-5 text-center">
                  <div>
                    <h2 className="font-bold text-blue-600 text-sm">
                      Underweight
                    </h2>
                    <p className="text-xs">Below 18.5</p>
                  </div>

                  <div>
                    <h2 className="font-bold text-green-600 text-sm">Normal</h2>
                    <p className="text-xs">18.5–22.9</p>
                  </div>

                  <div>
                    <h2 className="font-bold text-yellow-600 text-sm">
                      Overweight
                    </h2>
                    <p className="text-xs">23–24.9</p>
                  </div>

                  <div>
                    <h2 className="font-bold text-orange-600 text-sm">
                      Obese I
                    </h2>
                    <p className="text-xs">25–29.9</p>
                  </div>

                  <div>
                    <h2 className="font-bold text-red-600 text-sm">Obese II</h2>
                    <p className="text-xs">30+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
