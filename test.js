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
    for (var key in err) {
        if (key === 'stack') continue;
        console.log(key, err[key]);
    }
    console.log(err.stack);
}
