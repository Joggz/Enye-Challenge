import * as React from 'react';
import { Button, Input } from 'antd';
import MapCointainer from './googleMap'



const style = {
  height: '3rem',
  width: '25rem',
  margin: '0 auto'

}
const div = {
  display: 'flex',
  margin: '0 auto',

  width: '65%',

}

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <div style={{ margin: ' 0 auto' }}>
        <div style={div}>
          <Input size='large' style={style} placeholder="input search text" />
        </div>
      </div>
      <MapCointainer />
    </>
  )
};

export default HomePage;