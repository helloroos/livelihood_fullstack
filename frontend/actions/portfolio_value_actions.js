import * as PortfolioValueAPIUtil from '../util/portfolio_value_api_util';

export const UPDATE_PORTFOLIO_VALUE = 'UPDATE_PORTFOLIO_VALUE';
export const RECEIVE_PORTFOLIO_VALUES = 'RECEIVE_PORTFOLIO_VALUES';

const updatePortfolioValueAction = (portfolioValue) => {
  return {
    type: UPDATE_PORTFOLIO_VALUE,
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