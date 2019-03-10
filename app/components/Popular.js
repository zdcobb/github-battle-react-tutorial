var React = require('react');

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        // Forces the updateLanguage function to be bound to this component, so that even when it is call by something with a different 'this' context, 
        // the function will ALWAYS use the component's "this" context
        // p.s. in ES6, the arrow function resolves this issue since the 'this' keyword is inherited
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang
            }
        });
    }
    render() {

        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
            <ul className="languages">
                {languages.map(function(lang){
                    return (
                        <li 
                        style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                        onClick={this.updateLanguage.bind(null, lang)}
                        key={lang}>
                            {lang}
                        </li>
                    )
                }, this)}
            </ul>
            
        )
    }
}

module.exports = Popular;