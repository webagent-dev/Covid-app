const sortData = (data) => {
    const sorted = [...data]

    sorted.sort(function (a, b) {
        if(a.cases > b.cases){
            return -1
        }else{
            return 1
        }
    })
}


export default sortData