import React from 'react';


type IReactComponent<P = any> = (
  React.ClassicComponentClass<P> | React.ComponentClass<P> | React.FunctionComponent<P> | React.ForwardRefExoticComponent<P>
  );

export default IReactComponent;
