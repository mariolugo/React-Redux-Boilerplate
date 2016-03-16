import React, {Component, PropTypes} from 'react';
import * as types from '../constants/ActionTypes';

export function beers(){
  return{
    type: types.SEARCH_BEER
  };
}