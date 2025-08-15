// explain the difference between getBy, findBy, queryBy:
//  findBy returns a promise, which resolves to a matching node when the element is found.
// with getBy, you can use: getByText, getByTestId, getByLabelText, getByPlaceholderText…
// queryBy is actually similar to getBy because it also returns the matching node for a query. However, it returns null if there’s no element match, and throws an error if there are multiple matches.
