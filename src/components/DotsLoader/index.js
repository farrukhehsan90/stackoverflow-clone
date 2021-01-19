import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import PropTypes from "prop-types";

const HEIGHT=100;
const WIDTH=100;

import './styles.css'

class DotsLoader extends Component {
    static propTypes = {
        isloading: PropTypes.bool
    };

    static defaultProps = {
        isloading: false
    };

    render() {
        const { isloading } = this.props;
        return (
            <div  className="loader" style={{ display: isloading ? 'flex' : 'none' }}>
                <Loader
                    visible={isloading}
                    type="ThreeDots"
                    color="#fff"
                    height={HEIGHT}
                    width={WIDTH}
                />
            </div>
        );
    }
}

export default DotsLoader