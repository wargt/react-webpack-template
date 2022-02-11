import React from "react";
import styles from './style.m.css'

export default ({ name = 'User '}) => <h1 className={styles.title}> Hello1 {name}</h1>
