import React, { FC } from 'react';
import styles from './styles.module.scss';

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <span>Hello world</span>
    </div>
  );
};
