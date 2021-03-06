import React from 'react';
import {withRouter} from "react-router";
import Animation from "./animation"
import { Descriptions, Badge,Tooltip,List,Comment,Form,Input} from 'antd';
//import 'antd/dist/antd.css';
import { Button} from 'antd';
import './book_show.css'
import {receiveCurrentUser} from "../../actions/session_actions";
import {Link} from "react-router-dom";
const { TextArea } = Input;
const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </div>
);
class BookShow extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            bookID: this.props.match.params.id,
            submitting: false,
            value: '',
        };
    }
    addToShelf() {
        if(this.props.currentUser === null) {
            console.log("无用户")
        } else {
            let bookshelf_item = {
                user_id:this.props.currentUser.id,
                book_id:this.props.book.id,
            }
            fetch( window.webBase+"api/bookshelf", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(bookshelf_item)
            }).then(res=>res.text()).then(text=>console.log(text));
        }

    }
    //Animation/
    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };
    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
            });
        }, 1000);
    };
    render() {
        const bookId = this.props.match.params.id;
        const { submitting, value } = this.state;
        if (this.props.book) {
            let book = this.props.book;
            return (
                <div>
                    <Animation book ={this.props.book}/>

                    <div className="book-show">
                        <Button  type="primary"  size="large" onClick={e=>this.addToShelf()}>
                            加入书架
                        </Button>

                    <Descriptions title="书籍信息" bordered  >
                        <Descriptions.Item label="标题">{book.title}</Descriptions.Item>
                        <Descriptions.Item label="作者">{book.author}</Descriptions.Item>

                        <Descriptions.Item label="简介">
                            {book.description}
                            <br />

                        </Descriptions.Item>
                    </Descriptions>
                    </div>

                </div>
            );

        } else {
            return null;
        }
    }
}
export default withRouter(BookShow);