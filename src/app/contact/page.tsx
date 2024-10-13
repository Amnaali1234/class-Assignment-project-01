import Link from "next/link";
import styles from"../contact/contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
       <h3 className={styles.header}>This is Contact Page</h3> 


       <ul>
          <li><Link href="/">Go to Home page</Link></li>
          <li><Link href="/about">Go to About Page</Link></li>
           <li><Link href="/service/">Go to Service page</Link></li>
        </ul>
    </div>
  )
}

export default ContactPage;