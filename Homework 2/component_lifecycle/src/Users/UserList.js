import {useEffect, useState} from 'react'

 function UserList() {
    const [list, setList] = useState();
    const [idData, setIdData] = useState();
    const fetchDefault = () => fetchData(list[0].id);

    useEffect(_ => fetchData(), [setList]);

    async function fetchData(id = 0) {
        const url = 'https://api.ifcityevent.com/phonelist/' + (id > 0 ? id : '');
        const res = await fetch(url);

        res.json().then(res => id === 0 ? setList(res) : setIdData(res))
    }

    return (list ?
            <>
                <h4>Phonebook:</h4>
                <div>
                    {list.map(item => (
                        <div>
                            <button className=" list-group-item-action"
                                    onClick={(e) => {
                                        fetchData(item.id);
                                    }}>
                                {item.firstName + ' ' + item.lastName}
                            </button>
                        </div>
                    ))}
                </div>
                <span idData={idData} fetchDefault={fetchDefault}/>
            </> : null
    );
}

export default UserList;