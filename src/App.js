import React, { useState } from "react";
import "./App.css";
import * as XLSX from "xlsx";
import Perfil from "./components/Perfil";

function App() {
  const [items, setItems] = useState([]);
  const [doc, setDoc] = useState(false);
  const [month, setMonth] = useState('');

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  const excelDateToJSDate = (date) => {
    const parseDate = new Date(Date.UTC(0, 0, date - 1));;
    const dateText = parseDate.toDateString();
    return dateText;
  }

  const marFiltered = items.filter(d => {
    return d.Mes === 43891;
  });

  const aprilFiltered = items.filter(d => {
    return d.Mes === 43922;
  });

  const mayFiltered = items.filter(d => {
    return d.Mes === 43952;
  });

  return (
    <div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Añadir archivo</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">El archivo debe tener extensión .xslx</h6>
          <div className="card">
            <input
              className="form-control"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
                setDoc(true)
              }}
            />

            {doc === false ? (<></>) : (<div><div className="ms-5">
              <button class="btn btn-primary btn-lg m-3" onClick={() => (setMonth('Marzo'))}>Marzo</button>
              <button class="btn btn-primary btn-lg m-3" onClick={() => (setMonth('Abril'))}>Abril</button>
              <button class="btn btn-primary btn-lg m-3" onClick={() => (setMonth('Mayo'))}>Mayo</button>
            </div>
              <div><h3 class="text-center">{month}</h3></div>


              {month === 'Marzo' ? (<div className="d-flex flex-wrap align-items-center justify-content-center">{marFiltered.map(d => {
                return (
                  <div>
                    <Perfil
                      nombre={d.Nombre}
                      iduser={d.ID}
                      fechaingreso={excelDateToJSDate(d.FechaIngreso)}
                      sueldobruto={d.SueldoBruto}
                      division={d.Division}
                      area={d.Area}
                      subarea={d.Subarea}
                      idlider={d.IDLider}
                      niveljerarquico={d.NivelJerarquico} />
                  </div>
                );
              })}</div>) : (<></>)}

              {month === 'Abril' ? (<div className="d-flex flex-wrap align-items-center justify-content-center">{aprilFiltered.map(d => {
                return (
                  <div>
                    <Perfil
                      nombre={d.Nombre}
                      iduser={d.ID}
                      fechaingreso={excelDateToJSDate(d.FechaIngreso)}
                      sueldobruto={d.SueldoBruto}
                      division={d.Division}
                      area={d.Area}
                      subarea={d.Subarea}
                      idlider={d.IDLider}
                      niveljerarquico={d.NivelJerarquico} />
                  </div>
                );
              })}</div>) : (<></>)}

              {month === 'Mayo' ? (<div className="d-flex flex-wrap align-items-center justify-content-center">{mayFiltered.map(d => {
                return (
                  <div>
                    <Perfil
                      nombre={d.Nombre}
                      iduser={d.ID}
                      fechaingreso={excelDateToJSDate(d.FechaIngreso)}
                      sueldobruto={d.SueldoBruto}
                      division={d.Division}
                      area={d.Area}
                      subarea={d.Subarea}
                      idlider={d.IDLider}
                      niveljerarquico={d.NivelJerarquico} />
                  </div>
                );
              })}</div>) : (<></>)}</div>)}
          </div>
        </div>
      </div>





    </div>
  );
}

export default App;