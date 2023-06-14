import { useEffect, useState } from "react"

import jsondata from './data.json';

export default function UseEffectHook() {

    const [loadData, setLoadData] = useState(false);

    const [listData, setListData] = useState([]);



    useEffect(() => {
        if (loadData) {
            setListData(jsondata);
        }
        console.log('useeffect fired, toggle state changed')
        return () => {
            setListData([]);
        }
    }, [loadData])

    return <>

        <label htmlFor="cbox">
            <span>Check to load</span>
            <input type="checkbox" onChange={() => {
                setLoadData(!loadData);
            }} name="" id="cbox" />
        </label>

        {listData.map((person, key) =>
            <p key={key}>{Object.keys(person)} {person.name}</p>
        )}
        {loadData && <p>Loaded From JSON file</p>}
    </>


}