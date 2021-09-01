import React from 'react';
import './App.css';

import UploadComponent from './components/uploadComponent';
import TranslateBtn from './components/translateBtn';
import ShowResult from './components/showResult';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;


class App extends React.Component {
  state = {
    targetFileList: [],
    sourceFileList: [],
    resultFileList: []
  };

  handleTargetFileChange = (fileList) => {
    console.log(fileList);
    this.setState({ targetFileList: fileList })
  }

  getResultFileList = (fileList) => {
    console.log(fileList)
    this.setState({ resultFileList: fileList })
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="title">I2I MASTER</div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <UploadComponent handleTargetFileChange={this.handleTargetFileChange} cardTitle='Upload Source Class (face expression you want)' maxFile='1' />
              <UploadComponent handleTargetFileChange={this.handleTargetFileChange} cardTitle='Upload Target Class (face contour you want)' maxFile='1' />
            </div>
            <div style={{ margin: '30px 0', display: 'flex', justifyContent: 'center' }}>
              <TranslateBtn targetFileList={this.state.targetFileList} getResultFileList={this.getResultFileList} />
            </div>
            <div>
              <ShowResult resultFileList={this.state.resultFileList} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>© xxxxx</Footer>
      </Layout>
    )
  }
}


export default App;
