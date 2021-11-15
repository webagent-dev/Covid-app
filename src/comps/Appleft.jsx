import React, { useEffect, useState } from 'react'
import style from '../style/appleft.module.css'
import InfoBox from './other/InfoBox'
import Map from './other/Map'
import { useDispatch } from 'react-redux'
import {  setCountryList } from '../feature/countrySlice'


function Appleft() {
     const dispatch = useDispatch()
    const [country, setCountry] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('worldwide')
    const countryUrl = 'https://disease.sh/v3/covid-19/countries'
    

    const [countryInfo, setCountryInfo] = useState({})
    const changeCountry = async (e) => {
        const countryCode = e.target.value
        setSelectedCountry(countryCode)
     const allCountry = 'https://disease.sh/v3/covid-19/all'
    const singleCountry = `https://disease.sh/v3/covid-19/countries/${countryCode}`

 const URL  =  countryCode === 'worldwide' ? allCountry : singleCountry
await fetch(URL)
.then((res) => res.json())
.then((data) =>  setCountryInfo(data))
    }

     const getListCountry = async () => {
                await fetch(countryUrl)
                .then((res) => res.json())
                .then((data) =>  {
                    setCountry(data.map((doc) => ({
                        name: doc.country,
                        value: doc.countryInfo.iso2
                    })))
                    dispatch(setCountryList(data))
                })}

                useEffect(() => {
               const allCountry = 'https://disease.sh/v3/covid-19/all'
                    fetch(allCountry)
                    .then((res) => res.json())
                    .then((data) => setCountryInfo(data))
                            
                },[])

    useEffect(() => {
        getListCountry()
    },[])
    return (
        <div className={style.appleft__container}>
            <header className={style.header}> 
                <h1>Covid-19 Tracker</h1>
                <form> 
                    <select value={selectedCountry} onChange={changeCountry}>
                        <option value="worldwide">WorldWide</option>
                     { country.map((data) => <option key={data.name} value={data.value}>{data.name}</option>)}
                    </select>
                </form>
            </header>
            <div className={style.infobox__container}>
                <InfoBox title='Coronavirus Case' cases={countryInfo.todayCases} total={countryInfo.cases} />
                 <InfoBox title='Recovered' cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
                  <InfoBox title='Deaths' cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
            </div>
            <div className={style.map__container}>
                <Map />
            </div>
        </div>
    )
}

export default Appleft
