import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

export const useTypedSelecor: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelecor;
