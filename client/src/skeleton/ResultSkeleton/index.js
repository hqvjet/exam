import React from "react"
import styles from './ResultSkeleton.module.css'

export default function ResultSkeleton() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.topic} />
                    <div className={styles.searchBar} />\
                    <table className={styles.table}>
                        <tbody>
                        <tr className={styles.tr}>
                            <th className={styles.element}></th>
                            <th className={styles.element}></th>
                            <th className={styles.element}></th>
                            <th className={styles.element}></th>
                            <th className={styles.del}></th>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.del}></td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.del}></td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.del}></td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.element}></td>
                            <td className={styles.del}></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className={styles.inf} />
                    <div className={styles.back} />
                </div>
            </div>
        </>
    )

}