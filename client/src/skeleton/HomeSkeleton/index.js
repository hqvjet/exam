import React from "react"
import styles from './HomeSkeleton.module.css'

export default function HomeSkeleton(props) {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.topic}/>
                    <div className={styles.gentle}/>
                    <div className={styles.form}>
                        <div className={styles.title}/>
                        <div className={styles.value}/>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.title}/>
                        <div className={styles.value}/>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.title}/>
                        <div className={styles.value}/>
                    </div>
                    <div className={styles.buttonGroup}>
                        <div className={styles.button}/>
                        <div className={styles.button}/>
                    </div>
                </div>
            </div>
        </>
    )

}