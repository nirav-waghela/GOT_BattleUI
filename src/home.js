import React, { Component, Fragment } from 'react'
import axios from 'axios'
import config from './constant'
import BattleDetails from './battleDetails'
import { AutoComplete ,Layout ,Button} from 'antd';

const { Header, Content, Footer } = Layout;

const { Option } = AutoComplete

class Home extends Component {
    state = {
        search: '',
        suggestions: [],
        showSuggestion: false,
        data: [],
        showData: false
    }

    showDetails = (name) => {
        axios.get(`${config.baseUrl}/details/?name=${name}`)
            .then(res => {
                if (res.data) {
                    this.setState({
                        ...this.state,
                        data: res.data.data,
                        showData:true
                    })
                }
            })
            .catch(err => console.log(err))
    }

    onChange = (event) => {
        console.log(event.length)
        if (event.length > 1) {
            console.log('1st if')
            this.setState({
                ...this.state,
                search: event
            })
        } 
        if(event.length < 1){
            console.log('2st if')

            this.setState({
                ...this.state,
                search:'',
                data:[],
                showSuggestion:false    
            })
        }

        if (this.state.search.length > 2
            ) {
            axios.get(`${config.baseUrl}/search/?name=${this.state.search}`)
                .then(res => {
                    console.log(res.data.data)

                    this.setState({
                        ...this.state,
                        suggestions: res.data.data,
                        showSuggestion: true
                    })

                })
                .catch(err => console.log(err))
        }
    }
    clear = () =>{
        this.setState({
            ...this.state,
            search:'',
            suggestions:[],
            data:[],
            showSuggestion:false    

        })
    }

    render() {
        console.log(this.state.suggestions)
        return (
            <Fragment>
                  <Layout>
                    <Header style={{'display':'inline'}}>
                        
                        <AutoComplete 
                            style={{
                            'width': '90%'
                            }}
                            onSelect = {this.showDetails}
                            onChange={this.onChange}
                            placeholder="Search Battles here..."
                        >

                            {this.state.showSuggestion && this.state.suggestions.map(item => (
                                    <Option key={item.id}  value={item.name}>
                                    {item.name}
                                    </Option>
                                ))}

                        </AutoComplete>
                        <Button onClick={this.clear}>Clear </Button>
                    </Header>
                    </Layout>
                    {this.state.data.length  
                    ? <div>

                    <Layout>
                         <Content style={{'height':'100%'}}><BattleDetails details = {this.state.data}/></Content>
                    </Layout>
                    <Layout>
                        <Footer>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <div>The Battle was won by {this.state.data[0].attacker_outcome && this.state.data[0].attacker_outcome === 'win' ? this.state.data[0].attacker_king : this.state.data[0].defender_king}</div>
                                <div>The Battle was held at  {this.state.data[0].location} in year {this.state.data[0].year}</div>
                                <div>The Battle region was  {this.state.data[0].region}</div>
                                <div>The Battle type was {this.state.data[0].battle_type}</div>
                            </div>
                        </Footer>
                    </Layout>
                    </div> : ""}
            </Fragment>
        )
    }
}

export default Home;