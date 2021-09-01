import React from 'react';
import { Image, Card } from 'antd';

class ShowResult extends React.Component {

    render() {
        // console.log(this.props.resultFileList.lengh)
        // undefined?
        return (
            this.props.resultFileList[0] ?
                <Card title='Result Image'>
                    <Image
                        // width={200}
                        src={this.props.resultFileList[0]}
                    />
                </Card> : null
        )
    }
}

export default ShowResult

