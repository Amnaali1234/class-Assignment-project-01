import styles from "../service/service.module.css";
import Link from "next/link";

const ServicePage = () => {
  return (
    <div className= {styles.container}>
    <h1 className= {styles.header}>This is Service Page</h1>

    <ul>
          <li><Link href="/">Go to Home page</Link></li>
          <li><Link href="/contact">Go to About Page</Link></li>
          <li><Link href="/service">Go to Contact page</Link></li>
        </ul>
     </div>
  )
}

export default ServicePage;