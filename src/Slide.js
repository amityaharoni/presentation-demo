import React from 'react'
import './Slide.css'

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
        let path ="assets/img/presentation/"+this.state.index+".jpg";
        return(
            <div>
                <img className="bg" src={path} />
            </div>   
        )
    }
}

export default Slide;