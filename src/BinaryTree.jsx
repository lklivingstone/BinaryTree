import './BinaryTree.css';


const BinaryTree = ({data}) => {

    var i=0;

    while (((2*i)+1) < data.length) {
        i= i+1;
    }
    // console.log("i", i)

    // for (let j=data.length; j<=(2*i)+1; j++) {
    //     data.push(null)
    // }
    let array=[];
    let ind=0;
    // let flag= false;
    for (let j=0; j<=i; j++) {
        let arr2=[];
        let cnt=0;
        // if (flag===true) {
        //     break;
        // }
        // for (let k=0; k<(2**j); k++) {
        //     if (data[k] && data[k]!==null) {
        //         console.log(data[k])
        //         cnt= cnt+1;
        //     }
        // }
        // if (cnt===0) {
        //     flag= true;
        //     console.log(j)
        //     break;
        // }
        for (let k=0; k<(2**j); k++) {
            arr2.push(data[ind]);
            ind= ind+1;
        }
        array.push(arr2)
    }

    // console.log(array)



    return (
        <div className="BinaryTree">
            {
                array.map((eachArray)=> {
                    return (
                        <div className='each-column' key={eachArray}>
                            
                            {
                                eachArray.map((single)=> {
                                    if (single && single !==null) {
                                        return (
                                            <div className='single-element' key={single}>
                                                {single}
                                            </div>
                                        )
                                    }
                                    if (single===null) {
                                        return (
                                            <div className='single-element' key={single}>
                                                
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default BinaryTree;
