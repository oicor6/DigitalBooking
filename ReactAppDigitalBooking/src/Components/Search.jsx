import React from 'react'
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import json from '../listado.json';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Search = () => {
  const [lugar, setLugar] = useState()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const cities = [...new Set(json.map(element => element .location))]
  return (
    <div className='searcher'>
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      <select name="" id="" onChange={(e) => {
                setLugar(e.target.value)}
                }>
                <option value="">Lugar</option>
                {cities.map((item, index) => <option key={index}>{item}</option>)}
            </select>
      {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /> */}
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      <button>Buscar</button>
    </div>
  )
}

export default Search



