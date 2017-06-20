import React from 'react';
import { connect } from 'react-redux';
import { changePosition } from '../actions';
import { addHunter } from '../actions';


 class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    };


// Метод, который навешивается на форму. Он принимает событие и тут же "глушит" отправку формы.
// В метод addHunter передаем объект, в свойства которого записываем вэлюес из полей формы.
    handleSubmit(event) {
        event.preventDefault();
        this.props.addHunter({
            name: this.name.value, 
            experience: this.experience.value, 
            notes: this.notes.value
        })
    };

    render() {
        return (
            <section className='add-hunter'>
                <form onSubmit={this.handleSubmit} className="main-form">
                    <label htmlFor="name">
                        Имя: 
                        <input 
                            type="text" 
                            id="name" 
                            className="main-form__field" 
                            ref={input => this.name = input}
                            required />
                    </label>
                    <select 
                        name="Охотничий стаж" 
                        id="experience"
                        className="main-form__field" 
                        ref={select => this.experience = select}>
                        <option value="менее 1 года">менее 1 года</option>
                        <option value="от 1 до 5 лет">от 1 до 5 лет</option>
                        <option value="более 5 лет ">более 5 лет</option>
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

                {/* Берем массив с объектами (reducer) и для каждого его элемента создаем div и подписываем его на
                обновление состояния Зайца */}
                <div className='hunters-list' >
                    {this.props.hunter.map((hunter, i) => { 
                        return(
                            <div key={i}>
                                <p>Охотника зовут <span>{hunter.name}</span>, и он охотник <span>{hunter.experience}</span>. 
                                Заметки: <span>{hunter.notes}</span></p>
                                <p>Заяц, я слежу: x: {this.props.posOfHare.x}, y: {this.props.posOfHare.y}</p>
                            </div>)
                    })}
                    
                </div>
            </section>
        )
    }
}

// Функция, прнимает state - состояние стора и передает его в props компонента.
// hunter: state.hunter - свойство Хантер ссылается на состояние Хантер (см. редюсер).

function stateToProps(state) {
    return {
        hunter: state.hunter,
        posOfHare: state.positionApp
    }
}

export default connect(stateToProps, {addHunter})(Form); // передается функция stateToProps и action addHunter, и связывается с компонентом.