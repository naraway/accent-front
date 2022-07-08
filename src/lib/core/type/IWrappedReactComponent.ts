import IReactComponent from './IReactComponent';


type IWrappedReactComponent<P = any> = IReactComponent<P> & {
  wrappedComponent: IReactComponent<P>;
};

export default IWrappedReactComponent;
