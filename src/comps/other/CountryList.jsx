import React from 'react'
import style from '../../style/country.module.css'


function CountryList({data}) {
    return ( 
         <div className={style.country__container}>
         <h2>Live Cases by Country</h2> 
<table className={style.country__data}>
            {
                 data &&  data.map((list) => {
                      const { country, cases} =  list
                      return (
                          <tr key={country}>
                                    <td>{country}</td>
                                     <td>{cases}</td>
                                    </tr>
                      )
                  })
            }
</table>
        </div>
    )
}

export default CountryList



//   <div className={style.country__container}>
//               <h2>Live Cases by Country</h2> 
//             <div className={style.country__data}></div>

     {/* {
                          
                           
                                // return(
                                    //    <tr key={id}>
                                    //   <td>{name}</td>
                                    //  <td>{cases}</td>
                                    //  </tr>
                                // )
                            // })
                        // }
            // </div>
        // </div>
    // )
                        } */}