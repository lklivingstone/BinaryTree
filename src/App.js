import './App.css';
import { BinarySearchTree } from 'react-tree-vis'
import { useEffect, useState } from 'react'
import { publicRequest } from './requestMethods';
import BinaryTree from './BinaryTree';

function App() {

    const [insert, setInsert] = useState()
    const [removeValue, setRemoveValue] = useState()
    const [ data, setData ]= useState([])
    useEffect(()=> {
        const getData= async () => {
            try {
                const res= await publicRequest.get("/node")
                console.log(res.data)
                const result= res.data

                let array= []
                result.map((element)=> {
                    if (element===null) {
                        array.push(null)
                    }
                    else {
                        array.push(element["name"])
                    }
                })

                // console.log(array)
                setData(array)
            }
            catch(err) {
            }
        }
        getData()
    }, [])

    const [from, setFrom ]= useState()
    const [to, setTo ]= useState()
    const [node, setNode ]= useState()
    const handleAddNode = async () => {
        try {
            await publicRequest.post("/node/child", {parent: from, child: to})
        } catch(err) {

        }
    }
    const [bfsdata, setBfsdata ]= useState([])
    const handleBFS = async (e) => {
        e.preventDefault()
        try {
            const Result = await publicRequest.get(`/node/bfs/${node}`, {name: node})
            const result= Result.data
            setBfsdata(result)
            console.log(result)
        } catch(err) {

        }
    }

    return (
        <div className="App">

            <form onSubmit={handleBFS} >
                <br/>
                <label >
                    Find BFS from Node:
                </label>
                <br/>
                <input required={true} style={{width: "15vw", padding: "5px"}} placeholder="Node" onChange={(e)=>setNode(e.target.value)} />
                <br/>
                
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
            {
                bfsdata && (
                    <div style={{display: "flex"}}>
                        {
                            bfsdata.map((each)=> {
                                return <p style={{padding: "5px"}}>{each.name}</p>
                            })
                        }
                    </div>
                )
            }
            <br />
            <form onSubmit={handleAddNode} >
                <br/>
                <label >
                    Add a node:
                </label>
                <br/>
                <input required={true} style={{width: "15vw", padding: "5px"}} placeholder="Parent Node" onChange={(e)=>setFrom(e.target.value)} />
                <br/>
                <label>
                    Roll Number:
                </label>
                <br/>
                <input required={true} style={{width: "15vw", padding: "5px"}} placeholder="Child Node" onChange={(e)=>setTo(e.target.value)} />
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
            <br/>
            <br/>
            <h3>Binary Tree</h3>
            <BinaryTree data={data}/>
        </div>
    );
}

export default App;
