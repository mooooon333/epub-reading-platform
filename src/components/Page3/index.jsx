/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {List, Rate, Icon, Button} from 'antd';
import { Link } from 'react-router-dom';
import {receiveErrors} from "../../actions/error_actions";
import {receiveCurrentUser} from "../../actions/session_actions";
const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.delete_bookshelf =this.delete_bookshelf.bind(this);
        this.fetchBookshelf = this.fetchBookshelf(this);
    }
    //只在本组件用不再使用redux


    componentWillMount() {
        if(this.props.currentUser != null) {
            fetch(window.webBase+"api/bookshelf/" + this.props.currentUser.id).then(res=>res.json()).then(
                json=>{
                    let myBookShelf=[];
                    if(this.props.books!=null)
                        for(let tmp of json) {
                            if(tmp.book_id in this.props.books)
                            myBookShelf.push(this.props.books[tmp.book_id]);
                        }
                    this.setState({
                        data: myBookShelf,
                    });
                }
            )
        }
    }
    fetchBookshelf() {

    }
    delete_bookshelf(bookID) {
        let user = {
            user_id:this.props.currentUser.id,
            book_id:bookID
        };
        fetch( window.webBase+"api/delete_bookshelf", {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(user)
        }).then(res=>{
            fetch(window.webBase+"api/bookshelf/" + this.props.currentUser.id).then(res=>res.json()).then(
                json=>{
                    let myBookShelf=[];
                    if(this.props.books!=null)
                        for(let tmp of json) {
                            myBookShelf.push(this.props.books[tmp.book_id]);
                        }
                    this.setState({
                        data: myBookShelf,
                    });
                }
            )
        })
    }

    render() {

        return (
            <div
                className="templates-wrapper"
                ref={(d) => {
                    this.dom = d;
                }}
            >

                <div style={{ background: '#fff', padding: 24, minHeight: 600}}>
                    <h1>我的书架</h1>

                    <List
                        className="list"
                        itemLayout="vertical"
                        size="large"
                        dataSource={this.state.data}
                        footer={< div > <b>我的</b> 书架</div >}
                        renderItem={
                            item => (

                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <IconText type="user" text={item.author}/>,
                                        <Link to={`/reader/`+item.title}><Button>开始阅读</Button></Link>,
                                        <Button onClick={this.delete_bookshelf.bind(this,item.id)}>移出书架</Button>
                                    ]
                                    }
                                    extra={<img width={100} alt="logo" src= {item.cover_image_url} />}
                                >

                                    <List.Item.Meta
                                        //avatar={<Avatar shape = "square" size = {150} src={item.poster} width = {100} alt="logo"/>}
                                        title={  item.title}
                                        description={item.description}
                                    />
                                </List.Item>)}
                    />
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        books:state.books,
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Index));