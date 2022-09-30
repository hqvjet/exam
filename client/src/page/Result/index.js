import React, {useEffect, useState} from "react"
import styles from './Result.module.css'
import ResultSkeleton from "../../skeleton/ResultSkeleton"
import {deleteThisStaff, GetStaffs} from "../../api/ResultAPI"


function Result(props) {

    console.log(props.data)
    return (
        <>
            {props.data[0].id !== '' && (
                <>
                    <div className={styles.main}>
                        <div className={styles.container}>
                            <div className={styles.topic}>
                                <h2>Staff Management</h2>
                            </div>
                            <div className={styles.searchBar}/>
                            <table className={styles.table}>
                                <tbody id='table-body'>
                                <tr className={styles.tr}>
                                    <th className={styles.element}>ID</th>
                                    <th className={styles.element}>full Name</th>
                                    <th className={styles.element}>Age</th>
                                    <th className={styles.element}>Gender</th>
                                    <th className={styles.element}>Delete</th>
                                </tr>
                                {props.data.map(items => (
                                        <tr className={styles.tr} key={items.id}>
                                            <td className={styles.element}>{items.id}</td>
                                            <td className={styles.element}><a href={`/user/${items.id}`} className={styles.a}>{items.name}</a></td>
                                            <td className={styles.element}>{items.year}</td>
                                            <td className={styles.element}>{items.price}</td>
                                            <td className={styles.del}><button type='button' className={styles.button} onClick={deleteThisStaff}>Delete</button></td>
                                        </tr>
                                ))}
                                </tbody>
                            </table>
                            <div className={styles.inf}/>
                            <button className={styles.back} onClick={() => window.location.href='/'}>Back</button>
                        </div>
                    </div>
                </>
            )}
        </>
    )

}

export default function Render() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([
        {
            id: '',
            name: '',
            year: '',
            price: ''
        }
    ])

    useEffect(() => {
        setTimeout(() => {
            GetStaffs(data, setData)
            setLoading(true)
        }, 1000)
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            {loading ? <Result data={data}/> : <ResultSkeleton/>}
        </>
    )

}