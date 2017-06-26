import React from 'react';
import { connect } from 'react-redux';
import { changePosition, addHunter } from '../actions';
import HunterProfile from '../components/profile/HunterProfile';

export default function HunterPage (props) {
    return (
        <HunterProfile />
    );
};