// custom progressbar start here//

//php progress bar
var php = new ProgressBar.SemiCircle('#php-skills', {
    strokeWidth: 4,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2000,
    svgStyle: null,
    text: {
        value: '',
        alignToBottom: false
    },
    from: {color: '#8892be'},
    to: {color: '#4f5b93'},
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
            bar.setText('');
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    }
});
php.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
php.text.style.fontSize = '2rem';

php.animate(0.95);  // Number from 0.0 to 1.0


//php progress bar



//js progress bar

var js = new ProgressBar.SemiCircle('#js-skills', {
    strokeWidth: 4,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2000,
    svgStyle: null,
    text: {
        value: '',
        alignToBottom: false
    },
    from: {color: '#323330'},
    to: {color: '#F0DB4F'},
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
            bar.setText('');
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    }
});
js.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
js.text.style.fontSize = '2rem';

js.animate(0.95);  // Number from 0.0 to 1.0

//js progress bar


//wp progress bar

var wp = new ProgressBar.SemiCircle('#wp-skills', {
    strokeWidth: 4,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2000,
    svgStyle: null,
    text: {
        value: '',
        alignToBottom: false
    },
    from: {color: '#464646'},
    to: {color: '#d54e21'},
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
            bar.setText('');
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    }
});
wp.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
wp.text.style.fontSize = '2rem';

wp.animate(0.90);  // Number from 0.0 to 1.0


//wp progress bar


//py progress bar


var py = new ProgressBar.SemiCircle('#py-skills', {
    strokeWidth: 4,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2000,
    svgStyle: null,
    text: {
        value: '',
        alignToBottom: false
    },
    from: {color: '#646464'},
    to: {color: '#4584b6'},
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
            bar.setText('');
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    }
});
py.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
py.text.style.fontSize = '2rem';

py.animate(0.70);  // Number from 0.0 to 1.0

//py progress bar

// custom progressbar end here//

