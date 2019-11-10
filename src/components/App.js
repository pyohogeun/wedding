import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';


import db from '../config';


const styles = theme => ({
  h1: {
    color: "#e46868"
  },
  subtitle: {
    color: "#e46868"
  }
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
    this._get = this._get.bind(this);
  }

  _get() {

    db.collection("user").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }


  _next() {
    console.log(this.state.lastVisible, this.state.records);
    var next = db.collection("records")
      .orderBy("timestamp", "desc")
      .startAfter(this.state.lastVisible)
      .limit(5);

    next.get().then((querySnapshot) => {
      var records = this.state.records
      querySnapshot.forEach(function (doc) {
        records[doc.id] = { name: doc.data().name, time: doc.data().time }
      });
      this.setState({
        records: records,
        lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1]
      })
    })
  }

  componentDidMount() {
    this._get();
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init('1d51107a8d64d06aa5415f3fc5ea6080');
    // 카카오 로그인 버튼을 생성합니다.
    Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function (authObj) {
        // 로그인 성공시, API를 호출합니다.
        fetch("/oauth/authorize?client_id=1d51107a8d64d06aa5415f3fc5ea6080&redirect_uri=/join&response_type=code")
          .then(response => response.json())
          .then(json => console.log(json));
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {

            let data = JSON.stringify(res);
            console.log(res.properties.profile_image);
            console.log(res.properties.nickname);
            console.log(res.id);

          },
          fail: function (error) {
            alert(JSON.stringify(error));
          }
        });

      },
      fail: function (err) {
        console.log(JSON.stringify(err));
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container maxWidth="md">
          회원가입 ->
          <a id="kakao-login-btn"></a>

        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);
