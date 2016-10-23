import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, expectedOutput, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, expectedOutput);
            t.deepEqual(result.warnings().length, 0);
        });
}


test('does something', t => {
    return run(t, 'a{ }', 'a{ s }', { });
});



