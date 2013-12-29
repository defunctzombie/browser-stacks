var bar = function() {
    throw new Error('foobar');
}

function foo(a) {
    new bar();
}

try {
(function() {
    foo('a');
})();
} catch (err) {
    var obj = {};

    // get any enumerable properties
    for (var key in err) {
        obj[key] = err[key];
    }

    // sometimes stack field is not enumerable
    if (err.stack) {
        obj['stack'] = err.stack;
    }

    return obj;
}
