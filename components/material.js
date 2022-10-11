import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Material = ({ materials, setlegmat, setepimat, setelimat, setadvmat, setnormat }) => {
  const [x, setX] = useState(0)
  return (
    <>
      {materials.map((material) => {
        return(
        <div className={styles.material} key= {material.id}>
        <h3>{material.name}</h3>
        {/* <div className={styles.legendary}> */}
        <div className={styles.mattype}>
          <label htmlFor="leather-legendary">Legendary</label>
          <input type="number"  name="leather-legendary" placeholder= '0'  onFocus={(e)=>e.target.select()} value={material.legendary} onInput={(e)=>{setlegmat(e,material)}} id="" />
        </div>
        <div className={styles.mattype}>
          <label htmlFor="leather-epic">Epic</label>
          <input type="number" name="leather-epic" placeholder= '0' onFocus={(e)=>e.target.select()} value={material.epic} onInput={(e)=>{setepimat(e,material)}} id="" />
        </div>
        <div className={styles.mattype}>
          <label htmlFor="leather-elite">Elite</label>
          <input type="number" name="leather-elite" placeholder= '0' onFocus={(e)=>e.target.select()} value={material.elite} onChange={(e)=>{setelimat(e,material)}} id="" />
        </div>
        <div className={styles.mattype}>
          <label htmlFor="leather-advanced">Advanced</label>
          <input type="number" name="leather-advanced" placeholder= '0' onFocus={(e)=>e.target.select()} value={material.advanced} onChange={(e)=>{setadvmat(e,material)}} id="" />
        </div>
        <div className={styles.mattype}>
          <label htmlFor="leather-normal">Normal</label>
          <input type="number" name="leather-normal" placeholder= '0' onFocus={(e)=>e.target.select()} value={material.normal} onChange={(e)=>{setnormat(e,material)}} id="" />
        </div>
        <h3>Total After <br /> Combining </h3>
        <p> Legendary: {material.legendary_c}</p>
        <p>Epic: {material.epic_c}</p>
        <p>Elite: {material.elite_c}</p>
        <p>Advanced: {material.advanced_c}</p>
        <p>Normal: {material.normal_c}</p>
        </div>)
      // </div>
      })}
      
    </>
  );
};

export default Material;
