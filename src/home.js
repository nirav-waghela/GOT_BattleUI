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

    debounce (func, wait) {
        let timeout
        return function() {
          const context = this
          const args = arguments
          clearTimeout(timeout)
          timeout = setTimeout(() => func.apply(context, args), wait)
        }
    }


    onChange = (event) => {
        if (event.length > 1) {
            this.setState({
                ...this.state,
                search: event
            })
        } 
        if(event.length < 1){
            this.setState({
                ...this.state,
                search:'',
                data:[],
                showSuggestion:false    
            })
        }

        if (this.state.search.length > 2) {
            let callApi = this.debounce(this.fetchQueryData, 1000) 
            callApi()
        }
    }

    fetchQueryData = () => {
        axios.get(`${config.baseUrl}/search/?name=${this.state.search}`)
                .then(res => {
                    this.setState({
                        ...this.state,
                        suggestions: res.data.data,
                        showSuggestion: true
                    })

                })
                .catch(err => console.log(err))
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
        return (
            <Fragment>
                  <Layout>
                    <Header style={{'display':'inline', 'whiteSpace':'nowrap'}}>
                        
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
                        <Footer style={{display:'flex',justifyContent:'center'}}>
                            <div style={{flexFlow:'row',justifyContent:'center'}}>
                                <div style={{display:'inline'}}>The Battle was won by <em style={{fontWeight:'bold'}}>{this.state.data[0].attacker_outcome && this.state.data[0].attacker_outcome === 'win' ? this.state.data[0].attacker_king : this.state.data[0].defender_king}</em></div>
                                <div>The Battle was held at <em style={{fontWeight:'bold'}}> {this.state.data[0].location}</em> in year <em style={{fontWeight:'bold'}}>{this.state.data[0].year}</em></div>
                                <div>The Battle region was  <em style={{fontWeight:'bold'}}>{this.state.data[0].region}</em></div>
                                <div>The Battle type was <em style={{fontWeight:'bold'}}>{this.state.data[0].battle_type}</em></div>
                            </div>
                        </Footer>
                    </Layout>
                    </div> : ""}
            </Fragment>
        )
    }
}

export default Home;