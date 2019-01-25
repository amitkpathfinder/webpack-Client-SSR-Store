import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

const loadData = () => {
    console.log('load');
    console.log('album---1',this.state.albums);
    console.log('loading---1',this.state.loading);
    this.setState({loading:true});

    fetch('http://localhost/api/product/read.php')
            .then((response) => {
                let data = response.json();
                return data;
            })
            .then((data) => {
                console.log(data.records);
                this.setState({
                    albums: data.records,
                    loading:false
                });
                console.log('loading---2',this.state.loading);
                console.log('Setting State-------',this.state.albums);
            })
            .catch((err) => {
                console.log(err);
            });

  }

  export default loadData;