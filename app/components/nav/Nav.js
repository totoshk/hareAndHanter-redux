import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }

        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render(){
        return (
            <nav className='main-nav clearfix'>
                <div className={this.state.active ? 'sandwich-menu active' : 'sandwich-menu'} onClick={this.toggleClass} >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className={this.state.active ? 'main-nav__links' : 'main-nav__links hidden'}>
                    <NavLink to='/' exact className='main-nav__item' activeClassName = 'active'>
                        <FormattedMessage
                            id="nav.creator"
                            defaultMessage='Hunters Creator'
                        />
                    </NavLink>
                    <NavLink to='/hunters' className='main-nav__item' activeClassName = 'active'>
                        <FormattedMessage
                            id="nav.list"
                            defaultMessage='List of Hunters'
                        />
                    </NavLink>
                    <NavLink to='/hare-page' className='main-nav__item' activeClassName = 'active'>
                        <FormattedMessage
                            id="nav.hare"
                            defaultMessage='Look at Hare'
                        />
                    </NavLink>
                </div>
                <div className='locale'>
                    <a
                        role='button'
                        className='locale-lang'
                        onClick={() => this.props.setLang('en')}>
                            EN
                    </a> |
                    <a
                        role='button'
                        className='locale-lang'
                        onClick={() => this.props.setLang('ru')}>
                            RU
                    </a>
                </div>
            </nav>
    )}
};

export default Nav;