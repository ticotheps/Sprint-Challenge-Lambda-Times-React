Self-Study/Essay Questions

1) What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    'PropTypes' is a built-in method of React that allows us to validate the properties that are being passed into a component. It is very important to type check our data in JS because JS is such a dynamic language that it EXPECTS us, as developers, to know what we're doing, so JS, itself, does NOT have built-in type-checking functionality. With programming, it is very easy to accidentally end up receiving a different data type in your output data [from a function or a higher order component] than what you EXPECTED, especially when manipulating large amounts of data.

2) Describe a life-cycle event in React?

    There are three phases of the React component lifecycle and they occur in the following order: the birth/mounting phase, the growth/updating phase, and the death/unmounting phase. Two commonly used methods within this life-cycle even in React include the render() method and the constructor() method. The birth/mounting phase is when the component is being initially built, which includes: accessing initial data, invoking the render() method, and calling the componentDidMount() method. The growth/updating phase is where the setState() method may be invoked, which will also force a re-rendering of the component. The death/unmounting phase is the "clean up" phase for when the component is removed from the screen, which is also where the componentWillUnmount() method will occur.

3) Explain the details of a Higher Order Component?

    A higher order component (HOC) is simply a function that takes in a component as an argument and returns a new component as an output. A HOC is NOT what is rendered to the UI. The component that is RETURNED FROM the HOC is what is rendered on the screen. These HOCs are very valuable because they allow us to reuse the code from previously-created components to create new components with shared: functionality, information, and characteristics.

4) What are three different ways to style components in React? Explain some of the benefits of each.

    We can style components in React three different ways: (1) with vanilla CSS, (2) with a preprocessor (i.e. - LESS, SASS, etc.), and (3) with the styled-components library (Reactstrap + Bootstrap). Vanilla CSS is the easiest way to style components because it requires no specific structure. Using a preprocessor to style components is advantageous because it allows for improved organization through a nesting-structure, while also improving speed of access to specific rules by compartmentalizing those styles into individual stylesheets that are imported into their respective components. The styled-components library is valuable for larger projects that would need to be deployed quickly because they utilize a library of pre-fabricated elements (i.e. - buttons, dropdowns, carousels) that can be "injected" into a component for improved build efficiency.