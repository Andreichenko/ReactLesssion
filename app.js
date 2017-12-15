/**
 * Created by aleksandrandreichenko on 15.12.17.
 */
var image = React.createElement('img', {src: ' https://facebook.github.io/react/img/'});
var title = React.createElement('h1', null, 'React');
var subtitle= React.createElement('p', null, 'loading');
var container = React.createElement('div', {className: 'container'}, image, title, subtitle);

ReactDOM.render(container, document.getElementById('root'));