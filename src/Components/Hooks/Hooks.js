import { useSelector as selector } from "react-redux"
import { useDispatch as dispatch } from "react-redux"

export const useSelector = state => selector(state)
export const useDispatch = () =>  dispatch()