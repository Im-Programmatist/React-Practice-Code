import React from "react";

const UpdatedHigherOrderComp = OriginalComponent => {
    class NewComp extends React.Component {
        render() {
            return <OriginalComponent name = "NewHigherOrderComp" />;
        }
    }
    return NewComp;
};

export default  UpdatedHigherOrderComp;