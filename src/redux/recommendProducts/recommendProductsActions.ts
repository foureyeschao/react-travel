import { RootState } from './../store';
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START"; // Calling recommended products API

export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // Successed to call the product API

export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL"; //Failed to call product API

interface IFetchRecommendProductsStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START;
}

interface IFetchRecommendProductsSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
  payload: any;
}

interface IFetchRecommendProductsFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
  payload: any;
}

export type RecommendProductsAction =
  | IFetchRecommendProductsStartAction
  | IFetchRecommendProductsSuccessAction
  | IFetchRecommendProductsFailAction;

export const fetchRecommendProductsStartActionCreator = ():IFetchRecommendProductsStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START
  }
}

export const fetchRecommendProductsSuccessActionCreator = (data:any):IFetchRecommendProductsSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const fetchRecommendProductsFailActionCreator = (error:any):IFetchRecommendProductsFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error
  }
}

export const giveMeDataActionCreator = ():ThunkAction<void, RootState,unknown,RecommendProductsAction> =>async (dispatch,getState) =>{
   dispatch(fetchRecommendProductsStartActionCreator())
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/productCollections"
    );
    dispatch(fetchRecommendProductsSuccessActionCreator(data))

  } catch (error) {

    dispatch(fetchRecommendProductsFailActionCreator(error.message))
  }
}