import React from "react";
import styles from "./projet.module.css";
function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        1. Plateforme de Gestion de Projets - "ProjectMaster"
      </h1>
      <h3 className={styles.subtitle}>Description :</h3>
      <p className={styles.description}>
        "ProjectMaster" est une application web complète conçue pour aider les
        équipes à gérer efficacement leurs projets. Elle permet la création, la
        gestion et le suivi des tâches, avec des fonctionnalités de
        collaboration en temps réel, des tableaux de bord personnalisés et des
        notifications.
      </p>
      <h3 className={styles.subtitle}>Technologies utilisées :</h3>
      <div className={styles.technologies}>
        <p className={styles.technologyTitle}>Frontend :</p>
        <ul className={styles.technologyList}>
          <li className={styles.technologyItem}>React.js</li>
          <li className={styles.technologyItem}>Redux</li>
          <li className={styles.technologyItem}>Sass</li>
        </ul>
        <p className={styles.technologyTitle}>Backend :</p>
        <ul className={styles.technologyList}>
          <li className={styles.technologyItem}>Node.js</li>
          <li className={styles.technologyItem}>Express</li>
        </ul>
        <p className={styles.technologyTitle}>Base de données :</p>
        <ul className={styles.technologyList}>
          <li className={styles.technologyItem}>MongoDB</li>
        </ul>
        <p className={styles.technologyTitle}>Déploiement :</p>
        <ul className={styles.technologyList}>
          <li className={styles.technologyItem}>Docker</li>
          <li className={styles.technologyItem}>AWS</li>
        </ul>
      </div>
      <h1 className={styles.title}>2. Site E-Commerce - "ShopEasy"</h1>
  <h3 className={styles.subtitle}>Description :</h3>
  <p className={styles.description}>
    "ShopEasy" est une plateforme de commerce électronique qui permet aux
    utilisateurs de parcourir et d'acheter des produits en ligne. Le site
    propose une expérience utilisateur fluide avec des fonctionnalités telles
    que la recherche avancée, des filtres de produits et un panier d'achat
    intégré.
  </p>

  <h3 className={styles.subtitle}>Technologies utilisées :</h3>
  <div className={styles.technologies}>
    <p className={styles.technologyTitle}>Frontend :</p>
    <ul className={styles.technologyList}>
      <li className={styles.technologyItem}> Vue.js, Vuetify</li>
    </ul>
    <p className={styles.technologyTitle}>Backend :</p>
    <ul className={styles.technologyList}>
      <li className={styles.technologyItem}>Laravel</li>
    </ul>
    <p className={styles.technologyTitle}>Base de données :</p>
    <ul className={styles.technologyList}>
      <li className={styles.technologyItem}>MySQL</li>
    </ul>
    <p className={styles.technologyTitle}>Déploiement :</p>
    <ul className={styles.technologyList}>
      <li className={styles.technologyItem}>Heroku</li>
    </ul>
    </div>
    </div>
  );
}


 
  


export default page;
