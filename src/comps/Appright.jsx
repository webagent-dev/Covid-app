import React from 'react'
import style from '../style/appright.module.css'
import CountryList from './other/CountryList'
import Graph from './other/Graph'
import { selectCountryList } from '../feature/countrySlice'
import { useSelector } from 'react-redux'
import sortData from '../utils/sorted'


function Appright() {
    let list = useSelector(selectCountryList)
    return (
        <div className={style.appright__container}>
            <CountryList data={list}/> 
            <Graph />
        </div>
    )
}

export default Appright
