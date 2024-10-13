import styles from './home.module.css';
import Link from "next/link";

const HomePage = () => {
  return (
    <div className= {styles.container}>

<h1 className= {styles.header}>Welcome to the Home Page</h1>
      
        <ul>
          <li><Link href="/" >Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/service">Service</Link></li>
        </ul>
       </div>
  );
};



export default HomePage;


