import React from 'react'

class Slide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: null
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        this.setState({...this.state, index: params.page });
    }

    render() {
        return(
            <div>
                {this.state.index}
            </div>
        )
    }
}

export default Slide;