import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import Nav from "../../components/Nav";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import API from "../../utils/API";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem"
import { Col, Row, Container } from "../../components/Grid";

class Articles extends Component {
  state = {
    arrayOfArticles: [],
    results: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // debugger
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    if (this.state.topic) {
      API.searchArticle(this.state.topic, this.state.startYear,this.state.endYear)
        .then(res => this.setState({ results: res.data.response.docs, topic: "", startYear: "", endYear: "" }))
        .catch(err => console.log(err));
    }
  };

  deleteArticle = id =>{
    API.deleteArticle(id)
    .then(res => this.loadArticles())
    .catch(err => console.log(err));

  }
  saveArticle = i =>{
    //var aticleId= event.target.value
    API.saveArticle({
      topic: this.state.results[i].headline.main,
      url: this.state.results[i].web_url
    }).then(res => alert("Article saved to db")).catch(err => console.log(err));
  }

  // apiSave = id => {
  //   API.saveArticle(id)
  //   .then(res => this.loadArticles())
  //   .catch(err => console.log(err));

  // }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="topic"
                        value={this.state.topic}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Article(required)"
                      />
                    </Col>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="startYear"
                        value={this.state.startYear}
                        onChange={this.handleInputChange}
                        placeholder="Start Year(required)"
                      />
                    </Col>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="endYear"
                        value={this.state.endYear}
                        onChange={this.handleInputChange}
                        placeholder="End Year(required)"
                      />
                    </Col>
                    <br/>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              <h1>Results</h1>
              {this.state.results.length ? (
              <List>
                {this.state.results.map((result,i) => {
                  return (
                    <ListItem key={result._id}>
                      <a href={result.web_url} target = "_blank">
                        <strong>
                          {result.headline.main}
                        </strong>
                      </a>
                      <Button value = {result._id} onClick={() => this.saveArticle(i)} >Save</Button>
                    </ListItem>
                  )
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Articles;
