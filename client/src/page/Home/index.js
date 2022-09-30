import React, {useEffect, useState} from "react"
import styles from './Home.module.css'
import HomeSkeleton from "../../skeleton/HomeSkeleton";
import {PostAPI, GetAPI} from "../../api/HomeAPI";

function Home() {


    const reset = () => {
        const name = document.getElementById('name')
        const year = document.getElementById('year')
        const price = document.getElementById('price')

        name.value = ''
        year.value = 0
        price.value = 0
    }

    const Post = () => {
        const name = document.getElementById('name')
        const year = document.getElementById('year')
        const price = document.getElementById('price')

        const data = {
            name: name.value,
            year: year.value.toString(),
            price: price.value.toString()
        }
        PostAPI(data)
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.topic}>
                        <h2>Welcome Back, Manager !</h2>
                    </div>
                    <div className={styles.gentle}>
                        <h3>Let start a day by storing new new ebook now !</h3>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.title}>
                            Name:
                        </div>
                        <input type='text' className={styles.nameInput} id='name'/>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.title}>
                            Publication Year:
                        </div>
                        <input type='number' className={styles.ageInput} id='year' />
                    </div>
                    <div className={styles.form}>
                        <div className={styles.title}>
                            Price:
                        </div>
                        <input type='number' className={styles.ageInput} id='price'/>
                    </div>
                    <div className={styles.buttonGroup}>
                        <button className={styles.button} onClick={reset}>Reset</button>
                        <button className={styles.button} onClick={Post}>Store</button>
                        <button className={styles.button} onClick={() => window.location.href='/result'}>Manage Ebooks</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default function Render() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000)
    }, [])

    return (
        <>
            {loading ? <Home/> : <HomeSkeleton/>}
        </>
    )

}