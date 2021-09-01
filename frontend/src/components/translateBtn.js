import React from 'react';
import { Button } from 'antd';
import axios from 'axios';


class TranslateBtn extends React.Component {
    onBtnClick = () => {
        const formData = new FormData()
        formData.append('target_img', this.props.targetFileList[0])
        axios({
            url: '/translate',
            method: 'post',
            data: formData,
            responseType: 'blob',
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(res => {
            // two kinds response
            // ====== byte stream
            // let myBlob = new Blob([res.data], { type: "image/jpeg" })
            let imgUrl = URL.createObjectURL(res.data)
            this.props.getResultFileList([imgUrl])

            //======= base64
            // let base64url = 'data:image/jpeg;base64,' + res.data
            // this.props.getResultFileList([base64url]])
        })
    }

    render() {
        return (
            <>
                <Button type="primary" onClick={this.onBtnClick}>Translate</Button>
            </>
        )
    }


}

export default TranslateBtn