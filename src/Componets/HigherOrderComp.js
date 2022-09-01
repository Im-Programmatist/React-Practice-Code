import React from "react";

/**
 *  a higher-order component is a function that takes a component and returns a new component.
 */
const UpdatedHigherOrderComp = OriginalComponent => {
    class NewComp extends React.Component {
        render() {
            return <OriginalComponent name = "NewHigherOrderComp" />;
        }
    }
    return NewComp;
};

export default  UpdatedHigherOrderComp;