

function print_me(value, value2) {
    if (value2) {
        if ($.isArray(value2)) {
            console.log(`${value}\n${value2[0]}\n${value2[1]}`);
        }
        else {
            console.log(`${value}\n${value2}`);
        }
    }
    else {
        console.log(value);
        return print_me;
    }
}

(function () {
    print_me('foo');
    print_me('foo', 'bar');
    print_me('foo', ['bar', 'baz']);
    print_me('foo')('bar');
})();
