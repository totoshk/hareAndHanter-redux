import React from 'react';
import { connect } from 'react-redux';
import { addHunter } from '../actions';


 class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleSubmit(event) {
        event.preventDefault();
        this.props.addHunter({
            name: this.name.value, 
            experience: this.experience.value, 
            notes: this.notes.value
        })
    };

    render() {
        console.log(this)
        console.log(this.props.hunter.map(hunter => hunter.name))
        return (
            <section>
                <form onSubmit={this.handleSubmit} className="main-form">
                    <label htmlFor="name">
                        Имя: 
                        <input 
                            type="text" 
                            id="name" 
                            className="main-form__field" 
                            ref={input => this.name = input}/>
                    </label>
                    <select 
                        name="Охотничий стаж" 
                        id="experience"
                        className="main-form__field" 
                        ref={select => this.experience = select}>
                        <option value="less-1-year">менее 1 года</option>
                        <option value="1-5-years">от 1 до 5 лет</option>
                        <option value="more-5-years">более 5 лет</option>
                    </select>
                    <textarea 
                        name="notes" 
                        id="notes" 
                        cols="18" rows="2" 
                        className="main-form__field" 
                        ref={textarea => this.notes = textarea} >
                    </textarea>
                    <input type="submit" value="Создать" className="main-form__field btn"/>
                </form>

                <div className='hunters-list' >
                    {console.log(this)}
                    {this.props.hunter.map(hunter => {
                        <p>hunter's name is {hunter.name}, his experience is {hunter.experience}. Notes: {hunter.notes}</p>
                    })}
                </div>
            </section>
        )
    }
}

function stateToProps(state) {
    return {
        hunter: state.hunter
    }
}

export default connect(stateToProps, {addHunter})(Form); 