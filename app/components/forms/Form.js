import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            imgSrc: '',
            gender: 'male',
            bdate: '',
            experience: 'less then 1 year',
            difficulty: 1
        }

        this.state = Object.assign({}, this.initialState);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === 'name') {
            value = value.replace(/\W/, '')
        }

        this.setState({
            [name]: value
        })
    };


    handleSubmit(event) {
        event.preventDefault();
        this.props.addHunter({
            name: this.state.name,
            imgSrc: this.state.imgSrc,
            gender: this.state.gender,
            bdate: this.state.bdate,
            experience: this.state.experience,
            difficulty: this.state.difficulty
        })

        this.setState(Object.assign({}, this.initialState));
    };

    render() {
        return (
            <section className='questionary'>
                <h1>Create a character</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-wrap">
                        <label htmlFor="name" className="form-label"><span className="form-label__require">*</span> Nickname:</label>
                            <input 
                                type="text"
                                id="name"
                                name='name'
                                className="form-field"
                                placeholder="Enter your nickname"
                                value={this.state.name}
                                onChange = {this.handleChange}
                                required />
                    </div>

                    <div className="form-wrap">
                        <label htmlFor="photo" className="form-label">Browse your photo</label>
                        <input type="text"
                            id="photo"
                            name='imgSrc'
                            className="form-field form-field__photo"
                            placeholder="Enter URL of image"
                            value= {this.state.imgSrc}
                            onChange = {this.handleChange}
                            />
                        <button className="btn btn-upload" type="button">Upload</button>
                    </div>

                    <fieldset className="form-wrap form-wrap__gender">
                        <legend><span className="form-label__require">*</span> Gender:</legend>
                        
                        <input type="radio" 
                            value='male'
                            name='gender'
                            id='male'
                            required
                            checked={this.state.gender === 'male'}
                            onChange = {this.handleChange}/>
                        <label htmlFor="male" className="form-label form-label__gender form-label__gender-male"></label>
                        
                        
                        <input type="radio" 
                            value='female'
                            name='gender'
                            id='female'
                            required
                            checked={this.state.gender === 'female'}
                            onChange = {this.handleChange}/>
                        <label htmlFor="female" className="form-label form-label__gender form-label__gender-female"></label>
                    </fieldset>

                    <div className="form-wrap">
                        <label htmlFor="bdate" className="form-label"><span className="form-label__require">*</span> Date of your birth :</label>
                        <input type="date" id="bdate"
                            name='bdate'
                            className="form-field"
                            min="1930-01-01"
                            max="2010-12-31"
                            required
                            
                            value= {this.state.bdate}
                            onChange = {this.handleChange}
                        />
                    </div>

                    <div className="form-wrap">
                        <label htmlFor="experience" className="form-label">Hunting experience:</label>
                        <select 
                            name="experience"
                            id="experience"
                            className="form-field form-field__select" 
                            value= {this.state.experience}
                            onChange = {this.handleChange}>
                            <option value="less then 1 year">less then 1 year</option>
                            <option value="1-5 years">1-5 years</option>
                            <option value="more than 5 years ">more than 5 years</option>
                        </select>
                    </div>

                    <div className="form-wrap">
                        <label htmlFor="difficulty" className="form-label">Level of difficulty:</label>
                        <input type="range"
                            id="difficulty"
                            name='difficulty'
                            className="form-field"
                            min="1"
                            max="3"
                            step="1"
                            value= {this.state.difficulty}
                            onChange = {this.handleChange}
                            />
                        <div className="flexible">
                            <div>easy</div>
                            <div>intermediate</div>
                            <div>hard</div>
                        </div>
                    </div>

                    <input type="submit" value="Create" className="btn"/>
                </form>
            </section>
        )
    }
}

export default Form;