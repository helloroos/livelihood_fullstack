import * as PortfolioValueAPIUtil from '../util/portfolio_value_api_util';
import { GET_USER_INFO } from './user_actions';

export const UPDATE_PORTFOLIO_VALUE = 'UPDATE_PORTFOLIO_VALUE';
export const RECEIVE_PORTFOLIO_VALUES = 'RECEIVE_PORTFOLIO_VALUES';

const updatePortfolioValueAction = (portfolioValue) => {
  return {
    type: GET_USER_INFO,
    portfolioValue: portfolioValue
  }
}

const receivePortfolioValues = (portfolioValues) => {
  return {
    type: RECEIVE_PORTFOLIO_VALUES,
    portfolioValues: portfolioValues
  }
}

export const updatePortfolioValue = (payload) => (dispatch) => {
  return PortfolioValueAPIUtil.updateDailyValue(payload)
    .then(
      (res) => dispatch(updatePortfolioValueAction(res)),
      (errors) => dispatch(updatePortfolioValueAction(errors.responseJSON)))
}

export const fetchPortfolioValues = (payload) => (dispatch) => {
  return PortfolioValueAPIUtil.fetchPortfolioValues(payload)
    .then(
      (res) => dispatch(receivePortfolioValues(res)),
      (errors) => dispatch(receivePortfolioValues(errors.responseJSON)))
}