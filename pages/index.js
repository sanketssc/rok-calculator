import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Material from "../components/material";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [leather, setLeather] = useState({
    id: 1,
    name: "Leather",
    legendary: 0,
    legendary_c: 0,
    epic: 0,
    epic_c: 0,
    elite: 0,
    elite_c: 0,
    advanced: 0,
    advanced_C: 0,
    normal: 0,
    normal_c: 0,
  });
  const [ebony, setEbony] = useState({
    id: 2,
    name: "Ebony",
    legendary: 0,
    legendary_c: 0,
    epic: 0,
    epic_c: 0,
    elite: 0,
    elite_c: 0,
    advanced: 0,
    advanced_C: 0,
    normal: 0,
    normal_c: 0,
  });
  const [ironore, setIronore] = useState({
    id: 3,
    name: "Iron Ore",
    legendary: 0,
    legendary_c: 0,
    epic: 0,
    epic_c: 0,
    elite: 0,
    elite_c: 0,
    advanced: 0,
    advanced_c: 0,
    normal: 0,
    normal_c: 0,
  });
  const [animalbone, setAnimalbone] = useState({
    id: 4,
    name: "Animal Bone",
    legendary: 0,
    legendary_c: 0,
    epic: 0,
    epic_c: 0,
    elite: 0,
    elite_c: 0,
    advanced: 0,
    advanced_c: 0,
    normal: 0,
    normal_c: 0,
  });
  const materials = [leather, ebony, ironore, animalbone];
  const x = [24];

  const calculate_leather = () => {
    const normal = leather.normal%4;
    // console.log(typeof(leather.advanced))
    // console.log(Number(leather.elite) + parseInt(leather.advanced/4 + (leather.normal/4)/4));
    const advance = (Number(leather.advanced)+parseInt(leather.normal/4))%4;
    const elite = (Number(leather.elite) + parseInt(leather.advanced/4 + (leather.normal/4)/4))%4;
    const epic = (Number(leather.epic) + parseInt(leather.elite/4 + (leather.advanced/4)/4 +((leather.normal/4)/4)/4))%4;
    const legendary = Number(leather.legendary) + parseInt(leather.epic/4 + (leather.elite/4)/4 + ((leather.advanced/4)/4)/4 + (((leather.normal/4)/4)/4)/4);
    return [normal, advance, elite, epic, legendary];
  }
  const calculate_ebony = () => {
    const normal = ebony.normal%4;
    // console.log(typeof(ebony.advanced))
    // console.log(Number(ebony.elite) + parseInt(ebony.advanced/4 + (ebony.normal/4)/4));
    const advance = (Number(ebony.advanced)+parseInt(ebony.normal/4))%4;
    const elite = (Number(ebony.elite) + parseInt(ebony.advanced/4 + (ebony.normal/4)/4))%4;
    const epic = (Number(ebony.epic) + parseInt(ebony.elite/4 + (ebony.advanced/4)/4 +((ebony.normal/4)/4)/4))%4;
    const legendary = Number(ebony.legendary) + parseInt(ebony.epic/4 + (ebony.elite/4)/4 + ((ebony.advanced/4)/4)/4 + (((ebony.normal/4)/4)/4)/4);
    return [normal, advance, elite, epic, legendary];
  }
  const calculate_iron = () => {
    const normal = ironore.normal%4;
    // console.log(typeof(ironore.advanced))
    // console.log(Number(ironore.elite) + parseInt(ironore.advanced/4 + (ironore.normal/4)/4));
    const advance = (Number(ironore.advanced)+parseInt(ironore.normal/4))%4;
    const elite = (Number(ironore.elite) + parseInt(ironore.advanced/4 + (ironore.normal/4)/4))%4;
    const epic = (Number(ironore.epic) + parseInt(ironore.elite/4 + (ironore.advanced/4)/4 +((ironore.normal/4)/4)/4))%4;
    const legendary = Number(ironore.legendary) + parseInt(ironore.epic/4 + (ironore.elite/4)/4 + ((ironore.advanced/4)/4)/4 + (((ironore.normal/4)/4)/4)/4);
    return [normal, advance, elite, epic, legendary];
  }
  const calculate_animal = () => {
    const normal = animalbone.normal%4;
    // console.log(typeof(animalbone.advanced))
    // console.log(Number(animalbone.elite) + parseInt(animalbone.advanced/4 + (animalbone.normal/4)/4));
    const advance = (Number(animalbone.advanced)+parseInt(animalbone.normal/4))%4;
    const elite = (Number(animalbone.elite) + parseInt(animalbone.advanced/4 + (animalbone.normal/4)/4))%4;
    const epic = (Number(animalbone.epic) + parseInt(animalbone.elite/4 + (animalbone.advanced/4)/4 +((animalbone.normal/4)/4)/4))%4;
    const legendary = Number(animalbone.legendary) + parseInt(animalbone.epic/4 + (animalbone.elite/4)/4 + ((animalbone.advanced/4)/4)/4 + (((animalbone.normal/4)/4)/4)/4);
    return [normal, advance, elite, epic, legendary];
  }
  

  const calculate = () => {
    const leather_c = calculate_leather();
    const ebony_c = calculate_ebony();
    const iron_c = calculate_iron();
    const animal_c = calculate_animal();

    setLeather({
      ...leather,
      legendary_c: leather_c[4],
      epic_c: leather_c[3],
      elite_c: leather_c[2],
      advanced_c: leather_c[1],
      normal_c: leather_c[0],
    });
    setEbony({
      ...ebony,
      legendary_c: ebony_c[4],
      epic_c: ebony_c[3],
      elite_c: ebony_c[2],
      advanced_c: ebony_c[1],
      normal_c: ebony_c[0],
    });
    setIronore({
      ...ironore,
      legendary_c: iron_c[4],
      epic_c: iron_c[3],
      elite_c: iron_c[2],
      advanced_c: iron_c[1],
      normal_c: iron_c[0],
    });
    setAnimalbone({
      ...animalbone,
      legendary_c: animal_c[4],
      epic_c: animal_c[3],
      elite_c: animal_c[2],
      advanced_c: animal_c[1],
      normal_c: animal_c[0],
    });
  };
  // useEffect(() => {

  // }, [])
  const setlegmat = (e, material) => {
    if (material.id == 1) {
      setLeather({ ...leather, legendary: e.target.value });
    } else if (material.id == 2) {
      setEbony({ ...ebony, legendary: e.target.value });
    } else if (material.id == 3) {
      setIronore({ ...ironore, legendary: e.target.value });
    } else if (material.id == 4) {
      setAnimalbone({ ...animalbone, legendary: e.target.value });
    }
  };
  const setepimat = (e, material) => {
    if (material.id == 1) {
      setLeather({ ...leather, epic: e.target.value });
    } else if (material.id == 2) {
      setEbony({ ...ebony, epic: e.target.value });
    } else if (material.id == 3) {
      setIronore({ ...ironore, epic: e.target.value });
    } else if (material.id == 4) {
      setAnimalbone({ ...animalbone, epic: e.target.value });
    }
  };
  const setelimat = (e, material) => {
    if (material.id == 1) {
      setLeather({ ...leather, elite: e.target.value });
    } else if (material.id == 2) {
      setEbony({ ...ebony, elite: e.target.value });
    } else if (material.id == 3) {
      setIronore({ ...ironore, elite: e.target.value });
    } else if (material.id == 4) {
      setAnimalbone({ ...animalbone, elite: e.target.value });
    }
  };
  const setadvmat = (e, material) => {
    if (material.id == 1) {
      setLeather({ ...leather, advanced: e.target.value });
    } else if (material.id == 2) {
      setEbony({ ...ebony, advanced: e.target.value });
    } else if (material.id == 3) {
      setIronore({ ...ironore, advanced: e.target.value });
    } else if (material.id == 4) {
      setAnimalbone({ ...animalbone, advanced: e.target.value });
    }
  };
  const setnormat = (e, material) => {
    if (material.id == 1) {
      setLeather({ ...leather, normal: e.target.value });
    } else if (material.id == 2) {
      setEbony({ ...ebony, normal: e.target.value });
    } else if (material.id == 3) {
      setIronore({ ...ironore, normal: e.target.value });
    } else if (material.id == 4) {
      setAnimalbone({ ...animalbone, normal: e.target.value });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>ROK-Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={calculate} className={styles.btn}>
          Calculate
        </button>
        <div className={styles.materials}>
          <Material
            materials={materials}
            setlegmat={setlegmat}
            setepimat={setepimat}
            setelimat={setelimat}
            setadvmat={setadvmat}
            setnormat={setnormat}
          />
        </div>
      </main>
    </div>
  );
}
