import React from 'react';

export default function Time() {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh'
    }}>
      Time: {(new Date()).toLocaleTimeString()}
    </div>
  )
}