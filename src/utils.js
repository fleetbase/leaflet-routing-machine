const set = (object, path, value) => {
    let current = object;
    const type = typeof object;
    const isObject = type === 'object';
    const isFunction = type === 'function';
    const isArray = Array.isArray(object);

    if (isFunction) {
        return set(object(), path, value);
    }

    const pathType = typeof path;
    const pathIsString = pathType === 'string';
    const pathIsDotted = pathIsString && path.includes('.');
    const pathArray = pathIsDotted ? path.split('.') : [path];
    const iterations = pathArray.length;

    if (isArray || isObject) {
        for (let i = 0; i < iterations - 1; i++) {
            if (!current[pathArray[i]]) {
                current[pathArray[i]] = {};
            }
            current = current[pathArray[i]];
        }

        current[pathArray[iterations - 1]] = value;
    }

    return value;
};

export {
    set
};