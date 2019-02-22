Self-Study/Essay Questions

1) What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    'PropTypes' is a built-in method of React that allows us to validate the properties that are being passed into a component. It is very important to type check our data in JS because JS is such a dynamic language that it EXPECTS us, as developers, to know what we're doing, so JS, itself, does NOT have built-in type-checking functionality. With programming, it is very easy to accidentally end up receiving a different data type in your output data [from a function or a higher order component] than what you EXPECTED, especially when manipulating large amounts of data.

2) Describe a life-cycle event in React?

    There are three phases of the React component lifecycle and they occur in the following order: the birth/mounting phase, the growth/updating phase, and the death/unmounting phase. Two commonly used methods within this life-cycle even in React include the render() method and the constructor() method. The birth/mounting phase is when the component is being initially built, which includes: accessing initial data, invoking the render() method, and calling the componentDidMount() method. The growth/updating phase is where the setState() method may be invoked, which will also force a re-rendering of the component. The death/unmounting phase is the "clean up" phase for when the component is removed from the screen, which is also where the componentWillUnmount() method will occur.

3) Explain the details of a Higher Order Component?



4) What are three different ways to style components in React? Explain some of the benefits of each.