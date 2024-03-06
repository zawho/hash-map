// Node factory.
function node(value) {
    const nodeObj = {
        value,
        next: null,
    }
    return nodeObj;
}

export default node;