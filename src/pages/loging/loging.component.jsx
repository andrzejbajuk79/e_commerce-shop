import React from 'react';
import SignIn from '../../components/sign-in/sign-in.components'
import SignUp from '../../components/sign-up/sign-up.component'
import './loging.styles.scss';

const Loging = () => (

  <div className="loging">
    <SignIn/>
    <SignUp/>
  </div>
)

export default Loging;
