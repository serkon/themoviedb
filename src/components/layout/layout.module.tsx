import React, { ReactNode } from 'react';
import { Header } from './header/header.module';
import { Footer } from './footer/footer.module';
import styles from './layout.module.scss';

export const Layout = ({ children }: { children?: ReactNode }): JSX.Element => {
  return (
    <div className={styles.host}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div >
  )
}
