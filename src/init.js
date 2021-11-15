export const sortData = (data) => {
    const myData = [...data]

    myData.sort((a, b) => {
        if(a.cases > b.cases){
            return -1
        }else{
            return 1
        }
    })
    return myData
}